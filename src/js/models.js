class Tarefa {
    constructor(desc, status, data) {
        this.descricao = desc;
        this.status = status;
        this.data = data;
    }
}

const listTarefas = [];

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
];


/**
 * Mock de um hit na API, tranforma um Json em uma lista de Objetos(Tarefa).
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * 
 * @version 1.0.0
 * 
 * @returns List[Tarefa]
 */
const getTarefas = () => {
    tarefasJson.forEach(tarefa => {
        let novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data);
        listTarefas.push(novaTarefa);
    });

    return listTarefas;
}