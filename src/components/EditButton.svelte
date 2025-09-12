<script lang="ts">
	import { cn } from '$lib/utils';

	export let transaction: Transaction;
	let onClick = () => {
		console.log('edit', transaction);
	};
</script>

<button
	on:click={onClick}
	class={cn(
		'cursor-pointer text-sm py-0.5 px-1.5  rounded-sm',
		' text-blue-900 bg-sky-500/10',
		'opacity-0 scale-90 transition-all  duration-200',
		'group-hover:opacity-100 group-hover:scale-100 focus:scale-100 focus:opacity-100'
	)}
>
	edit
</button>
