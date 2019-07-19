//链接：https://juejin.im/post/5c6772ff518825629c56943c
module.exports = {
    vueTemplate: compoenntName => {
        return `<template>
	<div class="${compoenntName}">
		${compoenntName}组件
	</div>
</template>
<script>
export default {
	name: '${compoenntName}'
};
</script>
<style scoped>
.${compoenntName} {
};
</style>`
    },
    entryTemplate: compoenntName => {
        return `import ${compoenntName} from './main.vue'
export default [{
	path: "/${compoenntName}",
	name: "${compoenntName}",
	component: ${compoenntName}
}]`
    }
}


