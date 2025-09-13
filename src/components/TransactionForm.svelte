<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import TxnTypeInput from '@/components/TxnTypeInput.svelte';
	import { Labeled } from '$lib/components/ui/labeled';
	import { txnFromForm } from '@/utils';

	export let onSubmit: (t: TransactionData) => void = () => {};
	export let onClose: () => void = () => {};
	export let initial: TransactionData;

	const handleSubmit = (ev: SubmitEvent) => {
		const form = ev.target as HTMLFormElement;

		if (!form) {
			return;
		}

		onSubmit(txnFromForm(form));
	};
</script>

<form
	on:reset={onClose}
	on:submit|preventDefault={handleSubmit}
	class="py-2 px-4 space-y-3 grid-cols-2"
>
	<TxnTypeInput value={initial.type} />
	<div class="grid grid-cols-[2fr_3fr] gap-3">
		<Labeled htmlFor="amount" label="Amount">
			<Input
				name="amount"
				id="amount"
				type="number"
				min="0.01"
				step=".01"
				value={initial.amount}
				required
			/>
		</Labeled>
		<Labeled htmlFor="date" label="Date">
			<Input
				type="datetime-local"
				id="date"
				name="date"
				value={initial.date}
				required
			/>
		</Labeled>
	</div>
	<Labeled htmlFor="comment" label="Comment">
		<Input name="comment" id="comment" type="text" value={initial.comment} />
	</Labeled>

	<slot />
</form>
