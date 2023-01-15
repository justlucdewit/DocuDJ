<template>
  <div class="in-this-doc" v-if="config.settings.articleSections">
    <div class="header">
        <span class="material-symbols-outlined">menu</span>
        In this article
    </div>

    <div class="links">
        <a v-for="header in filteredHeaders" :key="header.name" :href="'#' + header.name.replace(/ /g, '-').toLowerCase()">
            {{ header.name }}
        </a>
    </div>

    <div class="show-less" @click="toggleShowMore()" v-if="config.settings.maxInThisArticleCount < headers.length">
        Show {{ showMore ? 'less' : 'more' }}
        <span class="arrow" :class="{reverse: showMore}"></span>
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        config: config,
        showMore: false,
        itemCountLimit: 5,
        headers: []
    }),

    mounted() {
        const documentationRoot = document.getElementById('documentation-render');
        const that = this;
        setInterval(() => {
            // Get all h1, h2, h3, h4, h5, h6 elements
            const headers = documentationRoot.querySelectorAll('h1, h2, h3, h4, h5, h6');

            // Fill the headers array
            that.headers = [];
            headers.forEach(header => {
                that.headers.push({
                    'name': header.innerText,
                    'indent': parseInt(header.tagName.replace('H', ''))
                });
            });

        }, 1000);
    },

    computed: {
        filteredHeaders() {
            // Return a limited amount of headers except if showMore is true
            return this.headers.filter((header, idx) => {
                return idx < this.config.settings.maxInThisArticleCount || this.showMore;
            });
        }
    },

    methods: {
        toggleShowMore() {
            this.showMore = !this.showMore;
        }
    }
}
</script>

<style scoped lang="scss">
.in-this-doc {
    padding: 0px;
    color: #e6e6e6;
    border: 1px solid #404040;
    border-radius: 10px;

    .header {
        background: #404040;
        display: flex;
        font-weight: bold;
        padding: 10px;
        border-radius: 10px 10px 0 0;

        .material-symbols-outlined {
            margin-right: 10px;
        }
    }

    .links {
        padding: 10px;

        a {
            text-decoration: none;
            display: block;
            color: #75b6e7;
            margin-bottom: 10px;
            font-size: 18px;
        }
    }

    .show-less {
        font-weight: bold;
        font-size: 20px;
        display: flex;
        justify-content: center;
        border-top: 1px solid #404040;
        padding: 10px 0;
        
        &:hover {
            background: #ffffff11;
            cursor: pointer;
        }

        .arrow {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-left: 2px solid #e6e6e6;
            border-bottom: 2px solid #e6e6e6;
            transform: rotate(-45deg);
            margin-left: 12px;
            position: relative;
            top: 6px;

            &.reverse {
                transform: rotate(135deg);
                top: 10px;
            }
        }
    }
}
</style>