<!DOCTYPE html>
<html>

	<head>
		<?php include 'components/head.html' ?>
	</head>

	<body>

		<main class="main" id="top">
			<div class="row vh-100 g-0">

				<div class="col-lg-6 position-relative d-none d-lg-block">
				  <div class="bg-holder" style="background-image:url('assets/img/bg-login.jpg');"></div>
				</div>

				<div class="col-lg-6" id="viewLogin">
				  	<div class="row flex-center h-100 g-0 px-4 px-sm-0">
				    	<div class="col col-sm-6 col-lg-7 col-xl-6">

					    	<a class="d-flex flex-center text-decoration-none mb-4">
						        <div class="d-flex align-items-center fw-bolder fs-5 d-inline-block">
						        	<img src="assets/img/icons/logo.png" width="58" />
						        </div>
					      	</a>

					      	<form @submit.prevent="realizar_login()" method="POST">
					      		<div class="text-center mb-7">
					        		<h3 class="text-1000">Login</h3>
					        		<p class="text-700">Preencha o formulário abaixo para acessar sua conta</p>
					      
							      	<div class="mb-3 text-start">
							      		<label class="form-label ps-0" for="email">Login <span class="text-danger">*</span></label>
								        <div class="form-icon-container">
								        	<input v-model="login" required class="form-control form-icon-input" type="text" placeholder="Digite aqui seu e-mail de acesso" />
								        	<span class="fas fa-user text-900 fs--1 form-icon"></span>
								        </div>
							      	</div>

							      	<div class="mb-3 text-start">
							      		<label class="form-label ps-0" for="password">Senha <span class="text-danger">*</span></label>
							        	<div class="form-icon-container">
							        		<input v-model="senha" autocomplete required class="form-control form-icon-input" type="password" placeholder="Digite aqui sua senha de acesso" />
							        		<span class="fas fa-key text-900 fs--1 form-icon"></span>
							        	</div>
							      	</div>

						      		<div class="row flex-between-center mb-4">

								        <div class="col-auto">
							          		<div class="form-check mb-0">
							          			<input class="form-check-input" name="lembrar" id="basic-checkbox" type="checkbox" checked="checked" />
							          			<label class="form-check-label mb-0" for="basic-checkbox">Lembre de mim</label>
							          		</div>
								        </div>

							      	</div>

					      			<button type="submit" class="btn btn-primary w-100 mb-3">Acessar</button>
					    		</div>
					    	</form>

				  		</div>
					</div>
				</div>
			</div>
		</main>

        <?php include 'components/scripts.html' ?>


		<script src="assets/js/login/login_funcoes.js"></script>
		<script src="assets/js/login/login_vue.js"></script>
		

	</body>

</html>