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
      <div class="row pt-4 justify-content-center">
        <div class="col-2 text-nowrap text-end">
          <a class="btn doc-btn" href="/docs/en-US/">Get Started</a>
        </div>
        <div class="col-2 text-nowrap">
          <a class="btn playground-btn" href="/codepad/">Playground</a>
        </div>
        <div class="col-2 text-nowrap text-start">
          <a
            class="btn github-btn"
            href="https://github.com/hetu-script/hetu-script"
            >Github</a
          >
        </div>
      </div>
      <div class="row pt-4">
        <div class="col">
          <a class="mx-2" title="Pub" href="https://pub.dev/packages/hetu_script">
            <img src="https://img.shields.io/pub/v/hetu_script" />
          </a>
          <a
            title="VSCode Extension"
            href="https://marketplace.visualstudio.com/items?itemName=hetu-script.hetuscript"
          >
            <img
              src="https://vsmarketplacebadge.apphb.com/version/hetu-script.hetuscript.svg"
            />
          </a>
          <a class="mx-2" title="Discord" href="https://discord.gg/sTF73qcS">
            <img src="https://img.shields.io/discord/829269197727989760" />
          </a>
        </div>
      </div>
      
    </div>
  </div>
  <Footer />
</template>

<style>

html {
  height: 100%;
}

.title {
  color: green
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
</style>