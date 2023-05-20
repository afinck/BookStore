<script>
    import { createForm } from "svelte-forms-lib";
    import BookList from "./BookList.svelte";

    const { form, handleChange, handleSubmit } = createForm({
        initialValues: {},
        onSubmit: (values) => {
            const body = JSON.stringify(values);
            //   console.log(body);
            changeBook(body);
        },
    });
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    async function changeBook(body) {
        let headers = {
            "Content-type": "application/json",
        };
        const method = "PUT";
        const response = await fetch(BASE_URL + book._id, {
            method,
            body: body,
            headers,
        });
        const data = await response.json();

        location.reload();
    }

    export let book;
</script>

<div class="container flex justify-center mx-2">
    <form on:submit={handleSubmit}>
        <label class="font-bold py-1" for="title">Title:</label>
        <input
            class="block"
            type="text"
            id="title"
            name="title"
            on:change={handleChange}
            bind:value={book.title}
        />

        <label class="font-bold py-1" for="author">Author:</label>

        <input
            class="block"
            type="text"
            id="author"
            name="author"
            on:change={handleChange}
            bind:value={book.author}
        />
        <label class="font-bold py-1" for="language">Language:</label>

        <input
            class="block"
            type="text"
            id="language"
            name="language"
            on:change={handleChange}
            bind:value={book.language}
        />

        <label class="font-bold py-1" for="pages">Pages:</label>

        <input
            class="block"
            id="pages"
            name="pages"
            type="number"
            on:change={handleChange}
            bind:value={book.pages}
        />

        <label class="font-bold py-1" for="pages">Genre:</label>

        <input
            class="block"
            type="text"
            id="genre"
            name="genre"
            on:change={handleChange}
            bind:value={book.genre}
        />

        <label class="font-bold py-1" for="pages">Publisher:</label>

        <input
            class="block"
            type="text"
            id="publisher"
            name="publisher"
            on:change={handleChange}
            bind:value={book.publisher}
        />
        <label class="font-bold py-1" for="isbn">ISBN:</label>

        <input
            class="block"
            type="text"
            id="ISBN"
            name="ISBN"
            on:change={handleChange}
            bind:value={book.ISBN}
        />
        <div class="my-2 flex justify-center">
            <button
                class="border rounded-full px-6 py-2 my-2 bg-slate-100 text-lg"
                type="submit">Submit</button
            >
        </div>
    </form>
</div>

<style>
</style>
