<template>
    <div class="breadcrumbs">
        <a href="/a">Documentation</a> /
        <a href="/b">About Pea</a>
    </div>
    <div id="documentation-render" v-html="docContent">
    </div>
</template>

<script>
import axios from 'axios';
import marked from 'marked';

export default {
    data: () => ({
        config: config,
        content: content,
        docContent: ''
    }),

    watch: {
        async $route (to, from){
            const contentItem = this.content.find(item => '/docs/' + item.url === this.$route.path);
            
            const content = (await axios.get('/docs/' + contentItem.file)).data;

            this.docContent = this.render(content, contentItem);
        }
    },

    methods: {
        render(content, contentItem) {
            let html = marked.parse(content);

            // parse html string to actual html
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            const wordCount = doc.body.textContent.split(' ').length;

            // Get the first h1
            let firstH1 = doc.querySelector('h1');

            const injectedContent = `
                <span class='article-info'>
                    Article •
                    ${contentItem.date ? contentItem.date + ' • ' : ''}
                    ± ${Math.ceil(wordCount / 180)} minutes to read
                </span>
            `;

            // Inject the content after the first h1
            firstH1.insertAdjacentHTML('afterend', injectedContent);

            // Convert back to string and return
            return doc.body.innerHTML;
        }
    }
}
</script>

<style lang="scss">
.breadcrumbs {
    color: #e6e6e6;
    font-size: 18px;
    margin: 10px 30px;
}

#documentation-render {
    color: #e6e6e6;
    padding: 30px;

    h1 {
        font-size: 40px;
        margin-top: 0;
    }

    .article-info {
        position: relative;
        top: -30px;
        color: #e6e6e6;
    }

    code {
        background: #404040;
        padding: 0px 5px;
        font-size: 16px;
    }

    pre code {
        display: block;
        background: #404040;
        padding: 10px;
        font-size: 16px;
    }

    hr {
        width: 50%;
        margin: 60px auto;
        border-style: dashed;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #404040;
        margin: 30px 0;
        column-gap: 50px;
    }

    table tr {
        border: 1px solid #404040;
    }

    table td {
        padding: 5px 20px;
    }


}

</style>
