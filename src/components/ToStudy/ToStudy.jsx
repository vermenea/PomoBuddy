import './ToStudy.css';
export default function ToStudy({ title }) {
	return (
		<section className='tostudy-section'>
			<header>
				<h1 id='tostudy'>{title}</h1>
			</header>
			<p className='tostudy-text'>
				To plan your study session add a new toStudy to the list.
				Mark ✅ if it's done.
			</p>
			<h3>toDo list will be put in here soon ... 👀</h3>
		</section>
	);
}
