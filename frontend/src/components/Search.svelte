<script>
    import { fade, scale } from "svelte/transition";

    import { createForm } from "svelte-forms-lib";
    import List from "./List.svelte";

    const { form, handleChange, handleSubmit } = createForm({
        initialValues: {},
        onSubmit: (values) => {
            //const body = JSON.stringify(values);
            const body = Object.values(values);
            const params = JSON.stringify(body);
            search(body);
        },
    });
    let result = [];
    let list;
    async function search(body) {
        const myUrlWithParams = new URL(
            "http://localhost:8000/api/books/search/"
        );
        myUrlWithParams.searchParams.append(body[0], body[1]);
        const url = myUrlWithParams.href;
        let headers = {
            "Content-type": "application/json",
        };
        let method = "GET";
        const res = await fetch(url, {
            method,
            headers,
        });

        if (!res.ok) {
            return alert(
                "The book you're searching for could not be found by the server"
            );
        }
        const data = await res.json();

        //console.log(res.status);
        result = data;

        list = true;
    }
</script>

{#if list}
    <List {result} />
{:else}
    <div class="container flex justify-center mx-2">
        <form on:submit={handleSubmit}>
            <label for="search" />
            <select
                class="bg-slate-100 rounded-full my-4 text-base"
                id="select"
                name="select"
                on:change={handleChange}
                bind:value={$form.select}
            >
                <option value="title">Title:</option>
                <option value="author">Author:</option>
                <option value="language">Language:</option>
                <option value="genre">Genre:</option>
                <option value="publisher">Publisher:</option>
                <option value="isbn">ISBN:</option>
            </select>
            <input
                class="w-64"
                id="input"
                name="input"
                type="text"
                on:change={handleChange}
                bind:value={$form.input}
            />
            <button
                class="border rounded-full px-6 py-2 my-2 bg-slate-100 text-lg"
                type="submit">Search</button
            >
        </form>
    </div>
{/if}

<style>
</style>
