<script>
  import { calcFilter } from "./utils";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Spinner from "./Spinner.svelte";

  const params = new URLSearchParams(window.location.search);

  let sort = params.get("s");
  let paramsBoxers = params.getAll("f");

  let promise = getBoxerList();
  let boxerList = [];
  let selectedBoxers = [];

  let filter;
  if (sort) {
    if (sort === "hth") {
      filter = "headtohead";
    } else if (sort === "co") {
      filter = "mutual";
    } else {
      filter = "all";
    }
  } else {
    filter = "all";
  }

  async function getBoxerList() {
    const response = await fetch(
      // `http://localhost:5001/headtohead-2867b/us-central1/app/api/info`
      "https://us-central1-headtohead-2867b.cloudfunctions.net/app/api/info"
    );

    const data = await response.json();

    if (data) {
      boxerList = data.boxersList.sort((a, b) => (a.name > b.name ? 1 : -1));
      //add boxers from url params to selected boxers array
      if (paramsBoxers) {
        for (let i = 0; i < paramsBoxers.length; i++) {
          let pName;
          let pId = parseInt(paramsBoxers[i]);
          for (let i = 0; i < boxerList.length; i++) {
            if (boxerList[i].id === pId) {
              pName = boxerList[i].name;
            }
          }
          let pBoxer = { id: pId, name: pName };
          selectedBoxers = [...selectedBoxers, pBoxer];
        }
      }
    } else {
      throw new Error(data);
    }
  }

  function handleAddSelectedBoxer(event) {
    let boxer = event.detail.boxer;
    const checkDuplicate = (b) => b.id === boxer.id;
    if (selectedBoxers.some(checkDuplicate) === false) {
      selectedBoxers = [...selectedBoxers, boxer];
      params.append("f", boxer.id.toString());
      history.replaceState({}, "", "?" + params.toString());
    }
  }

  function handleAddRandomBoxer(event) {
    let boxer = event.detail.boxer;
    const checkDuplicate = (b) => b.id === boxer.id;
    if (selectedBoxers.some(checkDuplicate) === false) {
      selectedBoxers = [...selectedBoxers, boxer];
      params.append("f", boxer.id.toString());
      history.replaceState({}, "", "?" + params.toString());
    }
  }

  function handleRemoveBoxer(id) {
    selectedBoxers = selectedBoxers.filter((boxer) => boxer.id !== id);
    selectedBoxers = calcFilter(selectedBoxers, filter);
    let getBoxersParams = params.getAll("f");
    getBoxersParams = getBoxersParams.filter(
      (boxerStringID) => boxerStringID != id
    );
    params.delete("f");
    for (let i = 0; i < getBoxersParams.length; i++) {
      params.append("f", getBoxersParams[i]);
    }
    history.replaceState({}, "", "?" + params.toString());
  }

  function handleFilterChange(event) {
    filter = event.detail.filter;
    selectedBoxers = calcFilter(selectedBoxers, filter);
    if (filter === "headtohead") {
      params.set("s", "hth");
      history.replaceState({}, "", "?" + params.toString());
    } else if (filter === "mutual") {
      params.set("s", "co");
      history.replaceState({}, "", "?" + params.toString());
    } else {
      params.set("s", "all");
      history.replaceState({}, "", "?" + params.toString());
    }
  }
</script>

<style>
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .footer {
    display: block;
    height: 1px;
  }

  @media (min-width: 768px) {
    /* .footer {
      display: none;
    } */
  }
</style>

{#await promise}
  <div class="centered">
    <Spinner />
  </div>
{:then}
  <div class="content">
    <Header
      {boxerList}
      on:addBoxer={handleAddSelectedBoxer}
      on:addRandomBoxer={handleAddRandomBoxer} />
    <Main
      on:filterChange={handleFilterChange}
      on:addOpponent={handleAddSelectedBoxer}
      {selectedBoxers}
      {handleRemoveBoxer}
      {filter} />

    <!-- issue with mobile safari collapsing Main bottom margin. Margin works with this footer -->
    <footer class="footer" />
  </div>
{:catch error}
  <p class="centered">Failed to connect to database. 😒</p>
{/await}
