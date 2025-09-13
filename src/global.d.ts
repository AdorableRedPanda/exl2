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
		transactions: Transaction[];
	}

	interface TransactionsSummary {
		income: number;
		expense: number;
		diff: number;
	}

	interface GroupSummary {
		key: string;
		summary: TransactionsSummary;
	}
}
