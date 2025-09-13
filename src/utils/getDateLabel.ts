export const getDateLabel = (d: DateString) =>
	new Date(d).toLocaleDateString('en-GB', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric'
	});
