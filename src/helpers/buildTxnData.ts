import { stringifyDate } from '@/utils';

export const buildTxnData = (data: Partial<TransactionData>): TransactionData => ({
	type: 'income',
	comment: '',
	amount: 0,
	date: stringifyDate(new Date()),
	...data
});
