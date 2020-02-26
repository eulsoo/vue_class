<template>
  <ol class="list">
    <li v-for="item in list" v-bind:key="item.id">
      <b>{{ item.time_ago}}</b>
      <template v-if="$route.name === 'news'">
            <span> by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span><br/>
            <a v-bind:href="item.url">{{ item.title }}<i>({{item.comments_count}})</i></a>
      </template>
      <template v-else-if="$route.name === 'ask'">
            <span> by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span><br/>
            <a v-bind:href="item.url">{{ item.title }}<i>({{item.comments_count}})</i></a>
      </template>
      <template v-else>
            <span> by {{ item.user }}</span><br/>
            <a v-bind:href="item.url">{{ item.title }}</a>
      </template>
    </li>
  </ol>
</template>

<script>
export default {
    computed: {
      list() {
        return this.$store.state.list;
      }
    },
    created() {
      this.$store.dispatch('FETCH_LIST', this.$route.name);
    }
}
</script>

<style>

</style>