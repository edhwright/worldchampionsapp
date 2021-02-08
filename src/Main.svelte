<script>
  import Boxer from "./Boxer.svelte";
  export let selectedBoxers;
  export let handleRemoveBoxer;
  import FilterSelection from "./FilterSelection.svelte";
  import { calcFilter } from "./utils";
  export let filter;

  //when boxer added, need to fetch everything, then calcFilter
  function handleCalcFilter() {
    //only calculates filter if all boxers have been loaded (from URL params)
    let tally = 0;
    for (let i = 0; i < selectedBoxers.length; i++) {
      if (selectedBoxers[i].boutsFull != null) {
        tally++;
      }
    }
    if (tally === selectedBoxers.length) {
      selectedBoxers = calcFilter(selectedBoxers, filter);
    }
  }
</script>

<style>
  .boxers {
    /* display: block; */
    margin: 0 12px 48px 12px;
    /* flex: 1 1 auto; */
  }
</style>

<FilterSelection on:filterChange {filter} />

<div class="boxers">
  {#each selectedBoxers as boxer (boxer.id)}
    <Boxer
      {boxer}
      {selectedBoxers}
      {handleRemoveBoxer}
      {filter}
      on:boxerAdded={handleCalcFilter}
      on:addOpponent />
  {/each}
</div>
