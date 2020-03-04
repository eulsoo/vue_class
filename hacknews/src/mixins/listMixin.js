export default {
    created() {
        localStorage.setItem('nav', this.$route.name);
    }
}