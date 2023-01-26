<script>
  import Navi from "$lib/elements/navi.svelte";

  import Logo from "$lib/elements/logo.svelte";
</script>

<header id="top">
  <Logo />
  <Navi />
</header>

<style>
  header {
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    z-index: 100;
  }
</style>
