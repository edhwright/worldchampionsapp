<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("close");
  }
</script>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    .close-button {
      min-width: 50px;
      max-width: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    button {
      width: 28px;
      height: 28px;
    }

    button:focus {
      box-shadow: 0 0 0 2px rgb(255, 134, 106);
    }

    button:active {
      background-color: white;
    }
  }
</style>

<div class="close-button">
  <button class="close" on:click={handleClose}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12px"
      height="12px"
      viewBox="0 0 22 22">
      <path
        d="M22,19.17,13.82,11,22,2.81,19.17,0,11,8.18,2.81,0,0,2.81,8.19,11,0,19.19,2.81,22,11,13.81,19.19,22Z" />
    </svg>
  </button>
</div>
