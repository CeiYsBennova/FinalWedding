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
						
						<form @submit.prevent="sendContact">
							<div class="form-group row">
								<div class="col-md-6">
									<input type="text" class="form-control" placeholder="Họ và tên" v-model="message.name">
								</div>
								<div class="col-md-6">
									<input type="email" class="form-control" placeholder="Email" v-model="message.email">
								</div>

								<div class="col-md-12">
									<!-- <input type="text" class="form-control" placeholder="Nội dung" v-model="message.message"> -->
									<textarea class="form-control" placeholder="Nội dung" v-model="message.message" cols="30" rows="10"></textarea>
								</div>

								<div class="col-md-5"></div>
								<div class="col-md-2">
									<button class="btn btn-success"> Gửi</button>
								</div>
								<div class="col-md-5"></div>
							</div>
						</form>
					</div><!-- /.col-md-12 -->
				</div><!-- /.row -->
			</div><!-- /.container -->
		</section><!-- /.flat-contact-form -->
    </div>
</template>

<script>
export default {
    name: 'Contact',
	data() {
		return {
			message:{
				name: '',
				email: '',
				message: '',
			},
			messages: [],
		}
	},
	methods: {
		async sendContact() {
			await fetch('http://127.0.0.1:8000/api/contact/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(this.message)
			})
		}
	},
}
</script>

<style scoped>
.form-group .col-md-6 {
	padding-bottom: 30px;
}
.form-group .col-md-12 {
	padding-bottom: 30px;
}
.form-group .col-md-12 .form-control {
	height: 200px;
	text-align: start;
}

.btn-success {
	background-color: #f9a825;
	border-color: #f9a825;
}
.btn {
	width: 100%;
}
</style>