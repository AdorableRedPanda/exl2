export {};

declare global {
	type ID = string;
	type DateString = string;
	type TransactionType = 'income' | 'expense';

	interface Transaction extends TransactionData {
		id: ID;
	}

	interface TransactionData {
		type: TransactionType;
		comment: string;
		amount: number;
		date: DateString;
	}

	interface TransactionsGroup {
		key: string;
		data: Transaction[];
	}
}
