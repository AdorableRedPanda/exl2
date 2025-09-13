type KeyBuilder = (item: Transaction) => string;

export const buildGroups = (key: KeyBuilder, data: Transaction[]) => {
	const grouped = Object.groupBy(data, key);
	const entries = Object.entries(grouped);

	return entries.map(
		([key, data = []]): TransactionsGroup => ({ key, transactions: data })
	);
};
