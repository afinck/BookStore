<script>
  import { dataStore, fetchDataAndSetStore } from "./store";
  import { onMount } from "svelte";
  import BookList from "./components/BookList.svelte";
  import New from "./components/New.svelte";
  import Search from "./components/Search.svelte";

  let data = [];
  let amount;
  onMount(async () => {
    await fetchDataAndSetStore();
    data = $dataStore;
  });
  $: amount = $dataStore.length;
  let search = false;
  let newBook = false;
</script>

<div class="container mx-auto">
  <div class="font-sans text-base text-center m-2">
    <h2 class="font-bold text-lg">Your Book Library</h2>
    <p>All your books neatly tucked away digitally.</p>
  </div>
  <hr />
  <div class="flex justify-around m-3">
    <button
      class="bg-slate-50 rounded-full p-2 px-4 border-2 border-slate-200"
      on:click={() => location.reload()}>{amount} Books</button
    >
    <button
      class="bg-slate-50 rounded-full p-2 px-4 border-2 border-slate-200"
      on:click={() => (search = !search)}>Search</button
    >
    <button
      class="bg-slate-50 rounded-full p-2 px-4 border-2 border-slate-200"
      on:click={() => (newBook = !newBook)}>New</button
    >
  </div>

  {#if newBook}
    <hr />
    <New />
  {/if}
  {#if search && !newBook}
    <hr />

    <Search />
  {/if}
</div>
<BookList />
