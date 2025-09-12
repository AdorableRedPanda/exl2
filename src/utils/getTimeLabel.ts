const formatter = new Intl.DateTimeFormat('en-GB', {
	timeStyle: 'short'
});

export const getTimeLabel = (d: DateString) => formatter.format(new Date(d));
