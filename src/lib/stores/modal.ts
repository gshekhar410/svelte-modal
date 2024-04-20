import { writable } from 'svelte/store';

// Initial state: modal is closed
export const modalState = writable({
  isOpen: false,
});