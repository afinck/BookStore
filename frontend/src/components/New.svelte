<script>
    import { createForm } from "svelte-forms-lib";
    import { fade, scale } from "svelte/transition";

    const { form, handleChange, handleSubmit } = createForm({
        initialValues: {},
        onSubmit: (values) => {
            const body = JSON.stringify(values);
            console.log(body);
            changeBook(body);
        },
    });
    async function changeBook(body) {
        let headers = {
            "Content-type": "application/json",
        };
        const method = "POST";
        const response = await fetch(`http://localhost:8000/api/books/`, {
            method,
            body: body,
            headers,
        });
        const data = await response.json();
        console.log(data);
    }
</script>

<div class="container w-64 mx-auto">
    <form on:submit={handleSubmit}>
        <label class="text-lg" for="title">Title:</label>
        <input type="text" id="title" name="title" on:change={handleChange} />
        <label class="text-lg" for="author">Author:</label>
        <input type="text" id="author" name="author" on:change={handleChange} />
        <label class="text-lg" for="language">Language:</label>
        <input
            type="text"
            id="language"
            name="language"
            on:change={handleChange}
        />
        <label class="text-lg" for="pages">Pages:</label>
        <input id="pages" name="pages" type="number" on:change={handleChange} />
        <label class="text-lg" for="pages">Genre:</label>
        <input type="text" id="genre" name="genre" on:change={handleChange} />
        <label class="text-lg" for="pages">Publisher:</label>
        <input
            type="text"
            id="publisher"
            name="publisher"
            on:change={handleChange}
        />
        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" name="isbn" on:change={handleChange} />
        <div class="flex justify-center">
            <button
                class="border rounded-full px-6 py-2 my-4 bg-slate-100 text-lg"
                type="submit">Submit</button
            >
        </div>
    </form>
</div>

<style>
</style>
