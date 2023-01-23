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
    <a href="https://magrippis.com/tube">Videos</a>
    <a href="https://magrippis.com/blog">Blogposts</a>
    <a href="https://magrippis.com/tube">Guides</a>
    <a href="https://magrippis.com/tube">Portfolio</a>
    <a href="https://magrippis.com/milestones">Milestones</a>
  </nav>
{/if}

<style>
  .burger {
    display: flex;
    justify-content: space-between;
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
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
</style>
