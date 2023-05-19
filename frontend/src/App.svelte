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

<div class="container">
  <div class="center">
    <h2>Your Book Library</h2>
    <p>All your books neatly tucked away digitally.</p>
  </div>
  <hr />
  <div class="new">
    <button class="myButton" on:click={() => location.reload()}
      >{amount} Books</button
    >
    <button class="myButton" on:click={() => (search = !search)}>Search</button>
    <button class="myButton" on:click={() => (newBook = !newBook)}>New</button>
  </div>

  <div class="list">
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
</div>

<style>
  .center {
    text-align: center;
  }
  .new {
    margin: 20px 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
