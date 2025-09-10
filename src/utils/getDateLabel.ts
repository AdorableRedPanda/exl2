const formatter = new Intl.DateTimeFormat('en-GB', {
	day: '2-digit',
	month: 'short',
	year: '2-digit',
	hour12: false
});

export const getDateLabel = (s: DateISO) => formatter.format(new Date(s));
