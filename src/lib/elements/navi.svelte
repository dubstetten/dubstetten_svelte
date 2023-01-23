<script lang="ts">
  import { fly } from "svelte/transition";
  import Burger from "$lib/elements/Hamburger.svelte";

  export let open = false;
  export const onClick = (): void => {
    open = !open;
  };
</script>

<div class="burger">
  <Burger {open} {onClick} />
</div>
{#if open}
  <nav transition:fly={{ y: -200, duration: 400 }}>
    <a href="/tickets">Tickets</a>
    <a href="/lineup">Line-Up</a>
    <a href="/about">Info</a>
    <a href="/contact">Contact</a>
  </nav>
{/if}

<style>
  .burger {
    display: flex;
    justify-content: flex-end;
  }

  nav {
    position: absolute;
    z-index: -1;
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    background-color: var(--white);
  }
  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    margin: 0 0.5rem;
  }
  a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
</style>
