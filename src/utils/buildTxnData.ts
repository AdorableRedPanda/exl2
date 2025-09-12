import { stringifyDate } from './stringifyDate';

export const buildTxnData = (item: any): TransactionData[] => {
	if (typeof item !== 'object' || item === null) {
		return [];
	}

	const date = new Date(item.date);
	if (isNaN(date.getTime())) {
		return [];
	}

	const amount = Number.parseFloat(item.amount?.toString());
	if (isNaN(item.amount)) {
		return [];
	}

	const comment = item.comment || '';

	const data: TransactionData = {
		date: stringifyDate(date),
		amount: Math.abs(amount),
		type: amount >= 0 ? 'income' : 'expense',
		comment
	};

	return [data];
};
