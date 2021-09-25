<template>
  <nav>
    <ul>
      <li>
        <router-link to="users">users</router-link>
      </li>
      <li>
        <router-link to="users">comments</router-link>
      </li>
      <li>
        <router-link to="users">photos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AppSidebar"
})
</script>

<style scoped>

</style>
