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
        <a class="btn doc-btn" href="/docs/en-US/">Get Started</a>
      </div>
      <div class="col pt-5 text-start">
        <a
          class="btn github-btn"
          href="https://github.com/hetu-script/hetu-script"
          >Github</a
        >
      </div>
    </div>
    <div class="row">
      <div class="col pt-2">
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
  background-color: #3e8e41;
  color: white;
  transition: 0.3s;
}

.doc-btn:hover {
  background-color: #61b464;
  color: white;
}

.github-btn {
  background-color: #e2e3eb;
  color: gray;
  transition: 0.3s;
}

.github-btn:hover {
  background-color: #ecedf3;
  color: gray;
}
</style>