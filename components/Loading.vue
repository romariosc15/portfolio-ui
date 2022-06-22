<template>
    <div class="load">
        <hr/><hr/><hr/><hr/>
    </div>
</template>
<script>
    export default {
        setup() {
            const loading = useLoading();
            return {
                loading,
            }
        },
        mounted () {
            setTimeout(() => {
                this.loading = !this.loading;
            }, 500);
        }
    }
</script>