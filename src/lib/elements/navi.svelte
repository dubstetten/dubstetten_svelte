<script lang="ts">
  import { Burger } from "@svelteuidev/core";
  let opened = false;

  import { Button, Divider, Menu } from "@svelteuidev/core";
  import { Camera, ChatBubble, Gear } from "radix-icons-svelte";
</script>

<Menu>
  <Burger {opened} on:click={() => (opened = !opened)} slot="control"
    >Toggle Menu</Burger
  >
  <Menu.Item>Settings</Menu.Item>
  <Menu.Item>Messages</Menu.Item>
  <Menu.Item>Gallery</Menu.Item>
</Menu>
