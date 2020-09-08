<template>
  <div
    id="app"
    class="min-h-screen min-h-screen-ios-fix w-full grid-place-center p-7.5"
  >
    <div
      class="flex flex-col py-7.5 px-5 md:px-7.5 max-w-md rounded-lg w-full bg-white shadow-2xl"
    >
      <div class="max-w-2xl mx-auto w-full">
        <transition name="fade" mode="out-in">
          <router-view :key="this.$route.fullPath" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
