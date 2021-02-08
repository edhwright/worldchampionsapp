<script>
  import { createEventDispatcher } from "svelte";
  import { calculateAge } from "./utils";
  import { onMount } from "svelte";

  import Loading from "./Loading.svelte";
  import CloseButton from "./CloseButton.svelte";
  import Slider from "./Slider.svelte";
  import BoxerProfile from "./BoxerProfile.svelte";
  import Warning from "./Warning.svelte";
  import MobileName from "./MobileName.svelte";

  export let boxer;
  export let handleRemoveBoxer;
  export let filter;
  export let selectedBoxers;

  const dispatch = createEventDispatcher();

  boxer.image = `https://storage.googleapis.com/head-to-head/${boxer.id}-image.jpg`;

  let boxerData;
  let error = false;

  onMount(async () => {
    try {
      const response = await fetch(
        // `http://localhost:5001/headtohead-2867b/us-central1/app/api/boxer/${boxer.id}`
        `https://us-central1-headtohead-2867b.cloudfunctions.net/app/api/boxer/${boxer.id}`
      );
      boxerData = await response.json();

      if (boxerData) {
        if (boxerData.bouts) {
          boxer.boutsFull = boxerData.bouts;
        } else {
          boxer.boutsFull = [];
        }
        boxer.boutsFull.sort((a, b) => (a.date > b.date ? 1 : -1));
        boxer.born = new Date(boxerData.born);
        boxer.bornString = boxer.born
          .toDateString()
          .split(" ")
          .slice(1)
          .join(" ");

        for (let i = 0; i < boxer.boutsFull.length; i++) {
          let tempBout = boxer.boutsFull[i];
          tempBout.oppImage = `https://storage.googleapis.com/head-to-head/${tempBout.id}-image.jpg`;
          let fightDate = new Date(tempBout.date);
          tempBout.boxerAge = calculateAge(fightDate, boxer.born);
        }
        dispatch("boxerAdded");
      }
    } catch {
      error = true;
    }
  });

  let showShadow = false;
  let navState = {
    next: true,
    previous: false,
  };

  function handleShowShadow(event) {
    showShadow = event.detail.shadowState;
  }

  function handleNavState(event) {
    navState = event.detail.navState;
  }

  let viewNav;

  let boxerContainer;
  let boxerProfile;

  $: if (boxer.bouts && boxerContainer) {
    let containerOffsetWidth = boxerContainer.offsetWidth;
    let profileOffsetWidth = boxerProfile.offsetWidth;
    let buttonsOffsetWidth = 100; //buttons width

    let remainingSpace =
      containerOffsetWidth - (profileOffsetWidth + buttonsOffsetWidth);

    if (remainingSpace > boxer.bouts.length * 160) {
      viewNav = false;
    } else {
      viewNav = true;
    }

    showShadow = false;

    navState = {
      next: true,
      previous: false,
    };
  }
</script>

<style>
  .container {
    display: flex;
    max-height: 140px;
    background-color: transparent;
    margin: 0;
  }

  .close-button {
    display: none;
  }

  @media (min-width: 768px) {
    .container {
      margin: 0 0 24px 0;
    }

    .close-button {
      display: initial;
    }
  }

  @media (min-width: 2000px) {
    .container {
      margin: 0 auto 24px auto;
      max-width: 2000px;
    }
  }
</style>

<MobileName name={boxer.name} on:close={() => handleRemoveBoxer(boxer.id)} />

{#if boxerData && boxer.bouts}
  <div class="container" bind:this={boxerContainer}>
    <div class="close-button">
      <CloseButton on:close={() => handleRemoveBoxer(boxer.id)} />
    </div>
    <div class="profile" bind:this={boxerProfile}>
      <BoxerProfile {boxer} {showShadow} />
    </div>
    {#if boxer.bouts.length !== 0}
      <Slider
        on:showShadow={handleShowShadow}
        on:navState={handleNavState}
        on:addOpponent
        {boxer}
        {showShadow}
        {navState}
        {viewNav} />
    {:else}
      <Warning {boxer} {selectedBoxers} {filter} />
    {/if}
  </div>
{:else if error}
  <div class="container">
    <div class="close-button">
      <CloseButton on:close={() => handleRemoveBoxer(boxer.id)} />
    </div>
    <Warning {boxer} {selectedBoxers} {filter} {error} />
  </div>
{:else}
  <Loading />
{/if}
