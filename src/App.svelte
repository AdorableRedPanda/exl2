<script>
	import { AppHeader, MonthsChart, TransactionsList } from './components';
	import { initStore, setActionsCtx } from '@/store';

	const store = initStore();
	setActionsCtx(store);
</script>

<main class="h-full w-full grid grid-rows-[auto_1fr] overflow-hidden">
	<AppHeader />
	<div class="p-2 grid grid-cols-[360px_1fr] gap-1 overflow-hidden">
		<TransactionsList transactions={$store} />
		<MonthsChart transactions={$store} />
	</div>
</main>
