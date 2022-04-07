<template>
  <section class="container mx-auto px-4">
    <div class="flex flex-col items-center">
      <Logo />
      <h1 class="text-center text-6xl font-normal leading-normal mt-0 mb-2">
        Participant details:
      </h1>

      <h3 class="py-8">
        More data from {{ participant.first_name }}
        {{ participant.last_name }} coming soon...
      </h3>

      <nuxt-link
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
        to="/participants"
      >
        Participants list
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  asyncData ({ params, error, $axios }) {
    return $axios
      .$get('/api/participants/' + params.id)
      .then((res) => {
        if (res.message) {
          console.log(res.message)
        }
        if (res.data === undefined) {
          throw 'Data for this participant is empty'
        }
        return { participant: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: e })
      })
  },
  head () {
    return {
      title: `Participant: ${this.participant.first_name}`
    }
  }
}
</script>
