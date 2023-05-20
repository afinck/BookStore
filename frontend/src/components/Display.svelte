<script>
    export let book;
</script>

<div class="p-1">
    <div class="py-2 text-2xl font-bold">{book.title}</div>
    <div>by <span class="font-bold">{book.author}</span></div>
    <div>Written in: <span class="font-bold">{book.language}</span></div>
    <div>Genre: <span class="font-bold">{book.genre}</span></div>
    <div>Pages: <span class="font-bold">{book.pages}</span></div>
    <div>Published by: <span class="font-bold"> {book.publisher}</span></div>
    <div>ISBN: <span class="font-bold">{book.ISBN}</span></div>
</div>
