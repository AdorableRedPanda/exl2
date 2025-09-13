<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { scaleBand } from 'd3-scale';
	import { curveNatural } from 'd3-shape';
	import { AreaChart } from 'layerchart';
	import { selectMonthSummaries } from '@/store';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';

	const data = selectMonthSummaries();

	const chartConfig = {
		expense: { label: 'Expense', color: 'var(--chart-5)' },
		income: { label: 'Income', color: 'var(--chart-3)' }
	} satisfies Chart.ChartConfig;
</script>

<Card class="w-full min-w-120 h-fit">
	<CardContent>
		<Chart.Container config={chartConfig}>
			<AreaChart
				data={$data}
				xScale={scaleBand()}
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
	</CardContent>
</Card>
