export const calculateTimeToEvent = () => {
	let eventDate = new Date("2023-10-12T09:00:00-07:00"); // October 12, 2023, 9 AM PT
	const currentDate = new Date();

	if (currentDate == eventDate) {
		// if event has already occurred, reset eventDate to one month from now (so that the countdown will never reach 0)
		eventDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate(), 9, 0, 0, 0); // One month from now
	}

	const timeRemaining = eventDate.getTime() - currentDate.getTime();

	// calculate days, hours, minutes, seconds
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	return { days, hours, minutes, seconds };
};
