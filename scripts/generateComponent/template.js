// 链接：https://juejin.im/post/5c6772ff518825629c56943c
module.exports = {
    vueTemplate: compoenntName => {
        return `<template>
	<div id="${compoenntName}">
		${compoenntName}组件
	</div>
</template>
<script>
export default {
	name: '${compoenntName}'
};
</script>
<style  scoped>
#${compoenntName} {
};
</style>`
    },
    entryTemplate: `import Main from './main.vue'
export default Main`
}