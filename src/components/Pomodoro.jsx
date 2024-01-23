import React from 'react';

const Pomodoro = ({ title }) => {
  return (
    <section className="font-oswald m-6">
      <header>
        <h1 id="pomodoro" className="text-3xl uppercase font-bold">
          {title}
        </h1>
      </header>
      <p className="text text-md mt-4">
        The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique is named after the Italian word for "tomato" (pomodoro) because Cirillo initially used a tomato-shaped kitchen timer to track his work intervals. The technique is designed to improve focus, productivity, and time management by breaking work into short, focused intervals, called "Pomodoros," typically lasting 25 minutes, followed by a short break of 5 minutes.
      </p>
      <ol className="mt-5 text-md list-decimal">
        <p className="bold-text text-2xl">
          The basic steps of the Pomodoro Technique include:
        </p>
        <li className="step my-2 mx-4 mt-5">
          Choose a task: Select a specific task or project that needs to be completed.
        </li>
        <li className="step my-2 mx-4">
          Set the timer: Set a timer for 25 minutes, representing one Pomodoro. This time is dedicated solely to the chosen task.
        </li>
        <li className="step my-2 mx-4">
          Work on the task: Focus completely on the task at hand until the timer rings. Avoid any distractions or interruptions during this period.
        </li>
        <li className="step my-2 mx-4">
          Take a short break: After completing a Pomodoro, take a 5-minute break to relax and recharge. Use this time to stretch, grab a snack, or take a short walk.
        </li>
        <li className="step my-2 mx-4">
          Repeat: Repeat the process with another Pomodoro. After completing four Pomodoros, take a longer break of 15-30 minutes.
        </li>
      </ol>
    </section>
  );
};

export default Pomodoro;
