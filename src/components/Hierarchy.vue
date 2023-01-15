<template>
  <div id="hierarchy">
    <hierarchy-item
      v-for="(item, index) in content"
      :key="index"
      :item="item"
    />

    <span class="download-pdf-wrapper" v-if="config.settings.downloadAsPDF">
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

export default {
    data: () => ({
        content: content,
        config: config
    }),

    components: {
        HierarchyItem
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