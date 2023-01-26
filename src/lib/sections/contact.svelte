<script>
  import OpenMap from "../map/open-map.svelte";
  import Picture from "../elements/picture.svelte";
  import eichhorn from "$lib/assets/img/eichhorn_icon.png?width=320;480;640;768&format=webp;avif;jpg";
  import danubian from "$lib/assets/img/danubian_icon.jpeg?width=320;480;640;768&format=webp;avif;jpg";
</script>

<section id="contact" class="contact">
  <h3 class="title">Contact</h3>
  <h4>Verein BELE</h4>
  <p>
    Verein zur Förderung und Bewusstseinsbildung <br /> für ein glückliches
    Leben
    <br />
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
  </p>

  <h4>Eichhornhof - Gemüse mit Herz</h4>
  <p>
    Wimbergeramt 22
    <br />
    4392 Dorfstetten
    <br />
    Gemüsehandwerk aus dem Waldviertel
    <br />
    Wir vom Eichhornhof haben uns vor 2 Jahren der Landwirtschaft zugewandt, mit
    dem Wunsch sinnvolle Arbeit zu tun und gut mit der Erde umzugehen.
  </p>
  <a class="logos" href="https://eichhornhof.at/index.html">
    <Picture src={eichhorn} alt="Eichhornhof" />
  </a>

  <h4>Danubian Dub <br />Soundsystem</h4>
  <p>
    blala
    <br />
    Wien
    <br />
    ist anders
  </p>
  <a
    class="logos"
    href="https://www.soundsystem.world/soundsystems/danubian-dub-soundsystem/"
  >
    <Picture src={danubian} alt="Danubian Dub" />
  </a>
  <OpenMap />
</section>

<style>
  h4 {
    margin: 1rem;
  }
  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
</style>
