<script>
    import "../app.scss";
</script>

<nav class="px-5 lg:px-10 pt-5 lg:pt-10 pb-5 flex gap-5">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
</nav>

<main class="px-5 lg:px-10">
    <slot/>
</main>