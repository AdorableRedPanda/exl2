import { stringifyDate } from './stringifyDate';

const buildType = (type: string, amount: number): TransactionType => {
	if (type === 'income' || type === 'expense') {
		return type;
	}
	return amount >= 0 ? 'income' : 'expense';
};

export const txnFromAny = (item: any): TransactionData[] => {
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

	const type = buildType(item.type || '', amount);

	const data: TransactionData = {
		date: stringifyDate(date),
		amount: Math.abs(amount),
		type,
		comment
	};

	return [data];
};
