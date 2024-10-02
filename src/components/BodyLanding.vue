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
				<div class="login-form border  rounded p-4">
					<h4 class="text-center mb-4">Iniciar Sesión</h4>
					<form>
						<div class="mb-3">
							<label for="email" class="form-label">Correo Electrónico</label>
							<input type="email" class="form-control" id="email" 
								required>
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Contraseña</label>
							<input type="password" class="form-control" id="password"  required>
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

<script>
export default {
	name: 'BodyLanding',
};
</script>

<style scoped>
/* Tus estilos personalizados aquí */
</style>
