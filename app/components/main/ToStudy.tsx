'use client';
import { ChangeEvent, useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { db } from '@/firebase';
import {
	collection,
	addDoc,
	getDocs,
	deleteDoc,
	doc,
} from 'firebase/firestore';

interface ToStudyValue {
	value: string;
	pomodoros: number;
}

const ToStudy: React.FC = () => {
	const { data: session } = useSession();
	const userId = session?.user?.email;
	const [toStudyValue, setToStudyValue] = useState<string>('');
	const [estimatedPomodoros, setEstimatedPomodoros] = useState<number>(1);
	const [submittedToStudyValue, setSubmittedToStudyValue] = useState<
		ToStudyValue[]
	>([]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [error, setError] = useState<string | null>(null);

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		setToStudyValue(e.target.value);
		setError('');
	};

	const handleEstimatedPomodorosChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEstimatedPomodoros(parseInt(e.target.value, 10) || 1);
	};

	const handleSubmit = async () => {
		if (!userId) {
			setError('User not authenticated');
			return;
		}
		if (toStudyValue.trim() !== '') {
			const newToStudy: ToStudyValue = {
				value: toStudyValue,
				pomodoros: estimatedPomodoros,
			};

			try {
				const userCollection = collection(db, 'users', userId, 'toStudies');
				await addDoc(userCollection, newToStudy);
				setSubmittedToStudyValue([...submittedToStudyValue, newToStudy]);
			} catch (error) {
				console.error('Error adding document: ', error);
				setError('Error adding document: ' + error);
			}
		} else {
			setError('Please enter a valid toStudy');
		}
		setToStudyValue('');
		setEstimatedPomodoros(1);
	};

	useEffect(() => {
		const fetchToStudies = async () => {
			if (!userId) return;
			const userCollection = collection(db, 'users', userId, 'toStudies');
			const querySnapshot = await getDocs(userCollection);
			const toStudies: ToStudyValue[] = [];
			querySnapshot.forEach((doc) => {
				toStudies.push(doc.data() as ToStudyValue);
			});
			setSubmittedToStudyValue(toStudies);
		};
		fetchToStudies();
	}, [userId]);

	const handleCheckboxChange = async (index: number) => {
		if (!userId) return;
		const toStudyToDelete = submittedToStudyValue[index];
		const userCollection = collection(db, 'users', userId, 'toStudies');
		const querySnapshot = await getDocs(userCollection);
		querySnapshot.forEach(async (docSnapshot) => {
			if (
				docSnapshot.data().value === toStudyToDelete.value &&
				docSnapshot.data().pomodoros === toStudyToDelete.pomodoros
			) {
				await deleteDoc(doc(db, 'users', userId, 'toStudies', docSnapshot.id));
			}
		});

		setSubmittedToStudyValue((prevToStudyValues) => {
			const updatedToStudyValues = [...prevToStudyValues];
			updatedToStudyValues.splice(index, 1);
			return updatedToStudyValues;
		});
	};

	return (
		<section className='font-Oswald max-w-4xl mx-auto p-10 md:px-16 lg:px-20 xl:px-20 scroll-smooth'>
			<motion.header
				className='mt-20 text-3xl uppercase font-bold'
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: '0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				<h1 id='tostudy'>create a tostudy</h1>
			</motion.header>
			<motion.p
				className='mt-20 text-xl'
				ref={ref}
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: '0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				Hi <strong className='text-red-500'>{session?.user?.name}</strong> !
				Let's begin study session, add a new toStudy to the list, set estimated
				time in pomodoros that you need for session, and mark ✅ if you're done.
			</motion.p>

			<motion.div
				className='flex flex-col justify-start mt-10 border-4 w-full rounded-md'
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: '2.5s',
				}}
			>
				<input
					type='text'
					placeholder='What are you studying 🧐?'
					className='w-inherit m-5 overflow-hidden text-sm md:text-md lg:text-xl'
					value={toStudyValue}
					onChange={handleInput}
				></input>
				<div className='flex justify-between items-center m-5 text-sm md:text-md lg:text-xl'>
					<div className='flex justify-center items-center'>
					<p>Estimated pomodoros:</p>
					<input
						type='number'
						className='w-12 mx-2 text-right text-red-500'
						value={estimatedPomodoros}
						onChange={handleEstimatedPomodorosChange}
					></input>
					</div>
					
					<button
						className='py-1.5 px-1  bg-red-500 text-white rounded-md '
						onClick={handleSubmit}
					>
						Add
					</button>
				</div>
				{error && (
					<p className='text-red-500 text-sm md:text-md lg:text-xl m-5'>
						{error}
					</p>
				)}
				<hr className='border-2'></hr>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 text-sm md:text-md lg:text-xl'>
					{submittedToStudyValue.map((toStudy, index) => (
						<li
							className='flex flex-col p-4 border rounded-lg items-center justify-between'
							key={index}
						>
							<strong>{toStudy.value}</strong>
							<p>{toStudy.pomodoros} pomodoros</p>
							<button
								type='button'
								className='mt-2 text-white py-1 px-2 rounded'
								onClick={() => handleCheckboxChange(index)}
							>
								✅
							</button>
						</li>
					))}
				</ul>
			</motion.div>
		</section>
	);
};

export default ToStudy;
