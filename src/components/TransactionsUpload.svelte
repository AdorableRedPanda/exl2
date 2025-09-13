<script lang="ts">
	import Dropzone, { type DropState } from '$lib/components/Dropzone.svelte';
	import { useActionsCtx } from '@/store';
	import { parseTxnsFile } from '@/utils';
	const actions = useActionsCtx();

	let state: DropState = 'no_files';

	const handleFile = (f: File) => parseTxnsFile(f).then(actions.addMany).catch(console.error);

	const onDrop = (files: File[]) => {
		state = 'loading';

		Promise.all(files.map(handleFile)).finally(() => {
			state = 'no_files';
		});
	};
</script>

<Dropzone bind:state extensions={['application/json']} {onDrop}>
	<slot />
</Dropzone>
