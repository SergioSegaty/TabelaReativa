const tarefasJson = [{
        'descricao': 'teste1',
        'status': 'A Fazer',
        'data': '27/07/2020'
    },
    {
        'descricao': 'teste2',
        'status': 'A Fazer',
        'data': '27/07/2020'
    },
    {
        'descricao': 'teste3',
        'status': 'A Fazer',
        'data': '27/07/2020'
    },
    {
        'descricao': "teste4",
        'status': 'A Fazer',
        'data': '27/07/2020'
    },
]

var getTarefas = () => {
    var listaTerafa = [];
    tarefasJson.forEach((tarefa) => {

        novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data);

        listaTerafa.push(novaTarefa);
    })
    renderTable(listaTerafa);
}

getTarefas();