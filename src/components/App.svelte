<script lang="ts">
	import { useInitCtx } from '@/store';
	import TransactionsUpload from './TransactionsUpload.svelte';
	import Transactions from './Transactions.svelte';
	import {Areas, Bars2} from './charts';

	useInitCtx();
</script>

<TransactionsUpload>
	<main class="h-full w-full grid grid-cols-[360px_1fr] overflow-hidden">
		<Transactions />
		<div class="bg-secondary o p-1 flex flex-col gap-3 overflow-auto">
			<Bars2 />
		</div>
	</main>
</TransactionsUpload>
