<template>
	<div class="container">
		<div class="row">
			<div id="carouselExampleFade" class="carousel slide carousel-fade col-8" data-bs-ride="carousel">
				<div class="carousel-inner w-100 rounded overflow-hidden">
					<div class="carousel-item active">
						<img src="/src/img/GirasTecnicas.jpeg" class="d-block w-100" alt="Imagen 1">
					</div>
					<div class="carousel-item">
						<img src="/src/img/GIRA-aguaccate-850x425.png" class="d-block w-100" alt="Imagen 2">
					</div>
					<div class="carousel-item">
						<img src="/src/img/GIRA-TECNICA-AGRONEGOCIOS-PERU-2023-768x425.png" class="d-block w-100"
							alt="Imagen 3">
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
					data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
					data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div class="col-4">
				<div class="login-form border rounded p-4">
					<h4 class="text-center mb-4">Iniciar Sesión</h4>
					<form>
						<div class="mb-3">
							<label for="email" class="form-label">Correo Electrónico</label>
							<input type="email" class="form-control" id="email" required>
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Contraseña</label>
							<input type="password" class="form-control" id="password" required>
						</div>
						<div class="mb-3 form-check">
							<input type="checkbox" class="form-check-input" id="rememberMe">
							<label class="form-check-label" for="rememberMe">Recuérdame</label>
						</div>
						<button type="submit" class="btn btn-success w-100">Iniciar Sesión</button>
						<p class="text-center mt-3">¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
					</form>
				</div>
			</div>
		</div>
	</div>


</template>
<style>
  .login-form {
    max-inline-size: 400px;
    margin: 3px auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .login-form h4 {
    color: #333;
    font-size: 24px;
    font-weight: bold;
  }

  .login-form .form-label {
    font-size: 14px;
    color: #555;
  }

  .login-form input {
    border-radius: 8px;
    padding: 10px;
    font-size: 14px;
  }

  .login-form input:focus {
    border-color: #28a745;
    box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
  }

  .login-form .form-check-label {
    font-size: 14px;
    color: #555;
  }

  .login-form .btn {
    font-size: 16px;
    background-color: #28a745;
    border: none;
    padding: 12px 0;
    border-radius: 8px;
  }

  .login-form .btn:hover {
    background-color: #218838;
  }

  .login-form p {
    font-size: 14px;
    color: #555;
  }

  .login-form p a {
    color: #28a745;
    text-decoration: none;
  }

  .login-form p a:hover {
    text-decoration: underline;
  }

  .login-form {
    padding: 30px;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
</style>

<script>
export default {
	name: 'BodyLanding',
};
</script>

<style scoped>
/* Tus estilos personalizados aquí */
</style>
