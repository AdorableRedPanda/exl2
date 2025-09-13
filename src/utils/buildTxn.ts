import { newId } from '@/helpers';

export const buildTxn = (t: TransactionData): Transaction => ({
	...t,
	id: newId()
});
