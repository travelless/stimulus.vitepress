<template>
  <div class="home">
    <div class="title">
      stimulus.js
      <Typed class="typedBox" :options="options">
        <div class="typing"></div>
      </Typed>
    </div>
  </div>
</template>

<script setup>
import { Typed } from "@duskmoon/vue3-typed-js";

const options = {
  strings: ["简化繁杂的js代码", "最轻量的web框架"],
  loop: true,
  typeSpeed: 25,
  backDelay: 1500,
};
</script>

<style scoped lang="less">
.home {
  height: calc(~"100vh - 64px");
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  .title {
    margin: auto;
    font-size: 2.5em;
    .typedBox {
      justify-content: center;
      margin: 1em 0.2em;
      display: flex;
      font-size: 0.5em;
    }
  }
}
</style>
