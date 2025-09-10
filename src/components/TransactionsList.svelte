<script lang="ts">
	import DayItem from './DayItem.svelte';
	import { buildGroups, getDayKey } from '@/utils';
	import { ListHeader } from '@/components';
	export let transactions: Transaction[] = [];

	$: days = buildGroups(getDayKey, transactions);

	const onEdit = (t: Transaction) => {
		console.log('edit', t);
	};
</script>

<div class="overflow-hidden grid grid-rows-[auto_auto_1fr] border-r-2">
	<ListHeader />
	<div class="bg-foreground">add new</div>
	<ul class="list-none w-full overflow-auto flex flex-col">
		{#each days as d}
			<li class="contents">
				<DayItem {d} {onEdit} />
			</li>
		{/each}
	</ul>
</div>
