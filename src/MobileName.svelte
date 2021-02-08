<script>
  import CloseButton from "./CloseButton.svelte";
  export let name;
</script>

<style>
  .mobile-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 10px 0;
  }

  @media (min-width: 768px) {
    .mobile-profile {
      display: none;
    }
  }
</style>

<div class="mobile-profile">
  <div>{name}</div>
  <CloseButton on:close />
</div>
