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

					    <ul class="box-account">
						    <li class="login">
							    <a href="#" title="">Đăng nhập</a>
						    </li>
						    <li class="sign-in">
							    <a href="#" title="">Đăng kí</a>
						    </li>
					    </ul><!-- box-account -->
					    <div class="clearfix"></div><!-- clearfix -->
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
						<div class="flat-show-search">
							<div class="show-search">
                                <i class="fa fa-search"></i>                                             
                            </div>
                            <div class="top-search">                        
                                <form action="#" id="searchform-all" method="get">
                                    <div>
                                        <input type="text" id="s" class="sss" placeholder="Tìm kiếm...">
                                        <input type="submit" value="" id="searchsubmit">
                                    </div>
                                </form>
                            </div> <!-- top-search -->
                        </div>	<!-- flat-show-search -->
						<div class="nav-wrap">
							<div class="btn-menu">
                                <span></span>
                            </div><!-- /mobile menu button -->
							<nav id="mainnav" class="mainnav">
								<ul class="menu">
									<li class="active">
                                        <router-link to="/" title="">TRANG CHỦ</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/about" title="">GIỚI THIỆU</router-link>
                                    </li>
                                    <li>
										<router-link to="/results" title="">KẾT QUẢ</router-link>
									</li>
                                    <li>
										<router-link to="/products" title="">SẢN PHẨM</router-link>
									</li>
                                    <li>
										<router-link to="/news" title="">TIN TỨC</router-link>
									</li>
                                    <li>
                                        <router-link to="/contact" title="">LIÊN HỆ</router-link>
                                    </li>
                                    <li>
										<router-link to="/faqs" title="">FAQ</router-link>
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