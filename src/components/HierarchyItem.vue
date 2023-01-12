<template>
    <router-link class="hierarchy-item" :class="{ active: isActive }" :to="'/docs/' + item.url">
        {{ item.title }}
    </router-link>
</template>

<script>
export default {
    props: ["item"],

    computed: {
        isActive() {
            return this.$route.path === '/docs/' + this.item.url;
        }
    }
}
</script>

<style scoped lang="scss">
.hierarchy-item {
    padding: 0.5rem 0;
    margin-left: 1rem;
    color: #e6e6e6;
    display: block;
    padding-left: 10px;
    text-decoration: none;

    &:hover {
        color: #fff;
        text-decoration: underline;
        cursor: pointer;
    }

    &.active {
        background: #404040;
    }
}
</style>