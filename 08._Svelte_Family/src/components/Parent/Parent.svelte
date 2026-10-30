<script>
    import Child from "../Child/Child.svelte";

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    const { name, children } = $props();

    function wipeFridge() {
        fridgeMessages.set([{ name, message: "Write your message below" }]);
    }

    function handleShowLove(name = "") {
        console.log(`${name}, loves me.`);
    }

    const cookieJar = $state(["🍪","🍪","🍪","🍪","🍪"]);

    function handleEatCookie() {
        cookieJar.pop();
    }

    function replenishCookies () {
        cookieJar.push("🍪");
    }



</script>

<h1>Hi i am {name}</h1>
 
<button onclick={wipeFridge}>Wipe fridge</button>

<p>{cookieJar}</p>
<button onclick={replenishCookies}>Replenish Cookies</button>

{#each children as child (child.id)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} bind:cookieCount={cookieJar.length}/>
{/each}