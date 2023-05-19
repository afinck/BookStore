<script>
    import Card from "./Card.svelte";

    export let result;
</script>

<main>
    <Card>
        {#each result as book (book._id)}
            <div class="card">
                <div class="title">{book.title}</div>
                <div>by {book.author}</div>
                <div>Written in: {book.language}</div>
                <div>Genre: {book.genre}</div>
                <div>Pages: {book.pages}</div>
                <div>Published by: {book.publisher}</div>
                <div>ISBN: {book.isbn}</div>
            </div>
        {/each}
    </Card>
</main>

<style>
    .title {
        font-size: x-large;
        font-style: oblique;
        font-weight: bolder;
        padding: 3px;
    }

    .card {
        padding: 10px;
    }
</style>
