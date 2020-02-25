<template>
  <ol class="list">
    <list-item v-bind:prop-list="list"></list-item>
  </ol>
</template>

<script>
import listItem from '../components/ListItem.vue';
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  components:{listItem},
  created() {
    this.$store.dispatch('FETCH_LIST', 'jobs');
  }
}
</script>

<style>

</style>