<script lang="ts">
	import { fade } from 'svelte/transition';
	import { UploadCloud, Ban, Cloud } from '@lucide/svelte/icons';

	export let onDrop: (files: File[]) => void;

	export let status: 'error' | 'no_file' | 'dragging' | 'loading' = 'no_file';
	const extensions = ['application/json'];

	function handleDragEnter(event) {
		event.preventDefault();
		const files = [...event.dataTransfer.items];

		const valid =
			files.length &&
			files.every((f) => extensions.includes(f.type)) &&
			files.every((f) => f.kind === 'file');

		status = valid ? 'dragging' : 'error';
	}

	function handleDragOver(event) {
		event.preventDefault();
	}

	function handleDragLeave(event) {
		event.preventDefault();
		if (event.currentTarget.contains(event.relatedTarget)) {
			return;
		}
		status = 'no_file';
	}

	function handleDrop(event) {
		event.preventDefault();

		if (status !== 'error') {
			onDrop(...event.dataTransfer.items);
		}

		status = 'no_file';
	}
</script>

<div
	role="application"
	aria-label="File drop zone"
	on:dragenter={handleDragEnter}
	on:dragover={handleDragOver}
	on:dragleave={handleDragLeave}
	on:drop={handleDrop}
	class="w-full h-full"
>
	<slot />

	{#if status === 'loading'}
		<div class="overlay bg-slate-600/70" transition:fade>
			<div class="message text-white">
				<UploadCloud class="h-20 w-20 duration-400 animate-caret-blink" />
				Loading...
			</div>
		</div>
	{/if}

	{#if status === 'dragging'}
		<div class="overlay bg-slate-600/70" transition:fade>
			<div class="message text-white">
				<UploadCloud class="h-20 w-20" />
				Drop your file here
			</div>
		</div>
	{/if}

	{#if status === 'error'}
		<div class="overlay bg-red-900/60" transition:fade>
			<div class="message text-white">
				<Ban class="h-20 w-20" />
				Invalid file type
			</div>
		</div>
	{/if}
</div>

<style>
	@reference "tailwindcss";
	.overlay {
		@apply fixed inset-0 flex items-center justify-center z-50;
	}
	.message {
		@apply text-2xl font-bold p-6 flex flex-col items-center justify-center gap-6 text-white;
	}
</style>
