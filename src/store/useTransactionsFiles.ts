import { useActionsCtx } from './useActionsCtx';
import { parseTxnsFile } from '@/utils';
import { DbClient, downloadAsJSON, newId } from '@/helpers';

export const useTransactionsFiles = () => {
	const actions = useActionsCtx();

	const uploadFile = (f: File) =>
		parseTxnsFile(f).then(actions.addMany).catch(console.error);

	const upload = (files: File[]) =>
		Promise.all(files.map(uploadFile)).catch(() => {
			console.error('Error happened during files upload');
		});

	const download = async () => {
		const data = await DbClient.getAll();
		const filename = `transactions_${newId().slice(0, 8)}`;

		return downloadAsJSON(filename, data);
	};

	return { upload, download };
};
