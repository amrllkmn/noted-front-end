<script lang="ts">
  import { goto } from '$app/navigation';

  async function onClickHandler() {
    let result = await goto("/notes");
    return result
  }
</script>
<h1>Noted</h1>
<div>
  <p>The note editor with markdown support.</p>
  <p>Check out the back-end <a href="https://github.com/amrllkmn/noted"> here </a></p>
  <button on:click={onClickHandler}>Try it out</button>
</div>
