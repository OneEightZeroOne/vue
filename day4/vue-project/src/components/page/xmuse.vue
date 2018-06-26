<template>
	<div>
		<mu-appbar style="width: 100%;" color="primary">
			<mu-button icon slot="left">
				<mu-icon value="menu"></mu-icon>
			</mu-button>
			Title
			<mu-button flat slot="right">LOGIN</mu-button>
		</mu-appbar>
		<mu-container style="position: fixed;bottom: 0;left: 0;max-width: 800px; width:100%; padding: 0;">
			<mu-bottom-nav :value.sync="shift" shift>
				<mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
				<mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-container>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				shift: 'movies'
			}
		}
	}
</script>

<style>

</style>