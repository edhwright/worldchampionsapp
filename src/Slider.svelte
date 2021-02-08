<script>
  import BoxerButtons from "./BoxerButtons.svelte";
  import { scrollPosition } from "./utils.js";
  import { createEventDispatcher } from "svelte";
  import Bout from "./BoxerBout.svelte";
  import EmblaCarousel from "embla-carousel";
  import { onMount } from "svelte";
  export let boxer;

  const dispatch = createEventDispatcher();

  let emblaContainer;
  let embla = {};
  let options = { align: "start", draggable: false, startIndex: 1, speed: 15 };

  export let showShadow;
  export let navState;
  export let viewNav;

  let mounted = false;

  onMount(() => {
    embla = EmblaCarousel(emblaContainer, options);
    embla.on("select", () => {
      [showShadow, navState] = scrollPosition(embla);
      dispatch("showShadow", { shadowState: showShadow });
      dispatch("navState", { navState: navState });
    });
    mounted = true;
  });

  $: if (boxer.bouts && mounted) {
    setTimeout(() => {
      embla.reInit(options);
    }, 100);
  }

  let mobile = window.matchMedia("(max-width: 767px)");

  function setView(mobile) {
    if (mobile.matches) {
      options.draggable = true;
      options.startIndex = 0;
      setTimeout(() => {
        embla.reInit(options);
      }, 100);
    } else {
      options.draggable = false;
      options.startIndex = 1;
      setTimeout(() => {
        embla.reInit(options);
      }, 100);
    }
  }

  setView(mobile);
  mobile.addListener(setView);
</script>

<style>
  .embla {
    overflow: hidden;
    width: 100%;
    border-radius: 0;
    box-shadow: 0px 3px 4px 2px rgba(199, 199, 199, 0.5);
    -moz-box-shadow: 0px 3px 4px 2px rgba(199, 199, 199, 0.5);
    -webkit-box-shadow: 0px 3px 4px 2px rgba(199, 199, 199, 0.5);
    background-color: white;
  }

  .embla__container {
    display: flex;
    max-height: 120px;
  }

  .embla__slide {
    position: relative;
    width: min-content;
  }

  img {
    object-fit: cover;
    width: 100px;
    height: 100%;
    margin: 0;
  }

  @media (min-width: 768px) {
    .embla {
      border-radius: 0 1rem 1rem 0;
      box-shadow: inset -1rem 0 0 0 white, inset 0 -27px 0 0 white,
        inset 0 -28px 0 0 rgb(43, 43, 43), 0 5px 10px rgba(0, 0, 0, 0.12);
      -moz-box-shadow: inset -1rem 0 0 0 white, inset 0 -27px 0 0 white,
        inset 0 -28px 0 0 rgb(43, 43, 43), 0 5px 10px rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: inset -1rem 0 0 0 white, inset 0 -27px 0 0 white,
        inset 0 -28px 0 0 rgb(43, 43, 43), 0 5px 10px rgba(0, 0, 0, 0.12);
    }

    .embla__container {
      max-height: 140px;
    }

    .embla__slide {
      width: initial;
    }

    .boxer-image {
      display: none;
    }

    img {
      min-width: 115px;
      min-height: 140px;
    }
  }
</style>

<div class="embla" id="embla" bind:this={emblaContainer}>
  <div class="embla__container">
    <div class="embla__slide boxer-image"><img src={boxer.image} /></div>
    {#each boxer.bouts as bout (bout.date)}
      <div class="embla__slide">
        <Bout {bout} on:addOpponent />
      </div>
    {/each}
  </div>
</div>
<BoxerButtons
  on:next={() => embla.scrollNext()}
  on:previous={() => embla.scrollPrev()}
  {navState}
  {viewNav} />
