

   
function main(){
	var socketi =  io.connect('http://localhost:3000');
	socketi.emit('conectado');
   $(document).on('ready',function(){ socketi.emit('conectado');});
   $('#hh').on('click',function(){socketi.emit('click');});
   $('#hh1').on('click',function(){
   		var field = document.getElementById("ll1");
   		var text = field.value;
        socketi.emit('send', { message: text });
   });
   alert('holas');
   socketi.on ('enviarMensaje', procesarMensaje);
   socketi.on ('message', regreMensaje);
}
function procesarMensaje(data){

	$('#containerMessages').append($('<p>').html('<span>'+data));
	var container = $('#containerMessages');
    container.animate({"scrollTop": $('#containerMessages')[0].scrollHeight}, "slow");
}
function regreMensaje (data){
	alert(
JSON.stringify(data));
	//$('#containerMessages').append($('<p>').html('<span>'+data));
	var container = $('#containerMessages');
    container.animate({"scrollTop": $('#containerMessages')[0].scrollHeight}, "slow");
}
