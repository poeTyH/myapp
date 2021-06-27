<template>
    <div>
        <div>{{$route.params.id}}</div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
    // beforeRouteUpdata(to, from, next) {
    //     console.log(to)
    //     console.log(from)
    //     next();
    // }
}
</script>
