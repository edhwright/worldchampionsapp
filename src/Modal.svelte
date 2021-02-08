<script>
  export let showModal;
</script>

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #000000cc;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
  }

  .modal {
    border-radius: 1rem;
    background: white;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    margin: 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    max-width: 500px;
    max-height: 400px;
  }

  .content {
    padding: 20px;
    flex-grow: 1;
    overflow: auto;
    min-height: 0;
  }

  .title {
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    margin: 10px 0 10px 0;
  }

  hr {
    margin: 0;
    border: 1px solid rgb(178, 178, 178);
  }

  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  td {
    font-size: 0.9rem;
  }

  table {
    margin: 0 0 10px 0;
  }

  div {
    font-size: 0.9rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    width: 26px;
    height: 26px;
    float: right;
  }

  button:focus {
    box-shadow: 0 0 0 2px rgb(255, 134, 106);
  }

  button:active {
    background-color: white;
  }

  .won {
    background-color: #a8d0a2bd;
  }

  .draw {
    background-color: #a2a9d0bd;
  }

  .lost {
    background-color: #db9090bd;
  }

  .no-contest {
    background-color: #c1c2c8bd;
  }

  .scheduled {
    background-color: #fde175bd;
  }

  @media (min-width: 768px) {
    .modal {
      top: 10%;
      bottom: 10%;
    }
  }
</style>

{#if showModal}
  <div class="backdrop" on:click|self>
    <div class="modal">
      <div class="content">
        <button class="close" on:click>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 22 22">
            <path
              d="M22,19.17,13.82,11,22,2.81,19.17,0,11,8.18,2.81,0,0,2.81,8.19,11,0,19.19,2.81,22,11,13.81,19.19,22Z" />
          </svg>
        </button>
        <p class="title">Info</p>
        <p>
          A comparison of boxing's WBA (including NBA, Regular, and Super), WBC,
          IBF, WBO, and Ring Magazine world champions.
        </p>

        <hr />

        <p class="title">Key</p>
        <table>
          <tr>
            <td>
              <div class="circle won" />
            </td>
            <td>Won</td>
          </tr>
          <tr>
            <td>
              <div class="circle draw" />
            </td>
            <td>Drawn</td>
          </tr>
          <tr>
            <td>
              <div class="circle lost" />
            </td>
            <td>Lost</td>
          </tr>
          <tr>
            <td>
              <div class="circle no-contest" />
            </td>
            <td>No Contest</td>
          </tr>
          <tr>
            <td>
              <div class="circle scheduled" />
            </td>
            <td>Scheduled</td>
          </tr>
        </table>

        <hr />

        <p class="title">Contact</p>
        <p>Mistakes? Bugs? Feature requests? Feel free to email me!</p>
        <p>worldchampionsapp@gmail.com</p>
      </div>
    </div>
  </div>
{/if}
