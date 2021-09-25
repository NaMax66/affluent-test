<template>
  <div class="layout-default">
    <navigation-sidebar />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavigationSidebar from "@/components/NavigationSidebar";

export default defineComponent({
  name: "LayoutDefault",
  components: { NavigationSidebar }
});
</script>

<style scoped>
.layout-default {
  display: flex;
}

.main-content {
  margin: 1rem;
}
</style>
