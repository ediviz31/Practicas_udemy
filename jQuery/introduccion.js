$(document).ready(function(){
	$(".parrafo-uno").click(function(){
		$(this).hide(3000, function(){
			$("#parrafo-uno").show(3000, function(){
				$(".comentario").show(3000, function(){
					$(".saludo").show(3000);
					$(".saludo").click(function(){
						$(".bienvenida").show();
						$(".bienvenida").click(3000, function(){
							$(this).hide(3000, function(){
								$("#imagen").show(3000, function(){
									$(this).hide(3000, function(){
										$("#foto").show(3000);
									});
								});
							});
						});
					});
				});
			});
		});
	});

	$(".parrafo-dos").click(function(){
		$(this).hide(3000, function(){
			$("#parrafo-dos").show();
		});
	});

	$(".parrafo-tres").click(function(){
		$(this).hide(3000, function(){
			$("#parrafo-tres").show();
		});
	});
});

// He creado 3 parrafos donde accedi a cada uno de ellos y les puse una funcion
// que al darle click a cada uno de ellos desaparecerian
// y despues de desaparecer mandarian una alerta de que desaparecio uno y el dos y el tres