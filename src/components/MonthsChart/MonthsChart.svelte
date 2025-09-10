<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Chart from '$lib/components/ui/chart/index.js';
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

<Card.Root сlass="w-full h-fit p-1 overflow-auto">
	<Card.Header>
		<Card.Title>Area Chart - Stacked</Card.Title>
		<Card.Description>Showing total visitors for the last 6 months</Card.Description>
	</Card.Header>
	<Card.Content>
		<Chart.Container config={chartConfig}>
			<AreaChart
					class="border-amber-950"
				data={data}
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
	</Card.Content>
	<Card.Footer>
		<div class="flex w-full items-start gap-2 text-sm">
			<div class="grid gap-2">
				<div class="flex items-center gap-2 font-medium leading-none">
					Trending up by 5.2% this month
				</div>
				<div class="text-muted-foreground flex items-center gap-2 leading-none">
					January - June 2024
				</div>
			</div>
		</div>
	</Card.Footer>
</Card.Root>
