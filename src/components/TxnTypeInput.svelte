<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	export let type: TransactionType;
</script>

<div class="flex gap-4 items-center">
	<RadioGroup bind:value={type} class="flex gap-4 text-sm">
		<div class="flex items-center">
			<RadioGroupItem value="income" id="rg-income" />
			<Label class="p-2 cursor-pointer text-base" for="rg-income">income</Label>
		</div>
		<div class="flex items-center">
			<RadioGroupItem value="expense" id="rg-expense" />
			<Label class="p-2 cursor-pointer text-base" for="rg-expense">outcome</Label>
		</div>
	</RadioGroup>
</div>
