<template>
  <div>
      <div class="user_profile">
          <span>by</span>
          <strong>alhirzel</strong>
          <b>- a day ago</b>
      </div>
      <h2>Ask HN: Good ways to capture institutional knowledge?</h2>
      <div>Successful companies institutionalize the knowledge of their employees; this leads to better continuity and faster on-boarding. Things like huge monorepos of useful code, internal tools, process manuals, etc. are example products of this.</div>
      <ul class="comments">
          <li><div>Store readme markdown files in the sourcerepo along with the code itself. Make sure during review that changes to code are reflected in the markdown.</div></li>
      </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.comments {margin-top:30px;font-size:16px;color:rgb(131, 96, 8)}
.comments ul {margin:10px 0}
.comments li {
    position: relative;
    padding-left:40px;
    margin-top:40px; 
    padding-top:40px; 
    border-top:1px solid rgb(100, 65, 25)
    }
.comments li::before {
    content:'';
    background-image:url('../assets/arrow-right-solid.svg');
    background-size: 100% 100%;
    width:24px;
    height:24px;
    position:absolute;
    left:0;
    top:40px;
}
.user_profile > span {margin-right:5px}
.user_profile > strong {color:#2455c3; margin-right:10px;}
.user_profile > b {font-size: 14px; color:#999}
.user_profile .created {font-size:18px; color:red; margin-right:20px;}
.user_profile .karma {font-size:18px; color:red; margin-right:20px;}
</style>