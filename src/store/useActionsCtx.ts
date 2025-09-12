import { getContext } from 'svelte';
import type { TransactionsActions } from './types';
import { CTX_NAME } from './constants';

export const useActionsCtx = () => getContext<TransactionsActions>(CTX_NAME);
