export interface TransactionsActions {
	add: (t: TransactionData) => void;
	delete: (id: ID) => void;
	update: (t: TransactionData, id: ID) => void;
}
