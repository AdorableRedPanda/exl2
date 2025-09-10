import { takeMonthString } from '@/components/MonthsChart/utils/takeMonth';

export const groupByMonth = (arr: Transaction[]) =>
	Object.groupBy(arr, (t) => takeMonthString(t.date));
