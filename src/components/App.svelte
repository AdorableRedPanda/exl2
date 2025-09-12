<script lang="ts">
	import { MonthsChart, TransactionsList } from './index';
	import { initStore, setActionsCtx } from '@/store';
	import TransactionsUpload from './TransactionsUpload.svelte';

	const store = initStore();
	setActionsCtx(store);
</script>

<TransactionsUpload>
	<main class="h-full w-full grid grid-cols-[360px_1fr] overflow-hidden">
		<TransactionsList transactions={$store} />
		<MonthsChart transactions={$store} />
	</main>
</TransactionsUpload>
