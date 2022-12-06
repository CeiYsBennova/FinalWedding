<template>
    <div class="global_navigation">
        <div class="global_navigation_banner">
            <div class="container">
            <h1 style="color:white; padding-top:30px;">Kết quả Power 6/55</h1>
            </div>
        </div>    
    </div>

    <div class="chitietketqua">
        <div class="container"  v-for="power655 in power655s" :key="power655.id">
            <div class="row" v-if="power655.id == selected">
                <div class="zone col-sm-6" id="divLeftContent">
                    <div class="nav_border">
                        <div class="header">
                            <div class="header-title text-center border-bottom padding_top_30 padding_bottom_20">
                                <div class="chitietketqua_title">
                                    <img src="../../assets/images/products/power655dog.png" alt="Power 6/55" style="width:30%;">
                                    <h4 style="font-size:18px; margin-top:10px; margin-bottom:10px;">Kết quả quay số mở thưởng POWER 6/55</h4>
                                    
                                    <div class="row" >
                                        <div class="col-sm-5">
                                            <h5 style="font-size:18px; margin-top:10px; margin-bottom:10px;">
                                            Kỳ quay số: <b>#{{power655.id}}</b>
                                            </h5>
                                        </div>
                                        <div class="col-sm-3">
                                            <h5 style="font-size:18px; margin-top:10px; margin-bottom:10px;">
                                            Ngày quay:
                                            </h5>
                                        </div>
                                        <div class="col-sm-3">
                                            <select v-model="selected">
                                                <option v-for="power655 in power655s" :value="power655.id" :key="power655.id">
                                                    {{ power655.ngayQuay}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content">
                            <div class="day_so_ket_qua border-bottom">
                                <div class="day_so_ket_qua_v2">
                                    <span class="bong_tron small">{{ power655.so1 }}</span>
                                    <span class="bong_tron small">{{ power655.so2 }}</span>
                                    <span class="bong_tron small">{{ power655.so3 }}</span>
                                    <span class="bong_tron small">{{ power655.so4 }}</span>
                                    <span class="bong_tron small">{{ power655.so5 }}</span>
                                    <span class="bong_tron small">{{ power655.so6 }}</span>
                                    <i style="font-size:35px;font-style: initial;margin:0 2px 0 0;">|</i>
                                    <span class="bong_tron small active">{{ power655.soRandom }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="chitetkq_footer">
                            <div class="box_kqtt_nd_chinh text-center">
                                <p>"Các con số dự thưởng phải trùng với số kết quả nhưng không cần theo đúng thứ tự"</p>
                                <p>Truyền Hình Trực Tiếp Trên Kênh VTC3</p>
                                <h5>Từ 18h00 – 18h30 Thứ 4 - Thứ 6 - Chủ nhật</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="zone col-sm-6" id="divRightContent">
                    <div class="content">
                        <div class="chitietkq_table">
                            <div class="jackpot_bg">
                                <div class="row">
                                    <div class="col-md-5">
                                        <h5>Giá trị Jackpot 1</h5>
                                    </div>

                                    <div class="col-md-7">
                                        <div class="so_tien">
                                            <h3>{{ power655.jackpot1 }}</h3>
                                            <p style="display:inline">VNĐ</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-5">
                                        <h5>Giá trị Jackpot 2</h5>
                                    </div>

                                    <div class="col-md-7">
                                        <div class="so_tien">
                                            <h3>{{ power655.jackpot2 }}</h3>
                                            <p style="display:inline">VNĐ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="kqtable">
                                <table class="table table-hover">
                                    <thead>
                                        <tr style="border: #ddd 1px solid;">
                                            <th>Giải thưởng</th>
                                            <th>Kết quả</th>
                                            <th style="text-align:right;">Số lượng giải</th>
                                            <th style="text-align:right;">Giá trị giải (đồng)</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr style="border: #ddd 1px solid;">
                                            <td>Jackpot 1</td>
                                            <td style="color:red;"><b>O O O O O O</b></td>
                                            <td style="text-align:right;">1</td>
                                            <td style="text-align:right;color:red;"><b>{{ power655.jackpot1}}</b></td>
                                        </tr>

                                        <tr style="border: #ddd 1px solid;">
                                            <td>Jackpot 2</td>
                                            <td style="color:red;"><b>O O O O O | <span style="color:#faa61a;">O</span></b></td>
                                            <td style="text-align:right;">1</td>
                                            <td style="text-align:right;color:red;"><b>{{ power655.jackpot2}}</b></td>
                                        </tr>

                                        <tr style="border: #ddd 1px solid;">
                                            <td>Giải nhất</td>
                                            <td style="color:red;"><b>O O O O O</b></td>
                                            <td style="text-align:right;">10</td>
                                            <td style="text-align:right;color:red;"><b>10.000.000</b></td>
                                        </tr>

                                        <tr style="border: #ddd 1px solid;">
                                            <td>Giải nhì</td>
                                            <td style="color:red;"><b>O O O</b></td>
                                            <td style="text-align:right;">1.000</td>
                                            <td style="text-align:right;color:red;"><b>300.000</b></td>
                                        </tr>

                                        <tr style="border: #ddd 1px solid;">
                                            <td>Giải ba</td>
                                            <td style="color:red;"><b>O O O</b></td>
                                            <td style="text-align:right;">10.000</td>
                                            <td style="text-align:right;color:red;"><b>100.000</b></td>
                                        </tr>
                                    </tbody>
                                </table>
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
    name:"Power655Result",
    data() {
        return {
            selected: 1,
            power655:{
                id : '',
                jackpot1 : '',
                jackpot2 : '',
                ngayQuay : '',
                so1 : '',
                so2 : '',
                so3 : '',
                so4 : '',
                so5 : '',
                so6 : '',
                soRandom: '',
            },
            power655s: [],
        }
    },
    async created() {
        const power655response = await fetch('http://127.0.0.1:8000/api/power655/');
        this.power655s = await power655response.json();
    },
}
</script>

<style>
.global_navigation .global_navigation_banner{
    background: url('../../assets/images/background/global_navigation_bg.jpg') no-repeat center center;
    background-size: cover;
    min-height: 130px;
}
.chitietketqua {
    margin: 40px 0 80px 0;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.row {
    margin-right: -15px;
    margin-left: -15px;
}
.nav_border{
    border: 1px solid #d9d9d9;
    border-radius: 5px;
}
.border-bottom {
    border-bottom: 1px solid #d9d9d9;
}
.padding_bottom_20 {
    padding-bottom: 20px;
}
.padding_top_30 {
    padding-top: 30px;
}
.text-center {
    text-align: center;
}
.chitietketqua_title {
    color: #001452;
}
.day_so_ket_qua {
    margin: 15px 0 10px;
    text-align: center;
    padding: 18px 0;
    position: relative;
}

.day_so_ket_qua_v2 .bong_tron.small {
    font-size: 18px;
    padding: 6px;
    display: inline-block;
    margin-bottom: 5px;
}

.day_so_ket_qua_v2 .bong_tron{
    border-radius: 50%;
    border: red 2px solid;
    margin-right: 5px;
}
.chitietkq_footer {
    padding: 30px 0 30px;
}

.box_kqtt_nd_chinh {
    padding: 20px 0 30px 0;
}
.box_kqtt_nd_chinh p {
    color: #001452;
    font-size: 14px;
    margin: 0 0 10px;
}

.chitetkq_table{
    background-position-y: -30px;
}

.jackpot_bg {
    background: url("../../assets/images/background/jackpot_bg.jpg") no-repeat center;
    padding: 20px 10px 10px;
    background-size: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.jackpot_bg h5 {
    color: white;
    font-size: 19px;
    margin-left: 15px;
}

.jackpot_bg .so_tien {
    text-align: right;
    color: white;
    margin-bottom: 10px;
}
.so_tien h3 {
    display: inline-block;
    margin: 0px 3px 6px 0;
    font-size: 30px;
    color: white;
}

.table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
}
.th {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}
.day_so_ket_qua_v2 .bong_tron.active {
    color: #faa61a;
    border-color: #faa61a;
}
</style>