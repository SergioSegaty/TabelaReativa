/**
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * Busca a lista de Objetos, trazendo o método do DAO.
 * Desenha a tabela a partir de uma lista de Objetos.
 * @version 1.0.0
 */
var drawTable = async() => {
    let tarefaAntiga = {};

    let main = document.querySelector("#main");
    await GetAllTarefas(renderer);
};

/**
 * Metodo para atualizar um objeto Tarefa já existente.
 *
 * @param {Number} id
 * @param {Tarefa} novaTarefa
 */
const updateTable = async(id, novaTarefa) => {
    await UpdateById(id, novaTarefa);
    deleteTable();
    drawTable();
};

/**
 * Adiciona na tabela da Tela uma nova Tarefa e chama o Callback para
 * adicionar o Id da novaTarefa na TR.
 *
 * @param {Tarefa} novaTarefa
 * @param {Function} callBack
 */
const addToTable = async() => {
    let inputDesc = document.getElementById("inputDesc").value;
    let inputStatus = document.getElementById("inputStatus").value;
    let inputData = document.getElementById("inputData").value;
    let novaTarefa = new Tarefa(inputDesc, inputStatus, inputData);
    let tbody = document.getElementById("tbody");

    addTarefaToDb(novaTarefa, callBack => {
        novaTarefa.id = callBack;
        addTask(tbody, novaTarefa);
    });
};

/**
 * Remove da tabela do DB o objeto com Id.
 *
 * @param {Number} id
 */
const removeFromTable = async id => {
    await removeTarefaById(id).then(() => {
        console.log("Depois de Remover Tarefa");
    });
};

let renderer = listaTarefas => {
    main.append(renderTable(listaTarefas));
};

drawTable();