import type { Writable } from 'svelte/store';
import { setContext } from 'svelte';
import { DbClient as db, newId } from '@/helpers';
import type { TransactionsActions } from './types';
import { filterOther, updateTxn } from '@/utils';
import { CTX_NAME } from './constants';

export const setActionsCtx = (store: Writable<Transaction[]>) => {
	const add = (t: TransactionData) => {
		const id = newId();
		const transaction = { ...t, id };
		db.add(transaction).then((res) => store.update((ts) => [...ts, res]));
	};

	const _delete = (id: ID) => db.delete(id).then(() => store.update(filterOther(id)));

	const update = (t: TransactionData, id: ID) =>
		db.update({ ...t, id }).then(() => store.update(updateTxn(id, t)));

	setContext<TransactionsActions>(CTX_NAME, { add, delete: _delete, update });
};
