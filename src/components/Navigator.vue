<template>
    <div id="navigator">
        <span class="flex-center">
            <img :src="config.logo" v-if="config.settings.logo">
            {{ config.title }}
            <!-- <div class="v-divider"></div> -->
        </span>
        
        <span class="flex-center" v-if="config.settings.searchbar">
            <span class="material-symbols-outlined">
                search
            </span>
            <input type="text" id="search-bar" placeholder="Search...">
        </span>
    </div>
</template>

<script>
export default {
    data: () => ({
        config: config
    }),
}
</script>

<style scoped lang="scss">
#navigator {
    background: #171717;
    color: #e6e6e6;
    padding: 10px 50px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #404040;
    line-height: 2;

    .v-divider {
        border-left: 2px solid #e6e6e6;
        margin: 0 20px;
        width: 1px;
        height: 45px;
        display: inline-block;
    }

    img {
        width: 50px;
        height: 50px;
        margin-right: 30px;
    }

    .material-symbols-outlined {
        margin-right: -30px;
        z-index: 1;
        opacity: 0.6;
    }

    #search-bar {
        background: #404040;
        border: none;
        color: #e6e6e6;
        padding: 10px;
        width: 300px;
        font-size: 16px;
        padding-left: 40px;
    }

    // Disable the default outline
    #search-bar:focus {
        outline: none;
    }

    .flex-center {
        display: flex;
        align-items: center;
    }
}
</style>