<script>
  import Child from "../Child/Child.svelte";

    const { name, children } = $props();

    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    let cookieJar = 10;
    function handleEatCookie(name = "") {
        if(cookieJar > 0){
        console.log(`${name} ate a cookie`);
        cookieJar -= 1;
        console.log(`${cookieJar} cookies left`);
        } else {
            console.log("No more cookies");
        }
    }

    function replenishCookies () {
        cookieJar += 10;
        console.log(`${name} bought 10 cookies`);
    }
    
</script>

<h1>Hi i am {name}</h1>
<button onclick={replenishCookies}>replenish Cookies</button>

{#each children as child (child.id)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie}/>
{/each}