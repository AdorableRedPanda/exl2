import { txnFromAny } from './txnFromAny';

export const parseTxnsFile = async (file: File) => {
	const text = await file.text();
	const json = JSON.parse(text);

	if (!Array.isArray(json)) {
		throw new Error('Invalid file format: expected an array of transactions');
	}

	return json.flatMap(txnFromAny);
};
