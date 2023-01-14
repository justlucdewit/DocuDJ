<template>
  <Navigator/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->

  <main>
    <section style="background: red">
      <Hierarchy />
    </section>

    <section style="background: green">
      <RenderDoc />
    </section>

    <section style="background: blue">
      <InThisDoc />
    </section>
  </main>
</template> 

<script>
import Navigator from './components/Navigator.vue';
import Hierarchy from './components/Hierarchy.vue';
import InThisDoc from './components/InThisDoc.vue';
import RenderDoc from './components/RenderDoc.vue';

export default {
  components: {
    Hierarchy,
    Navigator,
    InThisDoc,
    RenderDoc
  },

  mounted() {
    const that = this;
    setTimeout(() => {
      if (!that.$route.params.docName) {
        console.log(content[0].url)
        that.$router.push('/docs/' + content[0].url)
      }
    }, 500)
  }
}
</script>

<style lang="scss">
body {
  background: #171717;
  padding: 0;
  margin: 0;
  font-family: Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif;
}

main {
  display: grid;
  grid-template-columns: 300px auto 350px;
  margin: 10px 30px 10px 10px;

  section {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: transparent !important; // Remove for debug
  }
}

a {
  color: #75b6e7;
}

a:visited {
  color: #ac7ee1;
}
</style>
