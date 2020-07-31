class Tarefa {
    constructor(desc, status, data) {
        this.descricao = desc;
        this.status = status;
        this.data = data;
    }
}

// const listTarefas = [];

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


// /**
//  * Mock de um hit na API, tranforma um Json em uma lista de Objetos(Tarefa).
//  * @author Sergio Segaty <sergio.segaty@gmail.com>
//  * 
//  * @version 1.0.0
//  * 
//  * @returns List[Tarefa]
//  */
// const getTarefas = () => {
//     tarefasJson.forEach(tarefa => {
//         let novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data);
//         listTarefas.push(novaTarefa);
//     });

//     return listTarefas;
// }

/** Valida o modelo e retorna o Objeto de resposta (Boolean e Msgs de erro)
 * @returns {{valid: Boolean, message: String}} valid
 * 
 * @param {Tarefa} tarefa 
 */
const validateModelTarefa = (tarefa) => {
    let msg = [];
    let bool = true;

    if (tarefa.descricao.length < 1) {
        msg += "Descrição não informada. \n";
        bool = false;
    }
    if (tarefa.data.length < 1) {
        msg += "Data não informada. \n";
        bool = false;
    }
    if (tarefa.status.length < 1) {
        msg += "Status não informado. \n";
        bool = false;
    }

    return {
        valid: bool,
        message: msg
    }
}