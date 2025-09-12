<script lang="ts">
	import { MonthsChart, TransactionsList } from './components';
	import { initStore, setActionsCtx } from '@/store';
	import Dropzone from '@/components/Dropzone.svelte';

	const store = initStore();
	setActionsCtx(store);

	const onDrop = (files: File[]) => {
		const file = files[0];
	};
</script>

<Dropzone onDrop={(f) => console.log(f)}>
	<main class="h-full w-full grid grid-cols-[360px_1fr] overflow-hidden">
		<TransactionsList transactions={$store} />
		<MonthsChart transactions={$store} />
	</main>
</Dropzone>
