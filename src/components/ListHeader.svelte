<script lang="ts">
	import {useTransactionsFiles} from "@/store";
	import { Download } from '@lucide/svelte/icons';

	const { download } = useTransactionsFiles()
</script>


<header
	class="sticky px-2 py-2 row-start-1 flex gap-1 flex-wrap items-center justify-between"
>
	<h1 class="text-2xl font-bold flex-1">Transactions</h1>
	<button aria-label="download" on:click={download} class="cursor-pointer p-2 rounded-sm hover:bg-secondary">
		<Download />
	</button>
</header>
