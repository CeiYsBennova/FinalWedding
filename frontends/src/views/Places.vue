<template>
  <div class="global_navigation">
    <div class="global_navigation_banner">
        <div class="container">
            <h2>Danh sách điểm bán hàng</h2>
        </div>
    </div>

    <div class="daily">
        <div class="container">
            <div class="row">

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Places",
}
</script>

<style scoped>
.global_navigation .global_navigation_banner{
    background: url('../assets/images/background/global_navigation_bg.jpg') no-repeat center center;
    background-size: cover;
    min-height: 130px;
}
.container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.row{
    margin-right: -15px;
    margin-left: -15px;
}
</style>
