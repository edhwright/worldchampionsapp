<script>
  export let filter;
  export let boxer;
  export let selectedBoxers;
  export let error = false;
</script>

<style>
  p {
    text-align: center;
    margin: 0 10px;
    font-size: 0.9rem;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 140px;
  }

  @media (min-width: 768px) {
    div {
      margin: 0 50px 0 10px;
    }
  }
</style>

<div>
  {#if error}
    <p><i>Failed to fetch {boxer.name}'s data.</i> 😒</p>
  {:else}
    <p>
      <i>
        {#if filter === 'headtohead'}
          {#if selectedBoxers.length === 1}
            Select another boxer to see their head-to-head record with
            {boxer.name}.
          {:else if selectedBoxers.length === 2}
            There has been no fights between
            {boxer.name}
            and
            {#each selectedBoxers as opp}
              {#if boxer.id !== opp.id}{opp.name}.{/if}
            {/each}
          {:else}
            There has been no fights between
            {boxer.name}
            and the other selected boxers.
          {/if}
        {:else if filter === 'mutual'}
          {#if selectedBoxers.length === 1}
            Select another boxer to see their common opponents record with
            {boxer.name}.
          {:else if selectedBoxers.length === 2}
            There has been no common world champion opponents between
            {boxer.name}
            and
            {#each selectedBoxers as opp}
              {#if boxer.id !== opp.id}{opp.name}.{/if}
            {/each}
          {:else}
            There has been no common world champion opponents between
            {boxer.name}
            and the other selected boxers.
          {/if}
        {:else if filter === 'all'}
          {boxer.name}
          hasn't fought any other world champions.
        {/if}
      </i>
    </p>
  {/if}
</div>
