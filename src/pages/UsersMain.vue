<template>
  <div>
    <list-default />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListDefault from "@/components/ListDefault.vue"

export default defineComponent({
  name: "UsersMainPage",
  components: { ListDefault }
})
</script>

<style scoped>

</style>
