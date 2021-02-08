<script>
  export let boxer;
  export let showShadow;
</script>

<style>
  .container {
    display: none;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-areas:
        "image info"
        "image dob";
      grid-template-rows: minmax(0, 1fr) 28px;
      grid-template-columns: 1fr 2fr;
      width: 235px;
      height: 140px;
      background-color: white;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
      -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
      -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
      position: relative;
      border-radius: 1rem 0 0 1rem;
    }

    .shadow {
      z-index: 2;
    }

    .no-shadow {
      z-index: auto;
    }

    .info {
      grid-area: info;
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 1.3rem 0.5rem 0.8rem 0.7rem;
      justify-content: space-between;
    }

    .name {
      font-size: 1em;
      font-weight: normal;
      padding: 0;
      margin: 0;
      color: rgb(43, 43, 43);
    }

    .boxrec {
      font-size: 0.7rem;
      font-weight: normal;
      padding: 0;
      margin: 0;
      display: inline-flex;
    }

    .dob {
      grid-area: dob;
      margin: 0 0 0 0.7rem;
      padding: 0.4rem 0;
      font-size: 0.7rem;
      border-top: 1px solid rgb(43, 43, 43);
      color: rgb(43, 43, 43);
    }

    svg {
      height: 1.2em;
      width: 1.2em;
      margin-left: 2px;
    }

    a {
      color: rgb(198, 3, 0);
    }

    img {
      grid-area: image;
      object-fit: cover;
      width: 100%;
      max-height: 100%;
      max-width: 100%;
      margin: 0;
      min-width: 110px;
      min-height: 140px;
      border-radius: 1rem 0 0 1rem;
      font-size: 0.9rem;
    }
  }
</style>

<div class="container {showShadow ? 'shadow' : 'no-shadow'}">
  <img src={boxer.image} alt={boxer.name} width="115" height="140" />
  <div class="info">
    <p class="name">{boxer.name}</p>
    <p class="boxrec">
      <a
        href="https://boxrec.com/en/proboxer/{boxer.id}"
        target="_blank">BoxRec</a>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="rgb(198,3,0)"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </p>
  </div>
  <p class="dob">Born: {boxer.bornString}</p>
</div>
