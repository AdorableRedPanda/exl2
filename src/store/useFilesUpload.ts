import { parseTxnsFile } from '@/utils';
import { useActionsCtx } from './useActionsCtx';

export const useFilesUpload = () => {
	const actions = useActionsCtx();

	const uploadFile = (f: File) =>
		parseTxnsFile(f).then(actions.addMany).catch(console.error);

	return (files: File[]) => Promise.all(files.map(uploadFile)).catch(() => {
		console.error('Error happened during files upload')
	});
};
