import { buildMonthLabel } from '@/utils/buildMonthLabel';

export const groupByMonth = (arr: Transaction[]) =>
	Object.groupBy(arr, (t) => buildMonthLabel(t.date));
