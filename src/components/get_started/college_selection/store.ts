import { writable } from 'svelte/store';
import colleges from '../../../data/collegelist.json';

const collegelist = writable(colleges); // Initial color

export default collegelist;
