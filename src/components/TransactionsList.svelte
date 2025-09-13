<script lang="ts">
	import { buildGroups, getDayKey } from '@/utils';

	import DayItem from './DayItem.svelte';
	import ListHeader from './ListHeader.svelte';
	import NewTransaction from './NewTransaction.svelte';
	import TransactionItem from '@/components/TransactionItem.svelte';

	export let transactions: Transaction[] = [];

	$: days = buildGroups(getDayKey, transactions);

	const onEdit = (t: Transaction) => {
		console.log('edit', t);
	};
</script>

<div class="overflow-hidden grid grid-rows-[auto_auto_1fr] border-r-2">
	<ListHeader />
	<NewTransaction />
	<ul class="list-none w-full overflow-auto flex flex-col">
		{#each transactions as transaction}
			<li class="contents">
				<TransactionItem {transaction} />
			</li>
		{/each}
	</ul>
</div>
