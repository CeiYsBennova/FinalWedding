<template>
  <div class="global_navigation">
    <div class="global_navigation_banner">
        <div class="container">
            <h1 style="color:white; padding-top:30px;">Danh sách điểm bán hàng</h1>
        </div>
    </div>  
  </div>

  <div class="daily">
        <div class="container1">
            <div class="row">
                <div class="col-sm-4">
                </div>
                <div class="col-sm-4">
                    <input v-model="search" placeholder="Từ khóa" style="height:46px;width:300px;"/>
                </div>
                <div class="col-sm-4">
                    <select v-model="selected">
                        <option disabled value="">Chọn thành phố</option>
                        <option>Hà Nội</option>
                        <option>Hồ Chí Minh</option>
                        <option>Nha Trang</option>
                        <option>Đà Nẵng</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="container">
                <div class="row" style="padding-top:40px;">
                    <h2><i>Danh sách đại lý trên địa bàn</i></h2>
                    <div class="content">
                        <table class="table table-hover">
                            <thead>
                                <tr style="border: #ddd 1px solid;">
                                    <th>STT</th>
                                    <th style="text-align:left;">TÊN ĐẠI LÝ</th>
                                    <th style="text-align:left;">ĐỊA CHỈ</th>
                                    <th style="text-align:center;">THÀNH PHỐ</th>
                                                
                                </tr>
                            </thead>

                            <tbody v-for="place in places" :key="place.id" style="font-size:16px;">
                            <tr style="border: #ddd 0.5px solid;" v-if="place.city == selected || place.city == search">
                                <td style="height:50px;">{{place.id}}</td>
                                <td>{{place.name}}</td>
                                <td>{{place.address}}</td>
                                <td style="text-align:center;">{{ place.city}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>


export default {
    name:"Places",
    data() {
        return {
            selected: "",
            search: "",
            places:[
                {
                    id:1,
                    name:"CHI NHÁNH HÀ NỘI 1",
                    address:"Số 1, Ngõ 1, Nguyễn Trãi, Thanh Xuân, Hà Nội",
                    city:"Hà Nội", 
                },
                {
                    id : 2,
                    name:"CHI NHÁNH HỒ CHÍ MINH",
                    address:"Liên khu 6, Phường Tân Thuận Đông, Quận 7, Hồ Chí Minh",
                    city:"Hồ Chí Minh",
                },
                {
                    id: 3,
                    name:"CHI NHÁNH ĐÀ NẴNG",
                    address:"Đường 2/9, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
                    city:"Đà Nẵng",
                },
                {
                    id: 4,
                    name:"CHI NHÁNH NHA TRANG 1",
                    address:"118A Ba Làng, Tổ 3, Ba Làng, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id : 5,
                    name:"CHI NHÁNH NHA TRANG 2",
                    address:"Số 11 Lý Thánh Tôn, P. Vạn Thạnh, TP. Nha Trang, tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id : 6,
                    name: "CHI NHÁNH HÀ NỘI 2",
                    address:"Tầng 15, tòa nhà CornerStone, 16 Phan Chu Trinh, P. Phan Chu Trinh, Q. Hoàn Kiếm, TP. Hà Nội",
                    city:"Hà Nội",
                },
                {
                    id : 7,
                    name: "CHI NHÁNH HÀ NỘI 3",
                    address:"Toà nhà MobiFone, lô VP1, phường Yên Hoà, quận Cầu Giấy, Hà Nội, Việt Nam",
                    city:"Hà Nội",
                },
                {
                    id : 8,
                    name: "CHI NHÁNH HÀ NỘI 4",
                    address:"Lô D26 Khu đô thị mới Cầu Giấy, Phường Yên Hoà, Quận Cầu Giấy, Hà Nội",
                    city:"Hà Nội",
                },
                {
                    id : 9,
                    name: "CHI NHÁNH HÀ NỘI 5",
                    address:"Số 57, đường Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam",
                    city:"Hà Nội",
                },
                {
                    id : 10,
                    name: "CHI NHÁNH HÀ NỘI 6",
                    address:"STầng 5, Toà nhà D4/D6, ngõ 5 Thọ Tháp - Phường Dịch Vọng - Quận Cầu Giấy - Hà Nội, Việt Nam",
                    city:"Hà Nội",
                },
                {
                    id : 11,
                    name: "CHI NHÁNH HỒ CHÍ MINH 2",
                    address:"833 Lê Hồng Phong, Phường 12, Quận 10, Tp. Hồ Chí Minh",
                    city:"Hồ Chí Minh",
                },
                {
                    id : 12,
                    name: "CHI NHÁNH HỒ CHÍ MINH 3",
                    address:"Tầng 14, Tòa nhà Lim 3, 29A Nguyễn Đình Chiểu, P. Đakao, Q1, TP.HCM, Việt Nam",
                    city:"Hồ Chí Minh",
                },
                {
                    id : 13,
                    name: "CHI NHÁNH HỒ CHÍ MINH 4",
                    address:"Số 8, Đường số 66, Phường Thảo Điền, TP. Thủ Đức, TP.HCM",
                    city:"Hồ Chí Minh",
                },
                {
                    id : 14,
                    name: "CHI NHÁNH HỒ CHÍ MINH 5",
                    address:"Tầng 14, Tòa nhà Lim 3, 29A Nguyễn Đình Chiểu, P. Đakao, Q1, TP.HCM, Việt Nam",
                    city:"Hồ Chí Minh",
                },
                {
                    id : 15,
                    name: "CHI NHÁNH HỒ CHÍ MINH 6",
                    address:"Tầng 14, Tòa nhà Lim 3, 29A Nguyễn Đình Chiểu, P. Đakao, Q1, TP.HCM, Việt Nam",
                    city:"Hồ Chí Minh",
                },
                {
                    id: 16,
                    name:"CHI NHÁNH NHA TRANG 3",
                    address:"118A Ba Làng, Tổ 3, Ba Làng, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id: 17,
                    name:"CHI NHÁNH NHA TRANG 4",
                    address:"118A Ba Làng, Tổ 3, Ba Làng, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id: 18,
                    name:"CHI NHÁNH NHA TRANG 5",
                    address:"118A Ba Làng, Tổ 3, Ba Làng, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id: 19,
                    name:"CHI NHÁNH NHA TRANG 6",
                    address:"118A Ba Làng, Tổ 3, Ba Làng, Phường Vĩnh Hòa, Thành phố Nha Trang, Tỉnh Khánh Hòa",
                    city:"Nha Trang",
                },
                {
                    id: 20,
                    name:"CHI NHÁNH ĐÀ NẴNG",
                    address:"Đường 2/9, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
                    city:"Đà Nẵng",
                },
                {
                    id: 21,
                    name:"CHI NHÁNH ĐÀ NẴNG",
                    address:"Đường 2/9, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
                    city:"Đà Nẵng",
                },
                {
                    id: 22,
                    name:"CHI NHÁNH ĐÀ NẴNG",
                    address:"Đường 2/9, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
                    city:"Đà Nẵng",
                },
                {
                    id: 23,
                    name:"CHI NHÁNH ĐÀ NẴNG",
                    address:"Đường 2/9, Phường Hòa Cường Bắc, Quận Hải Châu, Đà Nẵng",
                    city:"Đà Nẵng",
                },
            ]
        }
    },

}
</script>

<style scoped>
.global_navigation .global_navigation_banner{
    background: url('../assets/images/background/global_navigation_bg.jpg') no-repeat center center;
    background-size: cover;
    min-height: 130px;
}
.global_navigation {
    padding-bottom: 30px;
}
.container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container1{
    display: grid;
    grid-template-columns: 9fr 1fr 2fr;
    grid-template-rows: 50px 50px;
}

.row{
    margin-right: -15px;
    margin-left: -15px;
}
</style>
