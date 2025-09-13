<script lang="ts">
	import { slide } from 'svelte/transition';
	import TransactionForm from './TransactionForm.svelte';
	import { useActionsCtx } from '@/store';
	import { Button } from '$lib/components/ui/button';
	import { buildTxnData } from '@/helpers';

	let opened = false;
	const actions = useActionsCtx();
	const initial = buildTxnData({});

	const open = () => {
		opened = true;
	};

	const close = () => {
		opened = false;
	};

	const onSubmit = (data: TransactionData) => {
		actions.add(data);
		close();
	};
</script>

<div class="border-slate-800 border-2 rounded-xs">
	{#if opened}
		<div class="bg-background rounded-sm" transition:slide={{ duration: 300 }}>
			<TransactionForm {initial} {onSubmit} onClose={close}>
				<div class="w-full flex gap-2 justify-end">
					<Button type="reset" variant="secondary">Close</Button>
					<Button type="submit">Create</Button>
				</div>
			</TransactionForm>
		</div>
	{/if}

	{#if !opened}
		<button
			class="bg-slate-800 text-white cursor-pointer w-full text-base"
			on:click={open}
		>
			create new
		</button>
	{/if}
</div>
