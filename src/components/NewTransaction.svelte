<script>
	import { slide } from 'svelte/transition';
	import TxnForm from './TxnForm.svelte';
	import {getActionsCtx} from "@/store/index.js";

	let opened = false;
	const open = () => {
		opened = true;
	};

	const close = () => {
		opened = false;
	};

	const actions = getActionsCtx()
</script>


<div class="border-slate-800 border-2 rounded-xs" >
{#if opened}
	<div class="bg-background rounded-sm " transition:slide={{ duration: 300 }}>
		<TxnForm onSubmit={actions.add} onClose={close} />
	</div>
{/if}

{#if !opened}
	<button class="bg-slate-800 text-white cursor-pointer w-full text-base" on:click={open}>
		create new
	</button>
{/if}
</div>
