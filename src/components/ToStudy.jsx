export default function ToStudy({ title }) {
	return (
		<section className='font-oswald my-20 mx-20'>
			<header className='text-3xl uppercase font-bold'>
				<h1 id='tostudy'>{title}</h1>
			</header>
			<p className='mt-4 text-2xl'>
				To plan your study session add a new toStudy to the list. Mark ✅ if
				it's done.
			</p>


			<div className='flex flex-col justify-start mt-4 border-4 w-6/12 rounded-md text-xl'>
				<input type='text'placeholder="Type here..." className='w-inherit m-5  overflow-hidden'></input>
				<div className="flex m-5">
				<p>Estimated pomodoros:</p><input type="number" className="w-12 mr-2 text-right text-red-500"></input>
				</div>
				
				<hr className="border-2"></hr>
				<button className='bg-red-500 text-white rounded-md py-2 px-2 w-fit ml-auto m-5'>
					Add toStudy
				</button>
			</div>
		</section>
	);
}
