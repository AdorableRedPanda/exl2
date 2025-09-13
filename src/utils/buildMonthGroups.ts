import { groupByMonth } from './groupByMonth';

export const buildMonthGroups = (transactions: Transaction[]) =>
	Object.entries(groupByMonth(transactions)).map(
		([key, transactions]): TransactionsGroup => ({
			key,
			transactions: transactions || []
		})
	);
