<template>
  <div class="Ketqua">
    <div class="container">
        <div class="box_ketqua box_power645" style="font-size:16px;">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/power655dog.png" alt="Power 6/55">
                </div>

                <div class="zone col-md-6 border_left_right">
                    <div class="box_ketqua_noidung" v-for="power655 in power655s" :key="power655.id">
                        <div class="tong_tien" v-if="power655.id == power655s.length">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p><b>Jackpot 1 Power 6/55 ước tính</b></p>
                                    <div class="so_tien">
                                        <h3 >{{ power655.jackpot1 }}</h3>
                                        <p style="display:inline">VNĐ</p>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <p><b>Jackpot 2 Power 6/55 ước tính</b></p>
                                    <div class="so_tien">
                                        <h3>{{ power655.jackpot2 }}</h3>
                                        <p style="display:inline">VNĐ</p>
                                    </div>
                                </div>
                            </div>

                            <div style="font-size:18px;">
                                 <p>Kết quả Power 6/55 kỳ <strong>#{{ power655.id }}</strong> ngày <strong>{{ power655.ngayQuay }}</strong></p>
                            </div>

                            <div class="day_so_ket_qua_v2">
                                <span class="bong_tron small">{{ power655.so1 }}</span>
                                <span class="bong_tron small">{{ power655.so2 }}</span>
                                <span class="bong_tron small">{{ power655.so3 }}</span>
                                <span class="bong_tron small">{{ power655.so4 }}</span>
                                <span class="bong_tron small">{{ power655.so5 }}</span>
                                <span class="bong_tron small">{{ power655.so6 }}</span>
                                <span class="bong_tron-sperator">|</span>
                                <span class="bong_tron small active">{{ power655.soRandom }}</span>
                            </div>
                        </div>
                    </div>
                    <p>Các con số dự thưởng phải trùng với số kết quả nhưng không cần theo đúng thứ tự</p>
                    <p><b>Truyền Hình Trực Tiếp Trên Kênh VTC3</b></p>
                    <p><b>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</b></p>
                </div>

                <div class="zone col-md-4" style="text-align:center; padding-top:10px;">
                    <h3><b>Kỳ QSMT tiếp theo diễn ra sau</b></h3>
                    <div style="padding-top:30px">
                        <CountdownTimer/>
                    </div>
                </div>
            </div>
        </div>

        <div class="box_ketqua box_mega655">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/mega645dog.png" alt="Mega 6/45">
                </div>

                <div class="zone col-md-6 border_left_right">
                    <div class="box_ketqua_noidung" v-for="mega645 in mega645s" :key="mega645.id">
                        <div class="tong_tien" v-if="mega645.id == mega645s.length">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p><b>Jackpot 1 Power 6/45 ước tính</b></p>
                                    <div class="so_tien">
                                        <h3>{{ mega645.jackpot }}</h3>
                                        <p style="display:inline">VNĐ</p>
                                    </div>
                                </div>

                            </div>

                            <div style="font-size:18px;">
                                 <p>Kết quả Power 6/55 kỳ <b>#{{ mega645.id }}</b> ngày <b>{{ mega645.ngayQuay }}</b></p>
                            </div>

                            <div class="day_so_ket_qua_v2">
                                <span class="bong_tron small">{{ mega645.so1 }}</span>
                                <span class="bong_tron small">{{ mega645.so2 }}</span>
                                <span class="bong_tron small">{{ mega645.so3 }}</span>
                                <span class="bong_tron small">{{ mega645.so4 }}</span>
                                <span class="bong_tron small">{{ mega645.so5 }}</span>
                                <span class="bong_tron small">{{ mega645.so6 }}</span>
                            </div>
                        </div>
                    </div>
                    <p>Các con số dự thưởng phải trùng với số kết quả nhưng không cần theo đúng thứ tự</p>
                    <p><b>Truyền Hình Trực Tiếp Trên Kênh VTC3</b></p>
                    <p><b>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</b></p>
                </div>

                <div class="zone col-md-4" style="text-align:center; padding-top:10px;">
                    <h3><b>Kỳ QSMT tiếp theo diễn ra sau</b></h3>
                    <div style="padding-top:30px">
                        <CountdownTimer/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from '../components/Countdown.vue'

export default {
    name: 'Home',
    components: {
        CountdownTimer,
    },
    data() {
        return {
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

            mega645:{
                id : '',
                jackpot : '',
                ngayQuay : '',
                so1 : '',
                so2 : '',
                so3 : '',
                so4 : '',
                so5 : '',
                so6 : '',
            },
            mega645s:[],

        }   
    },
    async created() {
        const power655response = await fetch('http://127.0.0.1:8000/api/power655/');
        this.power655s = await power655response.json();

        const mega645response = await fetch('http://127.0.0.1:8000/api/mega645/');
        this.mega645s = await mega645response.json();
    }
}
</script>

<style scoped>
.Ketqua{
    background-color: #f5f5f5;
    padding: 20px;
    margin-top: 20px;
}
.container{
    padding-right: 20px;
    padding-left: 20px;
    margin-right: auto;
    margin-left: auto;
}
.box_ketqua{
    background-color: #fff;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}

.box_ketqua_noidung{
    text-align: left;

}
.border_left_right{
    border-left: 1px solid black;
    border-right: 1px solid black;
    padding-left: 30px;
}

.day_so_ket_qua{
    padding: 20px;
    position: relative;
}
.day_so_ket_qua_v2{
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 50px;
    padding-bottom: 20fr;
}

.box_ketqua_noidung .day_so_ket_qua h5{
    font-size: 16px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.row{
    margin-right: -15px;
    margin-left: -15px;
}
.col-xs-3{
    width: 25%;
}
.so_tien{
    color: rgb(167, 39, 39);
    margin-bottom: 20px;
}
.so_tien h3 {
    display: inline-block;
    margin: 0px 3px 6px 0;
    font-size: 25px;
    color: rgb(167, 39, 39);
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
    margin-right: 10px;
    margin-top: 20px;
}
.day_so_ket_qua_v2 .bong_tron-sperator{
    font-size: 25px;
    margin-right: 3px;
}
.day_so_ket_qua_v2 .bong_tron.active {
    color: #faa61a;
    border-color: #faa61a;
}
</style>