import { selectDate } from './selectDate';

export const getDayKey = (t: Transaction) => selectDate(t.date);
