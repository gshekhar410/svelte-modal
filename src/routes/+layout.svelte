<script>
	import '../app.css';
	import Modal from '$lib/components/modal.svelte';
	import { modalState } from '$lib/stores/modal';
	import { onDestroy } from 'svelte';

	let modalOpen = false; // local state to listen to the modalState

	// Subscribe to modalState changes
	const unsubscribe = modalState.subscribe((value) => {
		modalOpen = value.isOpen;
	});

	// Cleanup subscription
	onDestroy(() => {
		unsubscribe();
	});
</script>

<Modal {modalOpen} />
<slot />
