let login=document.querySelector("#login")

login.addEventListener("click",()=>{
    mostrarLogin()
})

const  mostrarLogin=()=>{
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
        Swal.fire(`
          Login: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })
      
}