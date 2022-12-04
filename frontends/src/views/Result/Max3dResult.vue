<template>
  <div class="global_navigation">
    <div class="global_navigation_banner">
        
    </div>    
  </div>

  <div class="doso dosoMax3d">
    <div class="container">
        <div class="row">
            <div class="zone col-md-4 col-sm-12 col-xs-12 doso_input">
                <div class="nav_border">
                    <div class="header">
                        <div class="header-title text-center border-bottom">
                            <h3 class="title">Kết quả xổ số Max3D</h3>
                            <p> Chọn ngày và dò kết quả</p>
                        </div>
                    </div>

                    <div class="content">
                        <div class="doso_input_nd">
                            <div class="doso_img">
                                <img src="../../assets/images/products/max3d.jpg" alt="max3d" style="width:70%">
                            </div>

                            <div style="text-align:center;font-weight:bold;color:maroon; padding-bottom: 20px;">Dò số Max3D</div>

                            <div class="row" style="text-align: center">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-6">
                                    <h4>Ngày quay</h4>
                                    <select v-model="selected">
                                        <option v-for="max3d in max3ds" :value="max3d.id" :key="max3d.id">
                                            {{ max3d.ngayQuay}}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-sm-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="zone col-md-8 col-sm-12 col-xs-12 doso_output">
                <div class="nav_border">
                    <div class="box_ketqua_noidung" v-for="max3d in max3ds" :key="max3d.id">
                        <div v-if="max3d.id == selected">
                            <h5 style="text-align:center;">Kết quả Max 3D Pro kỳ <strong>#{{ max3d.id }}</strong> ngày <strong>{{ max3d.ngayQuay }}</strong></h5>
                        </div>
                    </div>

                    <div class="day_so_ket_qua">
                        <h5 style="margin-left:-10px"> Giải Đặc Biệt</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-6">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiDacBiet1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-6">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiDacBiet2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 style="margin-left:-10px"> Giải Nhất</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhat1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhat2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhat3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhat4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 style="margin-left:-10px"> Giải Nhì</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiNhi8}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h5 style="margin-left:-10px"> Giải Ba</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3d in max3ds" :key="max3d.id">
                                        <div v-if="max3d.id == selected">
                                            <span>
                                                {{ max3d.giaiBa8}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <select v-model="calculate">
                                        <option v-for="max3d in max3ds" :value="max3d.giaiBa1" :key="max3d.id">
                                            {{ max3d.ngayQuay}}
                                        </option>
                                    </select>
                                    <span>{{ calculate/10}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"max3d",
    data(){
        return{
            calculate:0,
            selected: 1,
            max3d:{
                id : '',
                ngayQuay : '',
                giaiDacBiet1 : '',
                giaiDacBiet2 : '',
                giaiNhat1 : '',
                giaiNhat2 : '',
                giaiNhat3 : '',
                giaiNhat4 : '',
                giaiNhi1 : '',
                giaiNhi2 : '',
                giaiNhi3 : '',
                giaiNhi4 : '',
                giaiNhi5 : '',
                giaiNhi6 : '',
                giaiNhi7 : '',
                giaiNhi8 : '',
                giaiBa1 : '',
                giaiBa2 : '',
                giaiBa3 : '',
                giaiBa4 : '',
                giaiBa5 : '',
                giaiBa6 : '',
                giaiBa7 : '',
                giaiBa8 : '',
            },
            max3ds: [],
        }
    },
    async created() {
        const max3dresponse = await fetch('http://127.0.0.1:8000/api/max3d/');
        this.max3ds = await max3dresponse.json();
    },
}
</script>

<style scoped>
.global_navigation .global_navigation_banner{
    background: url('../../assets/images/background/global_navigation_bg.jpg') no-repeat center center;
    background-size: cover;
    min-height: 130px;
}
.doso{
    margin: 35px 0 75px 0;
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

.nav_border{
    border: 1px solid #d9d9d9;
    border-radius: 5px;
}
.doso .header .header-title{
    color: black;
}
.border-bottom{
    border-bottom: 1px solid #d9d9d9;
}
.text-center{
    text-align: center;
}
.doso_input_nd{
    padding:0 20px;
}
.doso_img{
    text-align: center;
    margin: 30px 0 20px 0;
}
.box_ketqua_noidung{
    text-align: left;
}
.border_left_right{
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.day_so_ket_qua{
    padding: 20px;
    position: relative;
}
.day_so_ket_qua_v2{
    padding-bottom: 20px;
}

.box_ketqua_noidung .day_so_ket_qua h5{
    font-size: 16px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.col-xs-3{
    width: 25%;
}
.col-xs-6{
    width: 50%;
}
</style>