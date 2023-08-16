import { useEffect, useState } from 'react';

function App() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
	const [intervalId, setIntervalId] = useState(0);

	const startTimer = () => {
		const interval = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);

		setIntervalId(interval);
	};

	const clearTimer = () => {
		clearInterval(intervalId);
		setHours(0);
		setMinutes(0);
		setSeconds(0);
	};

	useEffect(() => {
		if (Number(seconds) === 60) {
			setMinutes((prev) => prev + 1);
			setSeconds(0);
		}
		if (Number(minutes) === 60) {
			setHours((prev) => prev + 1);
			setMinutes(0);
		}
	}, [seconds]);

	return (
		<div className="content">
			<div className="timer-wrapper">
				<p className="timer">
					<span>{hours < 10 ? `0${hours}` : hours}</span>
					<span> : </span>
					<span>{minutes < 10 ? `0${minutes}` : minutes}</span>
					<span> : </span>
					<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
				</p>
			</div>

			<div className="button-wrapper">
				<button className="btn start-btn" onClick={startTimer}>
					Start
				</button>
				<button className="btn reset-btn" onClick={clearTimer}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default App;
