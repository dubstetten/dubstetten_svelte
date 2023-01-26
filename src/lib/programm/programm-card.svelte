<script lang="ts">
  import ProgramCardContent from "./programm-card-content.svelte";
  import type { ProgrammItem } from "$lib/programm/programm";
  export let programItem: ProgrammItem;
</script>

<div class="programm-item-wrapper">
  {#if programItem.startsAt}
    <div class="startsAt">{programItem.startsAt}</div>
  {/if}
  {#if programItem.title || programItem.description || programItem.thumbnail}
    <div class="programm-item">
      <ProgramCardContent {programItem} />
    </div>
  {/if}
</div>

<style>
  .programm-item-wrapper {
    position: relative;
    width: 100%;
    max-width: 450px;
    min-height: 150px;
    padding-bottom: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .programm-item-wrapper::before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 1rem;
    bottom: 0;
    background: rgb(125, 125, 125);
    background: linear-gradient(
      90deg,
      rgba(125, 125, 125, 1) 0%,
      rgba(198, 198, 198, 1) 100%
    );
    opacity: 0.25;
  }
  .programm-item-wrapper:last-child::before {
    display: none;
  }
  .startsAt {
    font-size: 1.5rem;
    font-family: "own";
    color: white;
    background: linear-gradient(-25deg, #4b6cb7 0%, #182848 100%);
    padding: 1rem 2rem;
    max-width: 75%;
    margin-bottom: -3.5rem;
    z-index: 2;
    border-radius: 2rem;
    border: 2px solid #182848;
  }
  .programm-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f4d03f;
    background-image: linear-gradient(132deg, #f4d03f 0%, #16a085 100%);

    margin: 1rem 1rem;
    border-radius: 0rem;
    overflow: hidden;
    box-shadow: rgb(0, 0, 0, 0.1) 0.5rem 0 1rem;
    width: 100%;
    border-radius: 2rem;
    position: relative;
  }
</style>
