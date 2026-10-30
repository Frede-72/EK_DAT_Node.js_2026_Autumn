<script>
    const { name, familySheep, isGirl, onShowLove, onEatCookie } = $props();

</script>

<div 
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h2>I am {name}</h2>

    <button onclick={() => onShowLove(name)}>Show Love</button>
    <button onclick={() => onEatCookie(name)}>Eat cookie</button>
</div>

<style>
    .black-sheep h2 {
        color: blueviolet;
    }

    .grey-sheep h2 {
        color: aquamarine;
    }

    .not-a-sheep h2 {
        color: chartreuse;
    }

    .is-boy {
        border: 0.3rem dashed hotpink;
    }

    .is-girl {
        border: 0.3rem solid blue;
    }
</style>