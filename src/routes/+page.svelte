<script lang="ts">
  import { goto } from '$app/navigation';

  async function onClickHandler() {
    let result = await goto("/notes");
    return result
  }
</script>

<style>
  h1 {
    font-weight: 900;
    font-size: 180px;
    letter-spacing: 0.025em;
  }

  h2 {
    font-size: 36px;
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  button {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.025em;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.03em;
    font-weight: 200;
  }
</style>
<div class="grid grid-rows-[1fr_3fr_1fr]">
  <div/>
  <div class="flex flex-col items-center justify-between gap-8">
    <h1 class="text-gunmetal font-lato">NOTED.</h1>
    <h2 class="text-paynes-gray font-lato">The note editor with Markdown. Built on Axum and Svelte.</h2>
    <button class="w-1/4 text-baby-powder bg-paynes-gray px-4 py-2 rounded-md hover:bg-slate font-lato" on:click={onClickHandler}>Try it out</button>
    <p class="text-baby-powder font-lato">Check out the back-end repo <a class="underline" href="https://github.com/amrllkmn/noted">here</a>.</p>
  </div>
  <div/>
</div>
