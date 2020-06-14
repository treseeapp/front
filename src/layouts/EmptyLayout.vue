<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="home" color="accent" to="/">
        <q-tooltip content-class="bg-purple"
                   transition-show="flip-left"
                   transition-hide="flip-right"
                   anchor="center left" self="center right"
                   content-style="font-size: 12px" :offset="[10, 10]">
          Volver a la pagina principal
        </q-tooltip>
      </q-btn>

    </q-page-sticky>
  </q-layout>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      this.$q.dark.set(false);
    }
  }
</script>
