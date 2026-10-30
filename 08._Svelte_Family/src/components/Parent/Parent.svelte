<script>
  import Child from "../Child/Child.svelte";

    const { name, children } = $props();

    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    let cookieJar = 10;
    const cookieJarArray = $state(["🍪","🍪","🍪","🍪","🍪"]);

    function handleEatCookiev1(name = "") {
        if(cookieJar > 0){
        console.log(`${name} ate a cookie`);
        cookieJar -= 1;
        console.log(`${cookieJar} cookies left`);
        } else {
            console.log("No more cookies");
        }
    }

    function handleEatCookie() {
        cookieJarArray.pop();
    }

    function replenishCookies () {
        cookieJarArray.push("🍪");
    }

</script>

<h1>Hi i am {name}</h1>
<p>{cookieJarArray}</p>
<button onclick={replenishCookies}>Replenish Cookies</button>

{#each children as child (child.id)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}