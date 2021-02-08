<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let bout;

  $: if (bout.result === "W") {
    bout.result = {
      background: "#A8D0A2BD",
      text: "#002d05",
    };
  } else if (bout.result === "L") {
    bout.result = {
      background: "#DB9090BD",
      text: "#530000",
    };
  } else if (bout.result === "D") {
    bout.result = {
      background: "#A2A9D0BD",
      text: "#02194D",
    };
  } else if (bout.result === "N") {
    bout.result = {
      background: "#C1C2C8BD",
      text: "#353434",
    };
  } else if (bout.result === "S") {
    bout.result = {
      background: "#FDE175BD",
      text: "#403000",
    };
  }

  function handleAddOpponent() {
    dispatch("addOpponent", { boxer: { name: bout.opponent, id: bout.id } });
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: 120px;
    align-items: center;
    justify-content: space-around;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .name {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-align: center;
  }

  /* .weight {
    display: none;
  } */

  .age {
    display: none;
  }

  img {
    object-fit: cover;
    object-position: 50% 25%;
    border-radius: 0.5rem;
    width: 68px;
    height: 80px;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-areas:
        "info image"
        "boxer boxer";
      /* grid-template-rows: minmax(0, 1fr) 38px; */
      grid-template-rows: minmax(0, 1fr) 28px;
      grid-template-columns: 1.2fr 1fr;
      width: 160px;
      height: 140px;
      /* background-color: white; */
      align-items: inherit;
      justify-content: inherit;
      background: white;
    }

    .info {
      grid-area: info;
      display: flex;
      flex-direction: column;
      margin: 0.8rem 0 0.8rem 0.4rem;
      /* padding: 0.7rem 0.7rem 0.7rem 0.7rem; */
      padding: 0.6rem 0.6rem 0.6rem 0.6rem;
      border-radius: 0.8rem 0 0 0.8rem;
      /* border-radius: 0.5rem 0 0 0; */
      /* border-bottom: 2px solid var(--background-color); */
      justify-content: space-between;
      background-color: var(--background-color);
    }

    .name {
      font-size: 0.8rem;
      font-weight: normal;
      padding: 0;
      margin: 0;
      text-align: initial;
      height: 100%;
      color: var(--text-color);
    }

    .name:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .image {
      grid-area: image;
      display: flex;
      background-color: lightgray;
      margin: 0.8rem 0.4rem 0.8rem 0;
      border-radius: 0 0.8rem 0.8rem 0;
      padding: 0;
      align-items: center;
    }

    img {
      grid-area: image;
      object-fit: cover;
      object-position: 50% 25%;
      width: 100%;
      height: 100%;
      border-radius: 0 0.8rem 0.8rem 0;
    }

    .age {
      display: inherit;
      grid-area: boxer;
      margin: 0;
      padding: 0.4rem 0 0.4rem 1rem;
      font-size: 0.7rem;
      border-top: 1px solid rgb(43, 43, 43);
      color: rgb(43, 43, 43);
    }

    /* .weight {
      display: inherit;
      font-size: 0.7rem;
    } */
  }
</style>

<div
  class="container"
  style="--background-color: {bout.result.background}; --text-color: {bout.result.text};">
  <div class="info">
    <p class="name" on:click={handleAddOpponent}>{bout.opponent}</p>
    <!-- <p class="weight">{bout.weight}</p> -->
  </div>
  <div class="image"><img src={bout.oppImage} alt={bout.opponent} /></div>
  <div class="age">Age: {bout.boxerAge}</div>
</div>
