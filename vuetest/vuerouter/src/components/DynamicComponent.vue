<template>
    <div>
        <h1>{{$route.params.id}}</h1>
        <p>동적 라우팅을 하고 있습니다</p>
    </div>
</template>



<script>
export default {
    name : 'DynamicComponent'
}
</script>