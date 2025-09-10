<script lang="ts">
	import { getTimeLabel } from '@/utils';
	import { cn } from '$lib/utils';
	import EditButton from '@/components/EditButton.svelte';
	export let transaction: Transaction;

	const isIncome = transaction.type === 'income';
	const amountCls = cn('font-semibold', isIncome ? 'text-green-900' : 'text-red-900');
	const amountLabel = `${isIncome ? '+' : '-'}${transaction.amount}€`;
	const timeLabel = getTimeLabel(transaction.date);
</script>

<div class="group bg-background py-1 pl-3 border-b last:border-0">
	<div class="text-sm">
		<div class="flex justify-between pr-2 items-center w-full">
			<span class="flex-1">{timeLabel}</span>
			<div class={amountCls}>{amountLabel}</div>
		</div>
		<div class="flex w-full pr-2 overflow-auto items-start min-h-5">
			<p class="text-gray-800 flex-1">{transaction.comment}</p>
			<EditButton {transaction} />
		</div>
	</div>
</div>
