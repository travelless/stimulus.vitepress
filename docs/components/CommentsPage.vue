<template>
  <div class="user">
    <div id="gitalk-container"></div>
  </div>
</template>

<script setup>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted } from 'vue'

const VITE_CLIENT_ID = '7105e1fe6417d3ee63c5'

const config = {
  clientID: VITE_CLIENT_ID,
  clientSecret: import.meta.env.VITE_CLIENT_SECRET,
  repo: 'stimulus', // The repository of store comments,
  owner: 'travelless',
  admin: ['travelless'],
  id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
  proxy: 'https://proxy.cors.sh/https://github.com/login/oauth/access_token',
}

const gitalk = new Gitalk(config)

onMounted(() => {
  gitalk.render('gitalk-container')
})
</script>

<style scoped lang="less">
.user {
  height: calc(~'100vh - 64px');
  display: flex;
  justify-content: center;
  width: 100vw;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
}
</style>
