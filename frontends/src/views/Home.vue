<template>
  <div class="Ketqua">
    <div class="container">
        <div class="box_ketqua box_max3d">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/max3d.jpg" alt="Max 3d">
                </div>

                <div class="zone col-md-7 border_left_right">
                    <div class="box_ketqua_noidung" v-for="max3dresult in max3dresults" :key="max3dresult.id">
                        <div v-if="max3dresult.id == max3dresults.length">
                            <h5>Kết quả Max 3D Pro kỳ <strong>#{{ max3dresult.id }}</strong> ngày <strong>{{ max3dresult.ngayQuay }}</strong></h5>
                        </div>
                    </div>

                    <div class="day_so_ket_qua">
                        <h5 style="margin-left:-10px"> Giải Đặc Biệt</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiDacBiet1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiDacBiet2}}
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
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhat1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhat2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhat3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhat4}}
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
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiNhi8}}
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
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dresult in max3dresults" :key="max3dresult.id">
                                        <div v-if="max3dresult.id == max3dresults.length">
                                            <span>
                                                {{ max3dresult.giaiBa8}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>Các con số dự thưởng phải trùng với số kết quả theo đúng thứ tự</p>
                    <p>Truyền Hình Trực Tiếp Trên Kênh VTC3</p>
                    <p>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</p>
                </div>

                <div class="zone col-md-3">

                </div>
            </div>
        </div>

        <div class="box_ketqua box_max3dpro">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/logomax3dpro.png" alt="Max 3d Pro">
                </div>

                <div class="zone col-md-7 border_left_right">
                    <div class="box_ketqua_noidung" v-for="max3dpro in max3dpros" :key="max3dpro.id">
                        <div v-if="max3dpro.id == max3dpros.length">
                            <h5>Kết quả Max 3D Pro kỳ <strong>#{{ max3dpro.id }}</strong> ngày <strong>{{ max3dpro.ngayQuay }}</strong></h5>
                        </div>
                    </div>

                    <div class="day_so_ket_qua">
                        <h5 style="margin-left:-10px"> Giải Đặc Biệt</h5>
                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiDacBiet1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiDacBiet2}}
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
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhat1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhat2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhat3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhat4}}
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
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiNhi8}}
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
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa1}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa2}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa3}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa4}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row" style="padding-top:2px;padding-bottom:2px">
                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa5}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa6}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa7}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-3">
                                <div class="day_so_ket_qua_v2">
                                    <div v-for="max3dpro in max3dpros" :key="max3dpro.id">
                                        <div v-if="max3dpro.id == max3dpros.length">
                                            <span>
                                                {{ max3dpro.giaiBa8}}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p>Các con số dự thưởng phải trùng với số kết quả theo đúng thứ tự</p>
                    <p>Truyền Hình Trực Tiếp Trên Kênh VTC3</p>
                    <p>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</p>
                </div>

                <div class="zone col-md-3">

                </div>
            </div>
        </div>

        <div class="box_ketqua box_mega645">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/Power655.png" alt="Power 6/55">
                </div>

                <div class="zone col-md-7 border_left_right">
                    <div class="box_ketqua_noidung" v-for="power655 in power655s" :key="power655.id">
                        <div class="tong_tien" v-if="power655.id == power655s.length">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p>Jackpot 1 Power 6/55 ước tính</p>
                                    <div class="so_tien">
                                        <h3>{{ power655.jackpot1 }}</h3>
                                        <p>VNĐ</p>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <p>Jackpot 2 Power 6/55 ước tính</p>
                                    <div class="so_tien">
                                        <h3>{{ power655.jackpot2 }}</h3>
                                        <p>VNĐ</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                 <h5>Kết quả Power 6/55 kỳ <strong>#{{ power655.id }}</strong> ngày <strong>{{ power655.ngayQuay }}</strong></h5>
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
                    <p>Truyền Hình Trực Tiếp Trên Kênh VTC3</p>
                    <p>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</p>
                </div>

                <div class="zone col-md-3">

                </div>
            </div>
        </div>

        <div class="box_ketqua box_power655">
            <div class="row">
                <div class="zone col-md-2">
                    <img src="../assets/images/products/mega645.png" alt="Mega 6/45">
                </div>

                <div class="zone col-md-7 border_left_right">
                    <div class="box_ketqua_noidung" v-for="mega645 in mega645s" :key="mega645.id">
                        <div class="tong_tien" v-if="mega645.id == mega645s.length">
                            <div class="row">
                                <div class="col-sm-6">
                                    <p>Jackpot 1 Power 6/55 ước tính</p>
                                    <div class="so_tien">
                                        <h3>{{ mega645.jackpot }}</h3>
                                        <p>VNĐ</p>
                                    </div>
                                </div>

                            </div>

                            <div>
                                 <h5>Kết quả Power 6/55 kỳ <strong>#{{ mega645.id }}</strong> ngày <strong>{{ mega645.ngayQuay }}</strong></h5>
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
                    <p>Truyền Hình Trực Tiếp Trên Kênh VTC3</p>
                    <p>Từ 18h00 – 18h30 Thứ 3 - Thứ 5 - Thứ 7</p>
                </div>

                <div class="zone col-md-3">

                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            max3dresult:{
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
            max3dresults: [],

            max3dpro: {
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
            max3dpros: [],

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
        const max3dresponse = await fetch('http://127.0.0.1:8000/api/max3d/');
        this.max3dresults = await max3dresponse.json();

        const max3dproresponse = await fetch('http://127.0.0.1:8000/api/max3dpro/');
        this.max3dpros = await max3dproresponse.json();

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
.row{
    margin-right: -15px;
    margin-left: -15px;
}
.col-xs-3{
    width: 25%;
}

/* line before */
/* .box_max3d::before {
    background: url('../assets/images/products/linemax3d.jpg') no-repeat;
}
.box_max3d::before{
    content: "";
    position: absolute; 
    top: auto;
    width: 75%;
    height: 20px;
    padding-bottom: 10px;
} */

.so_tien{
    color: red;
    margin-bottom: 20px;
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
.day_so_ket_qua_v2 .bong_tron-sperator{
    font-size: 25px;
    margin-right: 3px;
}
.day_so_ket_qua_v2 .bong_tron.active {
    color: #faa61a;
    border-color: #faa61a;
}
</style>