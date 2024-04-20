<!-- src/routes/SomePage.svelte -->

<script>
	import { modalState } from '$lib/stores/modal';

	// Function to open the modal
	const openModal = () => {
		modalState.update((state) => ({
			...state,
			isOpen: true
		}));
	};

	// Function to close the modal
	const closeModal = () => {
		modalState.update((state) => ({
			...state,
			isOpen: false
		}));
	};
</script>

<button on:click={openModal}>Open Modal</button>
<button on:click={closeModal}>Close Modal</button>
