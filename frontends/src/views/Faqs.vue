.<template>
    <div class="flat-faqs">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="accordion">
							<div class="accordion-toggle">
								<div class="toggle-title">
									Jackterry là cái quái quỷ gì?
								</div>
								<div class="toggle-content">
									<p>
										Là một sản phẩm xổ số được phát triển bởi team F1301 /w Vân Anh nhưng lại không có TIMO. Sản phẩm tạo ra với mục đích giáo dục, phi lợi nhuận. 
									</p>
									<div class="clearfix"></div>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Tham gia mua bán Jackterry có phải làm gì không?
								</div>
								<div class="toggle-content">
									<p>
                                        Đơn giản, bạn chỉ cần đăng kí tài khoản và nạp tiền vào tài khoản. Sau đó bạn có thể mua bán Jackterry với giá trị tối thiểu là 5.000đ.
									</p>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Có mấy loại Jackterry?
								</div>
								<div class="toggle-content">
									<p>
										Hiện tại có 3 loại Jackterry: Jackterry - Education, Just - Jackterry, Jackterry - Premium. Mỗi loại Jackterry có giá trị khác nhau.
									</p>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Tôi có thể nhận thưởng Jackterry ở đâu?
								</div>
								<div class="toggle-content">
									<p>
										Hiện tại bạn có thể nhận thưởng Jackterry ở thế giới khác.
									</p>
									<div class="clearfix"></div>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Mua bán Jackterry có hợp pháp không?
								</div>
								<div class="toggle-content">
									<p>
										Được rồi, bạn có thể mua bán Jackterry mà không bị phạt. Hãy đóng VAT 10% cho chúng tôi nhé. Chúng tôi không đóng thuế đâu.
									</p>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Thời gian khiếu nại là bao lâu?
								</div>
								<div class="toggle-content">
									<p>
										Thời gian khiếu nại là 1 tuần. Nếu sau 1 tuần mà bạn không khiếu nại thì chúng tôi sẽ không giải quyết.
									</p>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Nếu giao dịch không thành công thì sao?
								</div>
								<div class="toggle-content">
									<p>
										Nếu giao dịch không thành công thì chúng tôi sẽ hoàn tiền cho bạn.
									</p>
									<div class="clearfix"></div>
								</div>
							</div><!-- /.accordion-toggle -->
							<div class="accordion-toggle">
								<div class="toggle-title">
									Làm thế nào để tôi biết được mình có bị lừa không?
								</div>
								<div class="toggle-content">
									<p>
										Nếu bạn đọc đến đây mà còn nghĩ bị lừa thì bạn không nên chơi.
									</p>
								</div>
							</div><!-- /.accordion-toggle -->
						</div><!-- /.accordion -->
					</div><!-- /.col-md-12 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</div><!-- /.flat-faqs -->
</template>

<script>
export default {
    name: 'Faqs'
}
</script>

<style scoped>
.flat-faqs {
    padding: 109px 0 100px;
}

/* Accordion */
.accordion .accordion-toggle {
    padding-left: 70px;
    padding-bottom: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #ebebeb;
}

.accordion .accordion-toggle:last-child {
    margin-bottom: 0;
}

.accordion .accordion-toggle .toggle-title {
    font-size: 16px;
    color: #181818;
    position: relative;
    cursor: pointer;
    letter-spacing: -0.2px;
}

.accordion .accordion-toggle .toggle-title:before {
    content: '+';
    position: absolute;
    font-size: 30px;
    font-weight: 300;
    height: 40px;
    width: 40px;
    line-height: 38px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    text-align: center;
    left: -70px;
    top: -9px;
}

.accordion .accordion-toggle .toggle-title.active:before {
    content: '-';
}

.accordion .accordion-toggle .toggle-content {
    margin-top: 27px;
    line-height: 24px;
}
</style>>
