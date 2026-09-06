<script>
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/styleguide.css";
	import "$lib/Footer.svelte";
    import Footer from "$lib/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Footer />