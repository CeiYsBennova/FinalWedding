<template>
    <div>
        <div class="themesflat-top">
		    <div class="container">
			    <div class="row">
				    <div div class="col-md-12">
					    <ul class="flat-infomation">
						    <li class="email"><a href="mailto:20520619@gm.uit.edu.vn" title="email">Email: 20520619@gm.uit.edu.vn</a></li>
						    <li class="phone"><a href="+84842055700" title="phone">Phone: +84 842055700</a></li>
					    </ul><!-- flat-infomation -->
					    <div class="clearfix"></div>
				    </div><!-- col-md-12 -->
			    </div><!-- row -->
		    </div><!-- container -->
	    </div><!-- themesflat-top -->

        <header id="header" class="header bg-color">
			<div class="container">
				<div class="row">
					<div class="header-wrap">
						<div id="logo" class="logo">
							<router-link to="/" title="">
								<img src="../assets/images/logo/logo.png"/>
							</router-link>
						</div><!-- logo -->

						<div class="nav-wrap">
							<div class="btn-menu">
                                <span></span>
                            </div><!-- /mobile menu button -->
							<nav id="mainnav" class="mainnav">
								<ul class="menu">
									<li >
                                        <router-link to="/" title="">TRANG CHỦ</router-link>
										<ul class="sub-menu">
											<li>
												<router-link to="/about" title="">GIỚI THIỆU</router-link>
												<router-link to="/faqs"> FAQ</router-link>
												<router-link to="/contact"> LIÊN HỆ</router-link>
											</li>
										</ul>
                                    </li>

                                    <li>
										<router-link to="/results/mega645-result" title="">KẾT QUẢ</router-link>
										<ul class="sub-menu">
											<li>
												<router-link to="/results/mega645-result" title="">MEGA 6/45</router-link>
												<router-link to="/results/power655-result" title="">POWER 6/55</router-link>
											</li>
										</ul>
									</li>
                                    <li>
										<router-link to="/products/mega645" title="">SẢN PHẨM</router-link>
										<ul class="sub-menu">
											<li>
												<router-link to="/products/mega645">MEGA 6/45</router-link>
												<router-link to="/products/power655">POWER 6/55</router-link>
											</li>
										</ul>
									</li>
									<li>
										<router-link to="/places">ĐẠI LÝ</router-link>
									</li>
                                    <li>
										<router-link to="/news" title="">TIN TỨC</router-link>
									</li>
								</ul><!-- menu -->
							</nav><!-- mainnav -->
						</div><!-- nav-wrap -->
					</div><!-- header-wrap -->
				</div><!-- row -->
			</div><!-- container -->
		</header><!-- header -->
    </div>
</template>

<script>
export default {
    name : 'Navbar',
}
</script>

<style>
</style>