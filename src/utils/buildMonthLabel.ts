export const buildMonthLabel = (d: DateString) =>
	new Date(d).toLocaleDateString('en-EN', { month: 'long', year: 'numeric' });
