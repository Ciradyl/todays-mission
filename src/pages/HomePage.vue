<template>
  <div>
    <div>
      <h1>Title Here</h1>
      <button @click="playAsGuest">Play as Guest</button>
    </div>
    <div>
      <button>Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAsGuest() {
      this.$router.push("/mission");
    },
  },
};
</script>
