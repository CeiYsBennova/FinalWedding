<template>
  <div>
    <div id="footer_background">
			<div class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-widgets">
							<div class="col-md-4">
								<div class="widget widget-about">
									<div class="widget-text">
										<div id="logo-ft">
											<router-link to="/">
												<img src="../assets/images/logo/logo.png" alt="">
											</router-link>
										</div>
									</div>
									<div class="widget widget-newletter">
										<h3 class="widget-title">NEWSLETTER</h3>
										<form id="subscribe-form" action="#" method="post" accept-charset="utf-8" data-mailchimp="true">
			                                <div id="subscribe-content">
												<div class="input-email">
													<input type="email" name="email-form" id="subscribe-email" placeholder="Email address" />
												</div>
												<button type="button" id="subscribe-button" class="button-subscribe"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			                                </div>
			                                <div id="subscribe-msg"></div>
										</form>
									</div>
								</div><!-- /.widget-about -->
							</div><!-- /.col-md-4 -->
							<div class="col-md-4">
								<div class="widget widget_nav_menu">
									<h3 class="widget-title">Truy cập nhanh</h3>
									<ul class="menu-footer one-half">
										<li><router-link to="/results" title=""><i class="fa fa-angle-double-right"></i> Kết quả</router-link></li>
										<li><router-link to="/news" title=""><i class="fa fa-angle-double-right"></i> Tin tức</router-link></li>
										<li><router-link to="/contact" title=""><i class="fa fa-angle-double-right"></i> Liên hệ</router-link></li>
										<li><router-link to="/products" title=""><i class="fa fa-angle-double-right"></i> Sản phẩm</router-link></li>
									</ul><!-- /.one-half -->
									<ul class="menu-footer one-half">
										<li><router-link to="/faqs" title=""><i class="fa fa-angle-double-right"></i> FAQ</router-link></li>
										<li><router-link to="/" title=""><i class="fa fa-angle-double-right"></i> Term</router-link></li>
										<li><router-link to="/" title=""><i class="fa fa-angle-double-right"></i> Legal</router-link></li>
										<li><router-link to="/" title=""><i class="fa fa-angle-double-right"></i> Pivacy</router-link></li>
									</ul><!-- /.one-half -->
									<div class="clearfix"></div>
								</div><!-- /.widget_nav_menu -->
							</div><!-- /.col-md-4 -->
							<div class="col-md-4">
								<div class="widget widget_contact">
									<h3 class="widget-title">LIÊN HỆ</h3>
									<ul class="contact-list">
										<li>
											
											Address: <span style="color: black">Linh Trung Thủ Đức TP Hồ Chí Minh</span>
										</li>
										<li>
											Phone: <span style="color: black">+84 842055700</span>
										</li>
										<li>
											Email: <span style="color: black">20520619@gm.uit.edu.vn</span>
										</li>
									</ul>
									<div class="widget widget_themesflat_socials">            
										<ul class="themesflat-shortcode-socials">
									        <li class="facebook">
						                        <a href="https://facebook.com/"  rel="alternate" title="">
						                            <i class="fa fa-facebook"></i>                            
						                        </a>
						                    </li>
						                    <li class="twitter">
						                        <a href="https://twitter.com/" target="_blank" rel="alternate" title="">
						                            <i class="fa fa-twitter"></i>                            
						                        </a>
						                    </li>
						                    <li class="google-plus">
						                        <a href="https://google.com/" target="_blank" rel="alternate" title="t;">
						                            <i class="fa fa-google-plus"></i>                            
						                        </a>
						                    </li>
						                    <li class="instagram">
						                        <a href="https://instagram" target="_blank" rel="alternate" title="">
						                            <i class="fa fa-instagram"></i>                            
						                        </a>
						                    </li>
						                    <li class="linkedin">
						                        <a href="https://linkedin.com" target="_blank" rel="alternate" title="">
						                            <i class="fa fa-linkedin"></i>                            
						                        </a>
						                    </li>
						                </ul><!-- /.social -->       
								    </div>
								</div><!-- /.widget_contact -->
							</div><!-- /.col-md-4 -->
						</div><!-- /.footer-widgets -->
					</div><!-- /.row -->
				</div><!-- /.container -->
			</div><!-- /.footer -->
			<div class="footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<ul class="menu-ft-bottom">
								<li>
									<router-link to="/" title="">Trang chủ</router-link>
								</li>
								<li>
									<router-link to="/about" title="">Giới thiệu</router-link>
								</li>
								<li>
									<router-link to="/results" title="">Kết quả</router-link>
								</li>
								<li>
									<router-link to="/contact" title="">Liên hệ</router-link>
								</li>
								<li>
									<router-link to="/news" title="">Tin tức</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- /.container -->
			</div><!-- /.footer-bottom -->	
		</div><!-- /#footer_background -->
		
		<div class="button-go-top">
			<router-link to="/" title="" class="go-top">
				<i class="fa fa-chevron-up"></i>
			</router-link>
		</div><!-- /.button-go-top -->
  </div>
</template>

<script>
export default {
    name: 'Footer',
	methods: {
		scrollToTop: function() {
			window.scrollTo(0, 0);
		}
	},
}
</script>

<style>

</style>