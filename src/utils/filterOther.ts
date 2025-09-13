export const filterOther = (id: ID) => (ts: Transaction[]) =>
	ts.filter((t) => t.id !== id);
