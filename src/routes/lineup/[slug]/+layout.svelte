<script>
  function goBack() {
    window.history.back();
  }
</script>

<div class="page-wrapper">
  <slot />
  <button class="back-btn" on:click={goBack}>Back</button>
</div>

<style>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
    max-width: 800px;
  }

  .back-btn {
    background-image: linear-gradient(
      to right,
      #4cb8c4 0%,
      #3cd3ad 51%,
      #4cb8c4 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 2 2 20px #eee;
    border-radius: 10px;
    display: block;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .back-btn:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
</style>
