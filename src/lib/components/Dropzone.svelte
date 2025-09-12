<script lang="ts">
	import { fade } from 'svelte/transition';
	import { isFilesDragged, isValidFiles, noop } from '../utils';
	import { UploadCloud, Ban } from '@lucide/svelte/icons';
	type DropState = 'no_files' | 'dragging' | 'error' | 'loading';

	export let onDrop: (files: File[]) => void;

	export let state: DropState;
	export let extensions: string[] = [];

	function handleDragEnter(event: DragEvent) {
		if (!isFilesDragged(event.dataTransfer)) {
			return;
		}

		const valid = isValidFiles(extensions, event.dataTransfer);
		state = valid ? 'dragging' : 'error';
	}

	function handleDragLeave(event) {
		if (event.currentTarget.contains(event.relatedTarget)) {
			return;
		}
		state = 'no_files';
	}

	function handleDrop(event) {
		if (state === 'error') {
			return;
		}

		onDrop([...event.dataTransfer.files]);
	}
</script>

<div
	role="application"
	aria-label="File drop zone"
	on:dragenter|preventDefault={handleDragEnter}
	on:dragover|preventDefault={noop}
	on:dragleave|preventDefault={handleDragLeave}
	on:drop|preventDefault={handleDrop}
	class="w-full h-full"
>
	<slot />

	{#if state === 'loading'}
		<div class="overlay bg-slate-600/70" transition:fade>
			<div class="message text-white">
				<UploadCloud class="h-20 w-20 duration-400 animate-caret-blink" />
				Loading...
			</div>
		</div>
	{/if}

	{#if state === 'dragging'}
		<div class="overlay bg-slate-600/70" transition:fade>
			<div class="message text-white">
				<UploadCloud class="h-20 w-20" />
				Drop your file here
			</div>
		</div>
	{/if}

	{#if state === 'error'}
		<div class="overlay bg-red-900/60" transition:fade>
			<div class="message text-white">
				<Ban class="h-20 w-20" />
				Invalid file type. <br />
				Supported types: {extensions.join(', ')}
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
