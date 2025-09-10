const formatter = new Intl.DateTimeFormat('en-GB', {
	timeStyle: 'short'
});

export const getTimeLabel = (d: DateISO) => formatter.format(new Date(d));
