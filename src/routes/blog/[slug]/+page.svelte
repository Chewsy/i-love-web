<script>
	let { data } = $props();

	let Post = $derived(data.Post);
</script>

<main class="post">
	<Post />
</main>