export const buildGroupLabel = (t: Transaction) =>
	new Date(t.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short'
	});
