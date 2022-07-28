<script setup>
import Footer from "./footer.vue";

</script>

<template>
  <div class="spacer">
    <div class="container text-center pt-5">
      <div class="row">
        <div class="col top-space"></div>
      </div>
      <div class="row">
        <div class="col">
          <img class="logo" src="/image/hetu-logo-large.png" />
        </div>
      </div>
      <div class="row">
        <div class="col pt-5 fs-2 title">Hetu Script Language</div>
      </div>
      <div class="row">
        <div class="col pt-2">
          A lightweight script language written in Dart for embedding in Flutter
          apps.
        </div>
      </div>
      <div class="row pt-4 pb justify-content-center">
        <div class="col-2 text-nowrap">
          <a class="btn doc-btn" href="/docs/en-US/">Learn More...</a>
        </div>
      </div>

    </div>

    <!-- <div class="spacer2"></div>
    <div class="container text-center mw-100 pt-5 second-screen">
      <div class="row">
        <div class="col">
          <img class="logo" src="/image/xianxia.png" />
        </div>
      </div>
      <div class="row">
        <div class="col pt-5 fs-2">仙侠小说专有名词随机生成器</div>
      </div>
      <div class="row">
        <div class="col pt-2">
          人名、法号、功法、秘籍、生灵、材料、丹药、法宝、门派、国家、据点、地域
        </div>
      </div>
      <div class="row p-4 justify-content-center">
        <div class="col-2 text-nowrap">
          <a class="btn use-btn" href="/random-names/">立即使用</a>
        </div>
      </div>
      <div class="spacer3"></div>
    </div> -->
  </div>
  <Footer />
</template>

<style>




body, html {
  width: 100%;
  padding: 0;
  margin: 0;
}

.title {
  color: green;
}

.top-space {
  height: 120px;
}

.logo {
  top: 100px;
  width: 150px;
  height: 150px;
}

.doc-btn {
  background-color: #3e8e41;
  color: white;
  transition: 0.3s;
}

.use-btn {
  background-color: #8379e0;
  color: white;
  transition: 0.3s;
}

.doc-btn:hover {
  background-color: #61b464;
}

.playground-btn {
  background-color: #188ec5;
  color: white;
  transition: 0.3s;
}

.playground-btn:hover {
  background-color: #49b5e7;
}

.github-btn {
  background-color: #e2e3eb;
  color: gray;
  transition: 0.3s;
}

.github-btn:hover {
  background-color: #ecedf3;
}

.spacer {
  min-height: 72vh;
}

.spacer2 {
  min-height: 24vh;
}

.spacer3 {
  min-height: 10vh;
}

.second-screen {
  background-color: rgb(210, 212, 226);
  margin: 0 auto;
}
</style>