let login = document.querySelector("#login")


login.addEventListener("click", () => {
  mostrarLogin()
})

const mostrarLogin = () => {
  //alert("Hola")
  Swal.fire({
    title: 'Formulario Login',
    html: `<input type="email" id="login" class="swal2-input" placeholder="Correo">
        <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
    confirmButtonText: 'Ingresar',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {

    let usuario = localStorage.getItem(result.value.login)

    usuario = JSON.parse(usuario)
    
    const correo = document.querySelector("#correo")

    if (usuario.correo === result.value.login && usuario.contrasena === Number(result.value.password)) {
      correo.classList.add("enlace-nav")
      correo.innerHTML = usuario.name
    } else {

      alert("Ingrese datos correctos")
    }
  })

}