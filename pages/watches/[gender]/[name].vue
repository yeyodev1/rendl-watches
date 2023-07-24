<script setup lang="ts">
	import { useRoute } from "vue-router";
	import { onMounted } from "vue";
	import { ref } from "vue";

	import ProductFocused from "@/components/watches/ProductFocused.vue";
	import AllProducts from "@/components/watches/AllProducts.vue";
	import useWatchStore from "@/store/WatchStore";
	import { Watch } from "@/enum/Watch";

	const watchStore = useWatchStore();
	const imageSelected = ref("");

	async function getProduct() {
		const gender = route.params.gender;
		const name = route.params.name;
		const slug = `${gender}/${name}`;
		await watchStore.getWatchBySlug(slug);
	}

	const route = useRoute();

	onMounted(async () => {
		await watchStore.getWatches(Watch.WOMEN);
		await getProduct();
		if (watchStore.watch && watchStore.watch.content.image.length > 0) {
			imageSelected.value = watchStore.watch.content.image[0].filename;
		}
	});
</script>

<template>
	<div class="card">
		<div class="card-section">
			<ProductFocused
				v-if="watchStore.watch"
				:image="imageSelected"
				:name="watchStore.watch.content.name"
				:price="watchStore.watch.content.price"
				:oldPrice="watchStore.watch.content?.old_price"
				:slug="watchStore.watch.full_slug"
			/>
		</div>
	</div>
	<AllProducts title="Estos relojes te pueden interesar" />
</template>

<style lang="scss" scoped>
	.card {
		width: 100%;
		display: flex;
		gap: 40px;
		justify-content: center;
		padding: 20px;
	}
</style>
