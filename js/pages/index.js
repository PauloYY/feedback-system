const form = document.getElementById("feedbackForm")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const Nome = document.getElementById("nome").value.trim();
    const Categoria = document.getElementById("categoria").value;
    const Nota = document.getElementById("nota").value;
    const Comentario = document.getElementById("comentario").value.trim();
    
    if(Comentario == "") {
        alert("Campo de comentário não preenchido!");
        return;
    }

    const Feedback = {
        nome: (Nome ? Nome : "Anônimo"),
        categoria : Categoria,
        nota: Nota,
        comentario: Comentario,
        status: 0,
        id: Date.now(),
        dataCriacao: new Date() 
    };

    console.log(Feedback);
    
    form.reset();
});




/*
id
nome
categoria
nota
comentario
dataCriacao
status (pendente / resolvido)
*/