<script lang="ts">
  import MediaQuery from "svelte-media-queries";

  import {
    Button,
    Divider,
    Menu,
    Text,
    createStyles,
    Burger,
    SvelteUIProvider,
  } from "@svelteuidev/core";
  let opened = false;
</script>

<MediaQuery query="(min-width: 480px)" let:matches>
  {#if matches}
    <nav>
      <ul>
        <li><a href="/tickets">Tickets</a></li>
        <li><a href="/lineup">Line-Up</a></li>
        <li><a href="/about">Info</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    <style>
      nav {
        display: flex;
        justify-content: end;
        align-items: center;
        height: 2rem;
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
  {:else}
    <SvelteUIProvider themeObserver="dark">
      <Menu size="xl">
        <Menu.Label>Menu</Menu.Label>
        <Burger {opened} on:click={() => (opened = !opened)} slot="control"
          >menu</Burger
        >
        <Menu.Item root="a" href="/tickets" on:click={() => (opened = !opened)}
          >Tickets</Menu.Item
        >
        <Menu.Item root="a" href="/lineup" on:click={() => (opened = !opened)}
          >Line-Up</Menu.Item
        >
        <Menu.Item root="a" href="/about" on:click={() => (opened = !opened)}
          >Info</Menu.Item
        >
        <Menu.Item root="a" href="/contact" on:click={() => (opened = !opened)}
          >Contact</Menu.Item
        >
      </Menu>
    </SvelteUIProvider>
  {/if}
</MediaQuery>
