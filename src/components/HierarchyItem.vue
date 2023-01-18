<template>
    <template v-if="item.children">
        <div class="hierarchy-item no-underline" :style="`padding-left: ${indentation * 30}px`" :class="{ active: isActive }" :to="'/docs/' + item.url" @click="toggleClosed()">
            {{ item.title }}
            <span v-if="item.children" class="hierarchy-opener" :class="{ closed: !closed }"></span>
        </div>

        <hierarchy-item
            v-for="(child, index) in item.children"
            :key="index"
            :item="child"
            :indentation="(indentation ?? 0) + 1"
            v-if="!closed"
        />
    </template>

    <template v-else>
        <router-link class="hierarchy-item" :style="`padding-left: ${indentation * 30}px`" :class="{ active: isActive }" :to="'/docs/' + item.url">
            {{ item.title }}
        </router-link>
    </template>
</template>

<script>
export default {
    name: "hierarchy-child",
    props: [ "item", "indentation" ],

    data: () => ({
        closed: false
    }),

    computed: {
        isActive() {
            return this.$route.path === '/docs/' + this.item.url;
        },

        indentationHtml() {
            if (this.indentation === undefined) {
                return '';
            }
            
            return '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(this.indentation);
        }
    },

    methods: {
        toggleClosed() {
            this.closed = !this.closed;
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

    &.no-underline:hover {
        text-decoration: none;
    }

    &:hover {
        color: #fff;
        background: #202020;
        text-decoration: underline;
        cursor: pointer;
    }

    &.active {
        background: #404040;
    }
}

.hierarchy-opener {
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #e6e6e6;
    border-left: 2px solid #e6e6e6;
    transform: rotate(135deg);
    margin-left: 10px;
    top: 4px;

    &.closed {
        transform: rotate(-45deg);
        top: -4px;
    }
}
</style>