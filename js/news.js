const verificarSesion = () => { 

    if(inicioSesionLoginUser !== null){
       
        let sesionDerecha = document.createElement("h6");
        sesionDerecha.setAttribute("id", "sesionderecha");
        sesionDerecha.style.color = "#fff";
        sesionDerecha.style.fontWeight = "550";
        sesionDerecha.style.fontFamily = "'Lato', sans-serif;"
        sesionDerecha.innerHTML = nombreSesionLoginMail;
        contenedorLoginSign.append(sesionDerecha);

        botonLogin.remove()
        botonSign.remove()
        barraRegistro.remove()

    } else {
        console.log("no han iniciado sesion");
    }

}

verificarSesion();