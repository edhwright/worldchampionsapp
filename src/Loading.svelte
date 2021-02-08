<!-- https://gist.github.com/gastonambrogi/7b4897a848ff81bdd26136f2a9f67e7d -->
<style>
  div {
    display: flex;
    height: 120px;
    margin: 0;
    border-radius: 0;
  }

  .shimmer {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(rgb(200, 200, 200)),
      to(rgb(200, 200, 200)),
      color-stop(0.5, rgba(255, 255, 255, 0.8))
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(rgb(200, 200, 200)),
      to(rgb(200, 200, 200)),
      color-stop(0.5, rgba(255, 255, 255, 0.8))
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(rgb(200, 200, 200)),
      to(rgb(200, 200, 200)),
      color-stop(0.5, rgba(255, 255, 255, 0.8))
    );
    -webkit-background-size: 40px 100%;
    -moz-background-size: 40px 100%;
    background-size: 40px 100%;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    -webkit-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-color: rgb(200, 200, 200);
  }

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }

    100% {
      background-position: top right;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }

    100% {
      background-position: top right;
    }
  }

  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }

    100% {
      background-position: top right;
    }
  }

  @-ms-keyframes shimmer {
    0% {
      background-position: top left;
    }

    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }

    100% {
      background-position: top right;
    }
  }

  @media (min-width: 768px) {
    div {
      height: 140px;
      margin: 0 50px 24px 50px;
      border-radius: 1rem;
    }
  }

  @media (min-width: 2000px) {
    div {
      margin: 0 auto 24px auto;
      max-width: 1900px;
    }
  }
</style>

<div class="shimmer" />
