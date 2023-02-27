var personalidad=document.getElementById('personalidad'); 
var instituciones=document.getElementById('instituciones'); 
var contactarme=document.getElementById('contactarme'); 
var comprobable=document.getElementById('comprobable');


	document.getElementById('personal').addEventListener('mouseover', function(){
	personalidad.style.display="inline-block"
	});

	document.getElementById('personal').addEventListener('mouseout', function(){
	personalidad.style.display="none"
	});
	
	document.getElementById('estudios').addEventListener('mouseover', function(){
	instituciones.style.display="inline-block"
	});
	
	document.getElementById('estudios').addEventListener('mouseout', function(){
	instituciones.style.display="none"
	});
	
	document.getElementById('info_de_contacto').addEventListener('mouseover', function(){
	contactarme.style.display="inline-block"
	});
	
	document.getElementById('info_de_contacto').addEventListener('mouseout', function(){
	contactarme.style.display="none"
	});
	
	document.getElementById('exp_laboral').addEventListener('mouseover', function(){
	comprobable.style.display="inline-block"
	});
	
	document.getElementById('exp_laboral').addEventListener('mouseout', function(){
	comprobable.style.display="none"
	});