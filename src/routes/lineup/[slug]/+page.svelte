<script lang="ts">
  import { onMount } from "svelte";
  import type { ProgrammItem } from "$lib/programm/programm";
  import type { PageData } from "./$types";
  import Picture from "$lib/elements/picture.svelte";

  export let data: PageData;
  let item: ProgrammItem | undefined;

  onMount(() => {
    console.log(data);
    item = data.programItem;
  });
</script>

{#if item}
  <div class="wrapper">
    {#if item.title}
      <h1>
        {item.title}
      </h1>
    {/if}
    {#if item.description}
      <h2>
        {item.description}
      </h2>
    {/if}
    {#if item.thumbnail}
      <div class="thumb">
        <Picture src={item.thumbnail} alt={item.title} />
      </div>
    {/if}
    {#if item.startsAt}
      <div class="startsAt">{item.startsAt}</div>
    {/if}
    {#if item.longDesciption}
      <div class="longDesciption">
        {item.longDesciption}
      </div>
    {/if}
  </div>
{:else}
  <h1>404</h1>
{/if}

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
  }
  h1 {
    font-size: 5rem;
    font-family: "own";
  }
  .thumb {
    width: 100%;
    height: 100%;
    max-width: 450px;
    overflow: hidden;
    border-radius: 50%;
  }
  .startsAt {
    font-size: 1.5rem;
    font-family: "own";
    color: white;
    background-color: #ff3cac;
    background-image: linear-gradient(
      225deg,
      #ff3cac 0%,
      #784ba0 50%,
      #2b86c5 100%
    );
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: 2px solid #182848;
  }
</style>
