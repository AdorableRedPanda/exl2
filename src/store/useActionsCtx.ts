import { getContext } from 'svelte';
import type { TransactionsActions } from './types';
import { LIST_ACTIONS } from './constants';

export const useActionsCtx = () =>
	getContext<TransactionsActions>(LIST_ACTIONS);
