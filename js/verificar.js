(function(){
	
	var $btn_planilha = document.getElementById('btn_planilha');
	var $btn_planilha2 = document.getElementById('btn_planilha2');
	var $btn = document.getElementById('btn');
	var $div1 = document.getElementById('file-content');
	var $div2 = document.getElementById('content');

	var leitor = new FileReader();
	var seg_leitor = new FileReader();

	window.onload = function init() {

		leitor.onload = display;
		seg_leitor.onload = segDisplay;

	}

	function file(file){

		var file = file.target.files[0];
		leitor.readAsText(file);

	}
	
	function seg_file(file){

		var file = file.target.files[0];
		seg_leitor.readAsText(file);
	}

	function display(evt) {

		var file = evt.target.result.split('\n');
		var element = document.getElementById('file-content');
		var cont = document.getElementById('cont');
		var contador = 0;
		var str = '<table>';

		for (var i = 0; i < file.length; i++){

			str += '<tr>';
			var line = file[i].split(';');

			for (var j = 0; j < line.length; j++){

				str += '<td>'+line[j].trim()+'</td>';

			}

			contador++;
			str += '</tr>';
			

		}
		
		str += '</table>';
	  	element.innerHTML = str;
	  	cont.textContent = contador +" Dados";
	  	
	}

	function segDisplay(evto){

		var seg_file = evto.target.result.split('\n');
		var cont2 = document.getElementById('cont2');
		var elemento = document.getElementById('content');
		var contador = 0;
	  	var table = '<table>';

	  	for (var i = 0; i < seg_file.length; i ++){

	  		table += '<tr>';
	  		var lines = seg_file[i].split(';');
	  		for (var j = 0; j < lines.length; j++){

	  			table += '<td>'+lines[j].trim()+'</td>';

	  		}

	  		contador++;
	  		table += '</tr>';

	  	}
	  	
	  	table += '</table>';
	  	elemento.innerHTML = table;
	  	cont2.textContent = contador +" Dados";
	 
	}

	function verificar(){

		var fil = [];
		var filer = [];

		fil = $div1.innerText;
		filer = $div2.innerText;

		if(fil === filer){

			alert('ARQUIVOS SAO IGUAIS');

		}else{

			alert('ARQUIVOS CONTEM DIVERGENCIA');

		}

	}

	$btn_planilha.addEventListener('change', file, false);
	$btn_planilha2.addEventListener('change', seg_file, false);
	$btn.addEventListener('click', verificar, false);

})()