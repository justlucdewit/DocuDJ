<template>
  <div id="hierarchy">
    <hierarchy-item
      v-for="(item, index) in content"
      :key="index"
      :item="item"
    />

    <span class="download-pdf-wrapper" v-if="config.settings.downloadAsPDF" @click="downloadAsPDF()">
      <hr />
      <span class="download-pdf">
        <span class="material-symbols-outlined">
          picture_as_pdf
        </span>
        Download as PDF
      </span>
      <hr />
    </span>

  </div>
</template>

<script>
import HierarchyItem from './HierarchyItem.vue'
import jsPDF from 'jspdf'
import marked from 'marked'
import axios from 'axios'

export default {
    data: () => ({
        content: content,
        config: config
    }),

    components: {
        HierarchyItem
    },

    methods: {
      async downloadAsPDF() {
        const doc = new jsPDF();
        const docName = this.config.downloadDocName ?? 'download.pdf';
        var html = "";

        console.log(this.content)

        for (const page of this.content) {
          const content = (await axios.get('/docs/' + page.file)).data;
          const htmlContent = this.render(content, page);
          html += htmlContent;
        }

        console.log(html)

        doc.html(html, {
          callback: function(doc) {
              // Save the PDF
              doc.save(docName);
          },
          margin: [10, 10, 10, 10],
          autoPaging: 'text',
          x: 0,
          y: 0,
          width: 190, //target width in the PDF document
          windowWidth: 675 //window width in CSS pixels
        });
      },

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

<style scoped lang="scss">


.download-pdf-wrapper {
  margin-top: 40px;
  display: block;

  .download-pdf {
    color: #e6e6e6;
    display: flex;
    padding-left: 20px;

    .material-symbols-outlined {
      margin-right: 10px;
    }
  }

  &:hover {
    cursor: pointer;
    background: #404040;

    .download-pdf {
      color: white;
    }
  }
}
</style>