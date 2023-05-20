<script>
    import { dataStore } from "../store";
    import Card from "./Card.svelte";
    import Display from "./Display.svelte";
    import Form from "./Form.svelte";
    export let book;

    const URL = import.meta.env.VITE_API_BASE_URL;

    async function onDelete(id) {
        const method = "DELETE";
        const response = await fetch(URL + id, {
            method,
        });
        const data = await response.json();
        console.log(data);

        dataStore.update((currentBooks) => {
            return currentBooks.filter((book) => book._id != id);
        });
    }
    $: amount = $dataStore.length;
    let toggle = false;
    let edit = false;
</script>

<Card>
    <hr class="my-2" />
    <div class="flex justify-between items-center">
        <button
            class="bg-slate-50 rounded-full p-2 px-4 border-2 border-slate-200"
            on:click={() => (toggle = !toggle)}>{book.title}</button
        >
        <div class="">
            <a href="#top" on:click={() => onDelete(book._id)}>
                <i class="gg-remove" />
            </a>
        </div>
    </div>
    {#if toggle}
        {#if !edit}
            <hr class="m-2" />
            <div class="flex justify-between">
                <Display {book} />
                <button
                    class="self-end h-10 bg-slate-50 px-4 border-2 border-slate-200 rounded-full"
                    on:click={() => (edit = !edit)}>Edit</button
                >
            </div>
        {:else}
            <Form {book} />
        {/if}
    {/if}
</Card>

<style>
    .gg-remove {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs, 1));
        width: 22px;
        height: 22px;
        border: 2px solid;
        border-radius: 22px;
        color: #ff6666;
    }

    .gg-remove::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 10px;
        height: 2px;
        background: currentColor;
        border-radius: 5px;
        top: 8px;
        left: 4px;
    }
</style>
