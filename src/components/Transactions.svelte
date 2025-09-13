<script lang="ts">
	import ListHeader from './ListHeader.svelte';
	import NewTransaction from './NewTransaction.svelte';
	import TransactionsList from '@/components/TransactionsList.svelte';
</script>

<div class="overflow-auto h-full grid grid-rows-[auto_auto_1fr] border-r-2">
	<ListHeader />
	<NewTransaction />
	<div class="overflow-auto">
		<TransactionsList />
	</div>
</div>
