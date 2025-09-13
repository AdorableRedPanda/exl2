<script lang="ts">
	import { MonthsChart } from './MonthsChart';
	import { initStore, setActionsCtx } from '@/store';
	import TransactionsUpload from './TransactionsUpload.svelte';
	import TransactionsList from './TransactionsList.svelte';

	const store = initStore();
	setActionsCtx(store);
</script>

<TransactionsUpload>
	<main class="h-full w-full grid grid-cols-[360px_1fr] overflow-hidden">
		<TransactionsList transactions={$store} />
		<MonthsChart transactions={$store} />
	</main>
</TransactionsUpload>
