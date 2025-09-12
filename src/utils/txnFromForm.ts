import { buildTxnData } from '@/helpers';

export const txnFromForm = (form: HTMLFormElement) => {
	const data = new FormData(form);

	const type = data.get('type') as TransactionType;
	const amount = parseFloat(data.get('amount') as string);
	const date = data.get('date') as string;
	const comment = data.get('comment') as string;

	return buildTxnData({ type, amount, date, comment });
};
