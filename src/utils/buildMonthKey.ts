export const buildMonthKey = (d: DateString) =>
	new Date(d).toLocaleDateString('en-EN', { month: 'long', year: 'numeric' });
