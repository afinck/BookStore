<script>
    import Card from "./Card.svelte";
    import Display from "./Display.svelte";

    export let result;
</script>

<main>
    <Card>
        {#each result as book (book._id)}
            <Display {book} />
        {/each}
    </Card>
</main>
