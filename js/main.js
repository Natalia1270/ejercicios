   $(".btn-ocultar").click(function(){
        $("#amarillo").hide(); 

   });

   $(".btn-mostrar").click(function(){
    $("#amarillo").show(); 

});

$("#dos").click(function(){
    alert("presionaste el boton");

});

$("#tres").click(function(){
    $("#caja"). hide(3000);

});

$("#cuatro").click(function(){
    $("#caja").show(3000);

});

$("#cinco").click(function(){
    $("#caja1").fadeOut(2000);

});

$("#seis").click(function(){
    $("#caja1").fadeIn(2000);

});

$("#siete").click(function(){
    $("#caja2").slideUp(1000);

});

$("#ocho").click(function(){
    $("#caja2").slideDown(1000);

});

$("#nueve").click(function(){
    $("#caja3").animate({height: "200px"});

});

$("#diez").dblclick(function(){
    alert("doble click")

});