<script lang="ts">
	import Dropzone from '$lib/components/Dropzone.svelte';
	import { useActionsCtx } from '@/store';
	import { parseTxnsFile } from '@/utils';
	const actions = useActionsCtx();

	let state: DropState = 'no_files';

	const handleFile = (file: File) => {};

	const onDrop = (files: File[]) => {
		state = 'loading';

		const file = files[0];

		parseTxnsFile(file)
			.then(console.log)
			.catch(console.error)
			.finally(() => {
				state = 'no_files';
			});
	};
</script>

<Dropzone bind:state extensions={['application/json']} {onDrop}>
	<slot />
</Dropzone>
