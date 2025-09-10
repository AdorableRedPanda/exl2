export {};

declare global {
	type ID = string;
	type DateISO = string;
	type TransactionType = 'income' | 'expense';

	interface Transaction extends TransactionData {
		id: ID;
	}

	interface TransactionData {
		type: TransactionType;
		comment: string;
		amount: number;
		date: DateISO;
	}

	interface TransactionsGroup {
		key: string;
		data: Transaction[];
	}
}
