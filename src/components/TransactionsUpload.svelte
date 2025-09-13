<script lang="ts">
	import Dropzone from '$lib/components/Dropzone.svelte';
	import { useFilesUpload } from '@/store';

	const onDrop = useFilesUpload();
</script>

<Dropzone extensions={['application/json']} {onDrop}>
	<slot />
</Dropzone>
