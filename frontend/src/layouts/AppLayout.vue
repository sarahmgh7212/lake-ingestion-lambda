<template>
  <div id="app-layout w-max m-0 p-0">
    <Header />

    <Sidebar />

    <router-view />
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "AppLayout",
  components: {
    Header,
    Sidebar,
  },
};
</script>
