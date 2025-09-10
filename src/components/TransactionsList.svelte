<script lang="ts">
	import { TxnItem } from './TxnItem';
	export let transactions: Transaction[] = [];
</script>

<ul class="list-none w-full overflow-auto p-2 flex flex-col gap-1">
	{#each transactions as transaction}
		<li>
			<TxnItem t={transaction} />
		</li>
	{/each}
</ul>
