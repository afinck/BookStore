<script>
    import { dataStore } from "../store";
    import Card from "./Card.svelte";
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
    <div class="flex">
        <button class="myButton" on:click={() => (toggle = !toggle)}
            >{book.title}</button
        >
        <div class="delete">
            <a href="#top" on:click={() => onDelete(book._id)}>
                <i class="gg-remove" />
            </a>
        </div>
    </div>
    {#if toggle}
        {#if !edit}
            <div class="flex">
                <div class="card">
                    <div>by <b>{book.author}</b></div>
                    <div>available in: <b>{book.language}</b></div>
                    <div>Genre: <b>{book.genre}</b></div>
                    <div>Pages: <b>{book.pages}</b></div>
                    <div>Published by: <b>{book.publisher}</b></div>
                    <div>ISBN: <b>{book.ISBN}</b></div>
                </div>
                <button class="center myButton" on:click={() => (edit = !edit)}
                    >Edit</button
                >
            </div>
        {:else}
            <Form {book} />
        {/if}
    {/if}
</Card>

<style>
    .delete {
        align-self: center;
        row-gap: 25px;
    }

    .card {
        width: 250px;
        margin-top: 5px;
        padding: 10px;
        text-align: left;
    }

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
