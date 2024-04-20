<!-- src/components/Modal.svelte -->

<script>
    import { modalState } from '$lib/stores/modal';
    import { onMount } from 'svelte';
  
    // Function to toggle the modal state
    const toggleModal = () => {
      modalState.update(state => ({
        ...state,
        isOpen: !state.isOpen,
      }));
    };
  
    export let modalOpen = false; // local state to listen to the modalState
  
    const updateModalState = (/** @type {{ isOpen: any; }} */ value) => {
      modalOpen = value.isOpen;
    }
  
    onMount(() => {
      const unsubscribe = modalState.subscribe(value => {
        updateModalState(value);
      });
  
      return unsubscribe;
    });
  </script>
  
  {#if modalOpen}
    <div class="modal">
      <div class="modal-content">
        <!-- Your modal content goes here -->
        <p>This is a modal</p>
        <button on:click={toggleModal}>Close Modal</button>
      </div>
    </div>
  {/if}
  
  <style>
    /* Styles for the modal */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
    }
  </style>
  