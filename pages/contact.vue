<template>
  <div
    class="h-80vh flex flex-col items-center justify-center text-center md:mx-10"
  >
    <h1 class="font-semibold text-6xl md:text-7xl">{{ message }}</h1>
    <label class="text-2xl my-5">E-mail:</label>
    <span
      ref="mail"
      class="cursor-pointer text-2xl font-semibold p-5 bg-gray-200 dark:bg-gray-800 rounded-lg"
      :class="{ 'bg-pink-500 dark:bg-yellow-500': isCopied }"
      @click="copy"
      >jol_ou@hotmail.com</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCopied: false,
    }
  },
  computed: {
    message() {
      if (this.isCopied) {
        return 'Copied to clipboard!'
      } else {
        return 'Say Hello!'
      }
    },
  },
  methods: {
    copy() {
      const text = this.$refs.mail.textContent
      navigator.clipboard.writeText(text).then(
        () => {
          this.isCopied = true
        },
        (err) => {
          console.log(err)
        }
      )
    },
  },
}
</script>

<style></style>
