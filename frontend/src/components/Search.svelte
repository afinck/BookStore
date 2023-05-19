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
    $: semaphore = list;
</script>

{#if list}
    <List {result} />
{:else}
    <h2>Search for:</h2>
    <div class="frame">
        <form on:submit={handleSubmit}>
            <div class="form-group">
                <div class="form-col-4">
                    <label class="label" for="search" />
                    <select
                        class="box"
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
                </div>
                <div class="form-col-6">
                    <input
                        id="input"
                        name="input"
                        on:change={handleChange}
                        bind:value={$form.input}
                    />
                </div>
            </div>
            <div class="justify">
                <button type="submit" class="myButton">Search</button>
            </div>
        </form>
    </div>
{/if}

<style>
    .frame {
        position: relative;
        margin-bottom: 20px;
    }

    .justify {
        position: absolute;
        left: 400px;
        top: 0px;
    }

    .form-group {
        display: flex;
        flex-flow: row wrap;
        row-gap: 5px;
        width: 25rem;
    }

    [class*="form-col"] {
        flex: 0 1 100%;
        padding: 0 8px;
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
        margin-top: 2px;
        width: 140%;
        height: 29px;
        border-radius: 5px;
    }

    label,
    select {
        display: block;
        width: 100%;
        max-width: 100%;
        padding-top: 3px;
        font-size: large;
    }
    .box {
        box-shadow: inset 0px 1px 0px 0px #7bef93;
        background: linear-gradient(to bottom, #00c728 5%, #00b925 100%);
        background-color: #00c728;
        border-radius: 6px;
        border: 1px solid #2ad74c;
        display: inline-block;
        cursor: pointer;
        color: #ffffff;
        padding: 6px 24px;
        font-family: Arial;
        font-size: 15px;
        font-weight: bold;
        text-shadow: 0px 1px 0px #2eb249;
        height: 29px;
    }
</style>
