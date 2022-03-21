<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="text-center text-6xl font-normal leading-normal mt-0 mb-4">
        {{ error.statusCode }}
      </h1>
      <h2 class="text-5xl font-normal leading-normal mt-0 mb-2">
        {{ error.message }}
      </h2>
      <nuxt-link
        v-if="error.statusCode === 404"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
        to="/"
      >
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
