<script>
  import Planets from "./components/Planets/Planets.svelte";
  import Weapons from "./components/Weapons/Weapons.svelte";

  const version = "First";

</script>

<h1>My {version} Svelter App</h1>

<h3 id="status">Under construction</h3>

<Weapons weapon=Scimitar damage={4}>
</Weapons>
<Weapons weapon=knife damage={2}>

</Weapons>

<Planets planet=Mars></Planets>

<style>
  h1 {
    color: rebeccapurple;
  }

  #status {
    color: aqua;
  }
</style>