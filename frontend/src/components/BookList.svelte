<script>
    import { dataStore } from "../store";
    import BookItem from "./BookItem.svelte";
    import { fade, scale } from "svelte/transition";
</script>

<div>
    {#each $dataStore as book (book._id)}
        <div transition:scale>
            <BookItem {book} />
        </div>
    {/each}
</div>
