<script lang="ts">
	import TransactionItem from './TransactionItem.svelte';

	export let group: TransactionsGroup;
</script>

<div class="overflow-hidden h-auto">
	<div class="bg-secondary text-sm p-1">
		<span class="">{group.key}</span>
	</div>
	<ul class="list-none w-full flex flex-col">
		{#each group.transactions as t (t.id)}
			<li class=" border-b last:border-none:">
				<TransactionItem {t} />
			</li>
		{/each}
	</ul>
</div>
