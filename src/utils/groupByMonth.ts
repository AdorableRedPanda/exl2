import { buildMonthKey } from './buildMonthKey';

export const groupByMonth = (arr: Transaction[]) =>
	Object.groupBy(arr, (t) => buildMonthKey(t.date));
