<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item">
				<a href="/" class="nav__link">
					ImageStack
				</a>
			</li>
		</ul>

		<NavButtons />
	</nav>
</template>

<script>
import NavButtons from './NavButtons.vue'

export default {
	name: 'NavBar',
	components: {
		NavButtons,
	},
}
</script>
