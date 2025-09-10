<script>
	import { AppHeader, TransactionsList } from './components';
	import { initStore, setActionsCtx } from '@/store';

	const store = initStore();
	setActionsCtx(store);
</script>

<main class="h-full w-full grid grid-rows-[auto_1fr] overflow-hidden">
	<AppHeader />
	<div class="grid grid-cols-[360px_360px_1fr] gap-4 overflow-hidden">
		<TransactionsList transactions={$store} />
	</div>
</main>
