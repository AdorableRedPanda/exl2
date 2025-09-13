<script lang="ts">
	import Dropzone from '$lib/components/Dropzone.svelte';
	import { useTransactionsFiles } from '@/store';

	const { upload } = useTransactionsFiles();
</script>

<Dropzone extensions={['application/json']} onDrop={upload}>
	<slot />
</Dropzone>
