<script>
  //https://stackoverflow.com/questions/29882361/show-datalist-labels-but-submit-the-actual-value
  //https://stackoverflow.com/questions/24934669/how-can-i-validate-the-input-from-a-html5-datalist

  import { createEventDispatcher } from "svelte";
  export let boxerList;

  const dispatch = createEventDispatcher();

  let input;
  let list;

  function onInput() {
    let value = input.value;
    let opts = list.childNodes;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].value === value) {
        // console.log(opts[i].value);
        // console.log(boxerList[i]);
        let selectedBoxer = boxerList[i];
        dispatch("addBoxer", {
          boxer: selectedBoxer,
        });
        input.value = "";
        input.blur();
        break;
      }
    }
  }

  // $: if (inputString) {
  //   let option = document.querySelector(
  //     "#boxers option[value='" + CSS.escape(inputString) + "']"
  //   );
  //   if (option) {
  //     let i = option.dataset.value;
  //     let selectedBoxer = boxerList[i];
  //     dispatch("addBoxer", {
  //       boxer: selectedBoxer,
  //     });
  //     inputString = "";
  //     input.blur();
  //   }
  // }
</script>

<style>
  input {
    padding: 8px 30px;
    margin: 0 0 0 5px;
    width: 100%;
    height: 48px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' fill='%23757575' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z'/%3E%3C/svg%3E");
    background-position: 0.5rem;
    background-repeat: no-repeat;
    background-size: 0.9rem;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    outline-color: rgb(255, 134, 106);
    outline-width: 2px;
    color: rgb(43, 43, 43);
  }

  input:focus {
    box-shadow: 0 0 0 2px rgb(255, 134, 106);
    outline: none;
  }

  @media (min-width: 400px) {
    input {
      width: 50%;
    }
  }

  @media (min-width: 700px) {
    input {
      width: initial;
      height: initial;
    }
  }
</style>

<!-- <input
  list="boxers"
  type="text"
  id="boxer"
  placeholder="Search"
  bind:value={inputString}
  bind:this={input} />
<datalist id="boxers">
  {#each boxerList as boxer, i (boxer.id)}
    <option data-value={i} value={boxer.name} />
  {/each}
</datalist> -->

<input
  list="boxers"
  type="text"
  id="boxer"
  placeholder="Search"
  on:input={onInput}
  bind:this={input} />
<datalist id="boxers" bind:this={list}>
  {#each boxerList as boxer (boxer.id)}
    <option value={boxer.name} />
  {/each}
</datalist>
