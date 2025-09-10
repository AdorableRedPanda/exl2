import type { TransactionsSummary } from '../types';

const emptyBar: TransactionsSummary = { income: 0, expense: 0 };

const reduceCb = (accum: TransactionsSummary, next: Transaction) => {
	const income = next.type === 'income' ? next.amount : 0;
	const expense = next.type === 'expense' ? next.amount : 0;
	return {
		income: accum.income + income,
		expense: accum.expense + expense
	};
};

export const buildSummary = (transactions: Transaction[]): TransactionsSummary =>
	transactions.reduce(reduceCb, emptyBar);
