<script>
  import lp from "$lib/assets/img/dubstetten-lp.svg";
</script>

<section id="hero">
  <div id="lp">
    <img class="rotating" src={lp} alt="Dubstetten LP" />
  </div>

  <div class="wrapper">
    <h1>Dubstetten</h1>
    <h2>nature - music -family</h2>
    <h3>21. &amp; 22. July 2023</h3>
  </div>
</section>

<style>
  #lp {
    position: absolute;
    left: -50vw;
    bottom: -60vw;
    opacity: 0.2;
  }
  #lp img {
    --lp-size: 200vw;
    width: var(--lp-size);
    height: var(--lp-size);
  }
  @media screen and (min-width: 768px) {
    #lp {
      position: absolute;
      left: -25vw;
      bottom: -40vw;
      opacity: 0.2;
    }
    #lp img {
      --lp-size: 100vw;
      width: var(--lp-size);
      height: var(--lp-size);
    }
  }

  #hero {
    width: 100%;
    flex-grow: 1;
    background-size: cover;
    overflow: hidden;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    background-repeat: no-repeat;
    align-items: center;

    position: relative;

    background: #a8a6c0; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ffebb5,
      #f3c491,
      #e78787
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ffebb5,
      #f3c491,
      #e78787
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    z-index: 1;
    color: #ffffff;
  }

  h1 {
    text-align: center;
    font: 80px own;
  }

  h2 {
    text-align: center;
    font: 30px own;
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .rotating {
    animation: rotating 1.8s linear infinite;
  }
</style>
