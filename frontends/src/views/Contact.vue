<template>
  <div>
    <section class="flat-address-box">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="address-box center">
							<div class="box-header">
								<div class="icon">
									<i class="fa fa-map-marker"></i>
								</div>
							</div><!-- /.box-header -->
							<div class="box-content">
								<h2>Địa chỉ</h2>
								<p>Linh Trung Thủ Đức Thành phố Hồ Chí Minh</p>
							</div><!-- /.box-content -->
						</div><!-- /.address-box -->
					</div><!-- /.col-md-4 -->
					<div class="col-md-4">
						<div class="address-box center">
							<div class="box-header">
								<div class="icon">
									<i class="fa fa-phone"></i>
								</div>
							</div><!-- /.box-header -->
							<div class="box-content">
								<h2>SĐT</h2>
								<p>+12345678</p>
							</div><!-- /.box-content -->
						</div><!-- /.address-box -->
					</div><!-- /.col-md-4 -->
					<div class="col-md-4">
						<div class="address-box center">
							<div class="box-header">
								<div class="icon">
									<i class="fa fa-envelope-open"></i>
								</div>
							</div><!-- /.box-header -->
							<div class="box-content">
								<h2>Email:</h2>
								<p>plsdontcontact@gmail.com</p>
							</div><!-- /.box-content -->
						</div><!-- /.address-box -->
					</div><!-- /.col-md-4 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</section><!-- /.flat-address-box -->

		<section class="flat-row flat-contact-form">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="top-title center">
							<h2>Liên hệ với chúng tôi</h2>
							<p>Chúng tôi sẽ cố phản hồi nhanh nhất có thể</p>
						</div>
						<div class="form-contact-form">
							<form id="contactform" action="./contact/contact-process.php" method="post" accept-charset="utf-8">
								<div id="subscribe-content-1">
									<div class="field-row">
										<div class="contact-form-name contact-form">
											<input type="text" name="name" id="name" placeholder="Họ tên" required="" />
										</div>
										<div class="contact-form-email contact-form">
											<input type="text" name="email" id="email" placeholder="Email" required="" />
										</div>
									</div>
									<div class="contact-form-comment contact-form">
										<textarea name="message" id="message" placeholder="Tin nhắn" required=""></textarea>
									</div>
									<div class="btn-contact-form center">
										<button type="submit" class="flat-button-form border-radius-2">GỬI</button>
									</div>
								</div>
							</form><!-- /form -->
						</div><!-- /.form-contact-form -->
					</div><!-- /.col-md-12 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</section><!-- /.flat-contact-form -->
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>

</style>