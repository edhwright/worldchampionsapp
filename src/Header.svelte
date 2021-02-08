<script>
  import { createEventDispatcher } from "svelte";
  import Search from "./Search.svelte";
  import Modal from "./Modal.svelte";
  import Belts from "./Belts.svelte";
  export let boxerList;

  const dispatch = createEventDispatcher();

  function handleAddRandom() {
    let randomBoxer = boxerList[Math.floor(Math.random() * boxerList.length)];
    dispatch("addRandomBoxer", {
      boxer: randomBoxer,
    });
  }

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }
</script>

<style>
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: rgb(43, 43, 43);
    padding: 12px 12px 12px 12px;
    background-color: white;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 0 10px 0;
    font-size: 0.9rem;
  }

  svg {
    display: none;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button {
    padding: 16px 16px;
    margin: 0;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    background: none;
    border: none;
    color: rgb(43, 43, 43);
    background-color: rgb(241, 241, 241);
    /* height: 35px; */
  }

  button:hover {
    background-color: rgb(241, 241, 241);
  }

  button:focus {
    box-shadow: 0 0 0 2px rgb(255, 134, 106);
  }

  button:active {
    background-color: white;
    box-shadow: 0 0 0 2px rgb(255, 134, 106);
  }

  .theme-desktop {
    display: none;
  }

  .theme-mobile {
    display: inline-flex;
  }

  .random-champ-button {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 400px) {
    button {
      margin: 0 5px 0 0;
    }

    .random-champ-button {
      width: 50%;
      margin-bottom: 0;
    }

    .options {
      flex-direction: row;
    }
  }

  @media (min-width: 500px) {
    button {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 700px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
    }

    .title {
      /* display: initial; */
      margin: 0;
      width: initial;
    }

    .options {
      display: initial;
      margin: 0;
      width: initial;
    }

    .theme-desktop {
      display: inline-flex;
    }

    .theme-mobile {
      display: none;
    }

    .random-champ-button {
      width: inherit;
    }

    button {
      background-color: inherit;
      margin: 0 5px;
      height: 35px;
      padding: 0 16px;
    }

    /* svg {
      display: inherit;
      margin: 0 15px;
    } */
  }
  @media (min-width: 940px) {
    svg {
      display: inherit;
      margin: 0 15px;
    }
  }
</style>

<Modal {showModal} on:click={toggleModal} />

<header class="container">
  <div class="title">
    <div>worldchampions.app</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="rgb(255, 134, 106)">
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
    <Belts />
    <div class="theme-mobile"><button on:click={toggleModal}>Info</button></div>
  </div>
  <div class="options">
    <div class="theme-desktop">
      <button on:click={toggleModal}>Info</button>
    </div>
    <button on:click={handleAddRandom} class="random-champ-button">Add Random
      Champion</button>
    <Search {boxerList} on:addBoxer />
  </div>
</header>
