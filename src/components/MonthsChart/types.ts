export interface TransactionsSummary {
	income: number;
	expense: number;
}

export interface GroupData extends TransactionsSummary {
	key: string;
}
