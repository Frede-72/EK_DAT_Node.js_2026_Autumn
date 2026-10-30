<script>
    let { name, familySheep, isGirl, onShowLove, onEatCookie, cookieCount = $bindable() } = $props();

    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";

    let fridgeMessageInput = $state("");

    function writeFridgeMessage() {
        // fridgeMessages.set([...$fridgeMessages, { name, message: fridgeMessageInput }]);

        fridgeMessages.update((fridgeMessagesStoreValue) => {
            fridgeMessagesStoreValue.push({ name, message: fridgeMessageInput });
            return fridgeMessagesStoreValue;
        });

        fridgeMessageInput = "";
    }


</script>

<div 
    class={familySheep || "not-a-sheep"}
    class:is-girl={isGirl}
    class:is-boy={!isGirl}
>
    <h2>I am {name}</h2>

    <button onclick={() => onShowLove(name)}>Show Love</button>
    <button onclick={onEatCookie}>Eat cookie</button>

    <input bind:value={fridgeMessageInput} type="text" placeholder="Write a fridge message">
    <button onclick={writeFridgeMessage}>Write Fridge Message</button>
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