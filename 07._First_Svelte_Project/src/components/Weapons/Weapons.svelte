<script>
    let { weapon, damage } = $props();

    function resetDamage() {
        damage = 0;
    }

</script>

<!--
    Why component Pascal case? 
    1. Easy to diifferentiate what is component vs plain html
    2. Historical reason: Components used to be Classes

-->

<p>{weapon}</p>
<p>{damage}</p>
<button onclick={() => damage++}>Increase Damage</button>
<button onclick={() => resetDamage()}>Reset Damage</button>