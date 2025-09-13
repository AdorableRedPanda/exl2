import { stringifyDate } from '@/utils';

export const buildTxnData = (
	data: Partial<TransactionData>
): TransactionData => ({
	type: 'expense',
	comment: '',
	amount: 0,
	date: stringifyDate(new Date()),
	...data
});
