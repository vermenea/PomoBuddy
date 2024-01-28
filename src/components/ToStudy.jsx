import { useState } from 'react';

export default function ToStudy({ title }) {
	const [toStudyValue, setToStudyValue] = useState('');
	const [estimatedPomodoros, setEstimatedPomodoros] = useState(1);
	const [submittedtoStudyValue, setSubmittedToStudyValue] = useState([]);

	function handleInput(e) {
		setToStudyValue(e.target.value);
	}
	function handleEstimatedPomodorosChange(e) {
		setEstimatedPomodoros(parseInt(e.target.value, 10) || 1);
	}
	function handleSubmit() {
		if (toStudyValue.trim() !== '') {
			const newToStudy = {
				value: toStudyValue,
				pomodoros: estimatedPomodoros,
			};

			setSubmittedToStudyValue([...submittedtoStudyValue, newToStudy]);
		}
		setToStudyValue('');
		setEstimatedPomodoros(1);
	}
	function handleCheckboxChange(index) {
		setSubmittedToStudyValue((prevToStudyValues) => {
			const updatedToStudyValues = [...prevToStudyValues];
			updatedToStudyValues.splice(index, 1);
			return updatedToStudyValues;
		});
	}
	return (
		<section className='font-oswald my-20 mx-20 md:mx-40 lg:mx-60'>
			<header className='text-3xl uppercase font-bold'>
				<h1 id='tostudy'>{title}</h1>
			</header>
			<p className='mt-10 text-xl'>
				To plan your study session add a new toStudy to the list, set estimated
				pomodoros that you need to set for study set. Mark ✅ if it's done.
			</p>

			<div className='flex flex-col justify-start mt-10 border-4 w-full lg:w-6/12 rounded-md text-xl'>
				<input
					type='text'
					placeholder='Type here...'
					className='w-inherit m-5  overflow-hidden'
					value={toStudyValue}
					onChange={handleInput}
				></input>
				<div className='flex m-5'>
					<p>Estimated pomodoros:</p>
					<input
						type='number'
						className='w-12 mr-2 text-right text-red-500'
						value={estimatedPomodoros}
						onChange={handleEstimatedPomodorosChange}
					></input>
				</div>

				<hr className='border-2'></hr>
				<ul className='flex flex-col align-center m-8 '>
					{submittedtoStudyValue.map((toStudy, index) => (
						<>
							<li className='flex items-center m-2' key={index}>
								{toStudy.value} ➡️ {toStudy.pomodoros} pomodoros
								<button
									type='checkbox'
									className='ml-auto'
									onClick={() => handleCheckboxChange(index)}
								>
									✅
								</button>
							</li>
						</>
					))}
				</ul>
				<button
					className='bg-red-500 text-white rounded-md py-2 px-2 w-fit ml-auto m-5'
					onClick={handleSubmit}
				>
					Add toStudy
				</button>
			</div>
		</section>
	);
}
