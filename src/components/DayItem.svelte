<script lang="ts">
	import TxnItem from './TxnItem.svelte';
	import { getDateLabel } from '@/utils';

	export let d: TransactionsGroup;
</script>

<div class="w-full">
	<div class="bg-secondary text-sm p-1">
		<span class="flex-1">{getDateLabel(d.key)}</span>
	</div>

	<ul class="list-none w-full flex flex-col">
		{#each d.data as t}
			<li>
				<TxnItem transaction={t} />
			</li>
		{/each}
	</ul>
</div>
