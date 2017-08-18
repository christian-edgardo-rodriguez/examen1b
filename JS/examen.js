function conseguirData() {
  var name;
  var last;
  
  name=$('#first-name').val();
  last=$('#last-name').val();
  
  var obj= {nombre:name, apellido:last};
  
  localStorage.setItem("persona", JSON.stringify(obj));
  
  console.log(JSON.parse(localStorage.persona).nombre);
}

$(function(){ 
   var operation = "A"; 
   var selected_index = -1;  
   var tbCalcetas = localStorage.getItem("tbCalcetas"); 
   tbCalcetas = JSON.parse(tbCalcetas);  
   if(tbCalcetas == null) 
   			  tbCalcetas = []; 
}); 

function Add(){ 
var client = JSON.stringify({ 
	Nombre : $("#txtNombre").val(),
	Marca : $("#txtMarca").val(), 
	Color : $("#txtColor").val(), 
	Talla : $("#txtTalla").val(),
	Tipo : $("#txtTipo").val(),
	Stamp : $("#txtStamp").val(), 
	Genero : $("#txtGenero").val(), 
	Precio : $("#txtPrecio").val() 
	}); 
    tbCalcetas.push(client); 
    localStorage.setItem("tbCalcetas", JSON.stringify(tbCalcetas)); 
    alert("Creado"); 
    return true;
 } 
 
function Edit(){ 
tbCalcetas [selected_index] = JSON.stringify({
	Nombre : $("#txtNombre").val(),
	Marca : $("#txtMarca").val(), 
	Color : $("#txtColor").val(), 
	Talla : $("#txtTalla").val(),
	Tipo : $("#txtTipo").val(),
	Stamp : $("#txtStamp").val(), 
	Genero : $("#txtGenero").val(), 
	Precio : $("#txtPrecio").val() 
	});//Alter the selected item on the table 
    localStorage.setItem("tbCalcetas", JSON.stringify(tbCalcetas)); 
    alert("Modificado") 
    operation = "A";  
    return true; 
}

function Delete(){ 
  tbCalcetas.splice(selected_index, 1); 
  localStorage.setItem("tbCalcetas", JSON.stringify(tbCalcetas)); 
  alert("Borrado"); 
} 

function List(){		
	$("#tblList").html("");
	$("#tblList").html(
		"<thead>"+ 
		"	<tr>"+ 
		"	<th></th>"+ 
		"	<th>Nombre</th>"+ 
		"	<th>Marca</th>"+ 
		"	<th>Color</th>"+ 
		"	<th>Talla</th>"+ 
		"	<th>Tipo</th>"+ 
		"	<th>Estampado</th>"+ 
		"	<th>Genero</th>"+ 
		"	<th>Precio</th>"+
		"	</tr>"+ 
		"</thead>"+ 
		"<tbody>"+ 
		"</tbody>" ); 
		for(var i in tbCalcetas){ 
		var cli = JSON.parse(tbCalcetas[i]);
		 $("#tblList tbody").append("<tr>"+ 
		 "	<td><img src='images/edit.png' alt='Edit"+i+"' class='btnEdit'/><img src='images/delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" + 
		 "	<td>"+cli.Nombre+"</td>" + 
		 "	<td>"+cli.Marca+"</td>" + 
		 "	<td>"+cli.Color+"</td>" + 
		 "  <td>"+cli.Talla+"</td>" +
		 "	<td>"+cli.Tipo+"</td>" + 
		 "	<td>"+cli.Stamp+"</td>" + 
		 "	<td>"+cli.Genero+"</td>" + 
		 "  <td>"+cli.Precio+"</td>" +
		  "</tr>"); 
		  }
}

$(".btnEdit").bind("click", function(){
	operation = "E";
	selected_index = parseInt($(this).attr("alt").replace("Edit", "")); 
	var cli = JSON.parse(tbCalcetas[selected_index]);
	$("#txtNombre").val(cli.Nombre);
	$("#txtMarca").val(cli.Marca);
	$("#txtColor").val(cli.Color);
	$("#txtTalla").val(cli.Talla);
	$("#txtTipo").val(cli.Tipo);
	$("#txtStamp").val(cli.Stamp);
	$("#txtGenero").val(cli.Genero);
	$("#txtPrecio").val(cli.Precio);
}); 

$(".btnDelete").bind("click", function(){ 
selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
Delete(); 
List(); 
});

$("#frmCadastre").bind("submit",function(){ 
if(operation == "A") 
return Add(); 
else return 
Edit();	
}); 


