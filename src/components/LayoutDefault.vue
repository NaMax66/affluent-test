<template>
  <div>
    <app-sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppSidebar from "@/components/AppSidebar";

export default defineComponent({
  name: "LayoutDefault",
  components: { AppSidebar }
});
</script>

<style scoped>

</style>
