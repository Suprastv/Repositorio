class Usuario{
   // string Usuario=document.querySelector("#elUsuario").value;
   // string Clave;
    static entrar(){
        
        console.log("Bienvenido, usuario....");
        let miUsuario = document.querySelector("#elUsuario").value;
        let miClave = document.querySelector("#laClave").value;
		
		let usuarioCorrecto = "SupraS";
		let claveCorrecta = "ndeah";

		if(miUsuario == usuarioCorrecto && miClave ==miClave){
			alert("Entraste");
		}else{
			alert("A tu ksa");
		}
    }
}
