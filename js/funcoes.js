//alert( 'arquivo js linkado com sucesso!' );

document.getElementById("loginForm").addEventListener
("submit", function(event){
event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // === (IDENTICO), == (IGUAL)
    //      '111' E '111'  111 E '111'

    if( username === 'admin' && password === 'senha123' ){
        Swal.fire({
            title: "Sucesso!",
            text: "Login realizado com sucesso!",
            icon: "success",
            confirmButtonText: 'OK'
        });
            
        }else{
            Swal.fire({
                title: "Erro!",
                text: "Usuário ou senha incorretos.",
                icon: "error",
                confirmButtonText: 'OK'
        });
    }
});