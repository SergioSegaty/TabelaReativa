novaTarefa = new Tarefa('Tarefa Adicionada 3', 'Status Adicionado 3', 'Data Adicionada 3');
/**
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * Busca a lista de Objetos, trazendo o método do Modelo.
 * Desenha a tabela a partir de uma lista de Objetos.
 * @version 1.0.0
 */
var drawTable = async() => {
    let tarefaAntiga = {};

    let main = document.querySelector('#main');
    await GetAllTarefas(renderer);
    //await PutTarefa(novaTarefa);
    //await UpdateById(1, novaTarefa);

    //await (GetTarefaById(3, tarefa => console.log(tarefa)));
    //main.append(renderTable(listaTarefas));


};

const updateTable = async(id, novaTarefa) => {
    await UpdateById(id, novaTarefa);
    deleteTable();
    drawTable();
}

const addToTable = async(novaTarefa) => {
    addTarefaToDb(novaTarefa);
}

const removeFromTable = async(id) => {
    debugger;

    await removeTarefaById(id).then(() => {
        console.log('Depois de Remover Tarefa');
    });


}

let renderer = (listaTarefas) => { main.append(renderTable(listaTarefas)) }

drawTable();
//addToTable().then(() => console.log('Passou pelo Add Tarefa'));

//removeFromTable(6);