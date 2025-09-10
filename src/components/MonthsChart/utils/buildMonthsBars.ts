import { groupByMonth } from './groupByMonth';
import { buildSummary } from './buildSummary';
import { buildGroupLabel } from './buildGroupLabel';
import type { GroupData } from '@/components/MonthsChart/types';

const buildBars = (transactions?: Transaction[]): GroupData[] => {
	if (!transactions?.length) {
		return [];
	}

	const summary = buildSummary(transactions);
	const label = buildGroupLabel(transactions[0]);

	return [{ key: label, ...summary }];
};

export const buildMonthsBars = (transactions: Transaction[]) =>
	Object.values(groupByMonth(transactions.toReversed())).flatMap(buildBars);
