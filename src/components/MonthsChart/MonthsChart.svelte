<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { scaleBand } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
	import { AreaChart } from 'layerchart';
	import { buildMonthsBars } from './utils';

	export let transactions: Transaction[] = [];

	$: data = buildMonthsBars(transactions);

	const chartConfig = {
		expense: { label: 'Expense', color: 'var(--chart-5)' },
		income: { label: 'Income', color: 'var(--chart-3)' }
	} satisfies Chart.ChartConfig;
</script>

<div class="w-full bg-secondary h-full p-1 overflow-auto">
	<Chart.Container config={chartConfig}>
		<AreaChart
			{data}
			xScale={scaleBand()}
			yPadding={[0, 25]}
			x="key"
			axis="x"
			series={[
				{
					key: 'income',
					label: chartConfig.income.label,
					color: chartConfig.income.color
				},
				{
					key: 'expense',
					label: chartConfig.expense.label,
					color: chartConfig.expense.color
				}
			]}
			seriesLayout="stack"
			props={{
				area: {
					curve: curveNatural,
					'fill-opacity': 0.4,
					line: { class: 'stroke-1' },
					motion: 'tween'
				}
			}}
		>
			{#snippet tooltip()}
				<Chart.Tooltip indicator="dot" />
			{/snippet}
		</AreaChart>
	</Chart.Container>
</div>
