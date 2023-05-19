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

<form on:submit={handleSubmit}>
    <div class="form-group">
        <div class="form-col-4">
            <label for="title">Title</label>
        </div>
        <div class="form-col-6">
            <input
                id="title"
                name="title"
                on:change={handleChange}
                bind:value={book.title}
            />
        </div>
        <div class="form-col-4">
            <label for="author">Author</label>
        </div>
        <div class="form-col-6">
            <input
                id="author"
                name="author"
                on:change={handleChange}
                bind:value={book.author}
            />
        </div>
        <div class="form-col-4">
            <label for="language">Language</label>
        </div>
        <div class="form-col-6">
            <input
                id="language"
                name="language"
                on:change={handleChange}
                bind:value={book.language}
            />
        </div>
        <div class="form-col-4">
            <label for="pages">Pages</label>
        </div>
        <div class="form-col-6">
            <input
                id="pages"
                name="pages"
                type="number"
                on:change={handleChange}
                bind:value={book.pages}
            />
        </div>
        <div class="form-col-4">
            <label for="pages">Genre</label>
        </div>
        <div class="form-col-6">
            <input
                id="genre"
                name="genre"
                on:change={handleChange}
                bind:value={book.genre}
            />
        </div>
        <div class="form-col-4">
            <label for="pages">Publisher</label>
        </div>
        <div class="form-col-6">
            <input
                id="publisher"
                name="publisher"
                on:change={handleChange}
                bind:value={book.publisher}
            />
        </div>
        <div class="form-col-4">
            <label for="isbn">ISBN</label>
        </div>
        <div class="form-col-6">
            <input
                id="ISBN"
                name="ISBN"
                on:change={handleChange}
                bind:value={book.ISBN}
            />
        </div>
    </div>
    <button class="myButton" type="submit">Submit</button>
</form>

<style>
    .form-group {
        display: flex;
        flex-flow: row wrap;
        margin: 1rem 0rem 1rem 0rem;
        row-gap: 5px;
        width: 25rem;
    }

    [class*="form-col"] {
        flex: 0 1 100%;
        padding: 0 5px;
    }

    @media (min-width: 576px) {
        .form-col-4 {
            flex: 0 0 30.33333%;
            max-width: 30.33333%;
            text-align: right;
        }

        .form-col-6 {
            flex: 0 0 44.44444%;
            max-width: 44.44444%;
        }
    }

    input {
        display: block;
        width: 100%;
        height: 25px;
        border-radius: 5px;
        font-size: medium;
    }

    label,
    select {
        display: block;
        width: 100%;
        max-width: 100%;
        padding-top: 3px;
    }
</style>
