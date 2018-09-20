$.ajax({
    url: 'data/petshop.json',
    success: function (response) {
        //response é um array JSON com objetos
        //$.each vai iterar esse array
        $.each(response, function (indice, obj) {
            $('#listaUsuarios').append('<li>' + obj.nome + '</li>');
        });
        //alert('encontrou!!!!');
        //Inserindo o conteudo do response após a tag <h1>
        $('h1').after(response);
    },
    error: function () {
        alert('Ocorreu um erro!!!');
    }
});