<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Labeled } from '$lib/components/ui/labeled';

	export let value: TransactionType;
</script>

<Labeled label="Type" htmlFor="type">
	<div class="flex gap-4 items-center">
		<RadioGroup bind:value id="type" name="type" class="flex gap-4 text-sm">
			<div class="flex items-center">
				<RadioGroupItem value="expense" id="rg-expense" />
				<Label class="p-2 cursor-pointer text-base" for="rg-expense"
					>expense</Label
				>
			</div>
			<div class="flex items-center">
				<RadioGroupItem value="income" id="rg-income" />
				<Label class="p-2 cursor-pointer text-base" for="rg-income"
					>income</Label
				>
			</div>
		</RadioGroup>
	</div>
</Labeled>
