<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { getDateLabel } from '@/components/TxnItem/utils';
	export let t: Transaction;
	const isIncome = t.type === 'income';
</script>

<Card class="w-full p-2">
	<CardContent class="flex flex-col justify-between p-2">
		<div class="flex gap-0.5 align-baseline text-sm">
			<span class="text-sm flex-1">{getDateLabel(t.date)}</span>
			<div class={cn('font-semibold', isIncome ? 'text-green-800' : 'text-red-800')}>
				{isIncome ? '+' : '-'}
				{t.amount}€
			</div>
		</div>

		<div class="w-full">
			<span class="text-sm block min-h-5 text-muted-foreground">{t.comment}</span>
		</div>
	</CardContent>
</Card>
