<template>
  <ol class="list">
    <li v-for="item in propList" v-bind:key="item.id">
      <b>{{ item.time_ago}}</b>
      <template v-if="$route.name === 'News'">
            <span> by {{ item.user }}</span><br/>
            <a v-bind:href="item.url">{{ item.title }}<i>({{item.comments_count}})</i></a>
      </template>
      <template v-else-if="$route.name === 'Ask'">
            <span> by {{ item.user }}</span><br/>
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
    props:['propList'],
}
</script>

<style>

</style>