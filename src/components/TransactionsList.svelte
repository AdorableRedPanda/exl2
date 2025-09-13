<script>
	import GroupItem from '@/components/GroupItem.svelte';
	import { selectMonthGroups } from '@/store/selectors';
	const months = selectMonthGroups();
</script>

<ul class="list-none scrollbar-thin w-full h-fit overflow-auto flex flex-col">
	{#each $months as month (month.key)}
		<li class="contents">
			<GroupItem group={month} />
		</li>
	{/each}
</ul>
