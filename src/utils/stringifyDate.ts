export const stringifyDate = (d: Date) => {
	const date = d.toLocaleDateString('en-CA');
	const time = d.toLocaleTimeString('default', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	return `${date}T${time}`;
};
