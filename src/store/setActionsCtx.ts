import type { Writable } from 'svelte/store';
import { setContext } from 'svelte';
import { DbClient as db, newId } from '@/helpers';
import type { TransactionsActions } from './types';
import { filterOther, updateTxn } from '@/utils';
import { CTX_NAME } from './constants';

export const setActionsCtx = (store: Writable<Transaction[]>) => {
	const add = async (t: TransactionData) => {
		await db.add({ ...t, id: newId() });
		const data = await db.getAll();

		store.set(data);
	};

	const _delete = (id: ID) => db.delete(id).then(() => store.update(filterOther(id)));

	const update = (t: TransactionData, id: ID) =>
		db.update({ ...t, id }).then(() => store.update(updateTxn(id, t)));

	const addMany = async (payload: TransactionData[]) => {
		const items = payload.map((t) => ({ ...t, id: newId() }));
		await db.addMany(items);
		const data = await db.getAll();

		store.set(data);
	};

	setContext<TransactionsActions>(CTX_NAME, { addMany, add, delete: _delete, update });
};
