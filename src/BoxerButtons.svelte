<script>
  export let viewNav;
  export let navState;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleNext() {
    dispatch("next");
  }

  function handlePrevious() {
    dispatch("previous");
  }
</script>

<style>
  .buttons-container {
    display: none;
  }

  @media (min-width: 768px) {
    .buttons-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      min-width: 50px;
      max-width: 50px;
      height: inherit;
      margin: 10px 0 10px 0;
      position: relative;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 0;
      width: 28px;
      height: 28px;
    }

    button:disabled {
      opacity: 0.5;
    }

    button:focus {
      box-shadow: 0 0 0 2px rgb(255, 134, 106);
    }

    button:active {
      background-color: white;
    }

    svg {
      width: 60%;
      height: 60%;
    }
  }
</style>

<div class="buttons-container">
  {#if viewNav}
    <button class="arrow" on:click={handleNext} disabled={!navState.next}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5.56"
        height="9"
        viewBox="0 0 5.56 9">
        <path d="M1.06,0,0,1.06,3.43,4.5,0,7.94,1.06,9l4.5-4.5Z" />
      </svg>
    </button>
    <button
      class="arrow"
      on:click={handlePrevious}
      disabled={!navState.previous}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5.56"
        height="9"
        viewBox="0 0 5.56 9">
        <path d="M5.56,1.06,4.5,0,0,4.5,4.5,9,5.56,7.94,2.12,4.5Z" />
      </svg>
    </button>
  {/if}
</div>
