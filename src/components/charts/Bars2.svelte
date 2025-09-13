<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { scaleBand } from 'd3-scale';
	import { BarChart } from 'layerchart';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { selectMonthSummaries } from '@/store';

	const data = selectMonthSummaries();

	const chartConfig = {
		expense: { label: 'Expense', color: 'var(--chart-5)' },
		income: { label: 'Income', color: 'var(--chart-3)' }
	} satisfies Chart.ChartConfig;
</script>

<Card class=" w-full min-w-120 h-fit">
	<CardContent>
		<Chart.Container config={chartConfig}>
			<BarChart
				data={$data}
				xScale={scaleBand().padding(0.5)}
				yPadding={[0, 25]}
				x="key"
				axis="x"
				series={[
					{
						key: 'summary.income',
						label: chartConfig.income.label,
						color: chartConfig.income.color
					},
					{
						key: 'summary.expense',
						label: chartConfig.expense.label,
						color: chartConfig.expense.color
					}
				]}
				seriesLayout="group"
				props={{
					bar: {
						class: 'stroke-1',
						motion: 'tween'
					}
				}}
			>
				{#snippet tooltip()}
					<Chart.Tooltip indicator="line" />
				{/snippet}
			</BarChart>
		</Chart.Container>
	</CardContent>
</Card>
