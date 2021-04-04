<template>
  <div class="container text-center w-auto p-3">
    <div class="row">
      <div class="col top-space"></div>
    </div>
    <div class="row">
      <div class="col">
        <img class="logo" src="/image/hetu-logo-large.png" />
      </div>
    </div>
    <div class="row">
      <div class="col pt-5 fs-2">Hetu Script Language</div>
    </div>
    <div class="row">
      <div class="col pt-2">
        A lightweight script language written in Dart for embedding in Flutter
        apps.
      </div>
    </div>
    <div class="row">
      <div class="col pt-5 text-end">
        <a
          class="btn doc-btn"
          href="https://github.com/hetu-script/hetu-script/blob/master/README.md"
          >Documents</a
        >
      </div>
      <div class="col pt-5 text-start">
        <a
          class="btn github-btn"
          href="https://github.com/hetu-script/hetu-script"
          >Github</a
        >
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import FooterBar from "./footerBar.vue";

export default {
  name: "App",
  components: {
    FooterBar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.top-space {
  height: 120px;
}

.logo {
  top: 100px;
  width: 150px;
  height: 150px;
}

.doc-btn {
  background-color: #e2e3eb;
  color: gray;
  transition: 0.3s;
}

.doc-btn:hover {
  background-color: #ecedf3;
  color: gray;
}

.doc-btn:active:hover {
  background-color: #ced0dd;
  color: gray;
}

.github-btn {
  background-color: #3e8e41;
  color: white;
  transition: 0.3s;
}

.github-btn:hover {
  background-color: #61b464;
  color: white;
}

.github-btn:active:hover {
  background-color: #458147;
  color: white;
}
</style>