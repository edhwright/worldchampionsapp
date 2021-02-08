<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let filter;

  $: {
    dispatch("filterChange", {
      filter: filter,
    });
  }
</script>

<style>
  .container {
    display: flex;
    min-width: 100px;
    justify-content: center;
    margin: 24px 12px 24px 12px;
  }

  button {
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    padding: 8px 15px;
    text-align: center;
    font-size: 0.8rem;
    border: 1px solid #ccc;
    background-color: rgb(241, 241, 241);
    color: rgb(43, 43, 43);
    border-radius: 0.5rem;
    margin: 0 5px;
  }

  button:active {
    background-color: white;
  }

  button:hover {
    background-color: white;
  }

  button:focus {
    box-shadow: 0 0 0 2px rgb(255, 134, 106);
    z-index: 9000;
  }

  .selected {
    background-color: white;
  }

  @media (min-width: 425px) {
    button {
      font-size: 0.85rem;
    }
  }

  @media (min-width: 768px) {
    button {
      margin: 0 5px;
    }
  }
</style>

<div class="container">
  <button
    on:click={() => (filter = 'headtohead')}
    class="{filter === 'headtohead' ? 'selected' : ''} headtohead">Head-to-Head</button>
  <button
    on:click={() => (filter = 'mutual')}
    class="{filter === 'mutual' ? 'selected' : ''} mutual">Common World Champion
    Opponents</button>
  <button
    on:click={() => (filter = 'all')}
    class="{filter === 'all' ? 'selected' : ''} all">All World Champion
    Opponents</button>
</div>
