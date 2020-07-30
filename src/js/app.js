/**
 * Função que cria e renderiza a tabela a partir de um array de Objetos.
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * @param {[Tarefa]} tarefas 
 * @returns {HTMLElement}
 * @version 2.1.0
 */

var deleteTable = () => {
    let table = document.querySelector('table');
    table.remove();
}

var renderTable = (tarefas) => {
    const eleTable = document.createElement('table');

    th = tableHead('Status', 'Descrição', 'Data');
    tf = tableFooter();
    eleTable.append(th);

    tb = document.createElement('tbody');
    tb.setAttribute('id', 'tbody');

    if (tarefas.length > 1) {
        tarefas.forEach((tarefa) => {

            tr = tableRow(tarefa);
            tb.append(tr);
        })
    } else {
        tr = tableRow(tarefas);
        tb.append(tr);
    }
    eleTable.append(tb);
    eleTable.append(tf);

    return eleTable;
}


/**
 * Função que cria uma nova tarefa a partir dos inputs do Footer.
 * Adiciona ela no Body da Tabela.
 * 
 * @version 2.1.0
 */
const addTask = (targetTableBody, tarefa) => {
    let novaTarefa;
    let validation;
    let inputStatus;
    let inputDesc;
    let inputData;

    if (!tarefa) {
        inputStatus = document.getElementById('inputStatus').value;
        inputDesc = document.getElementById('inputDesc').value;
        inputData = document.getElementById('inputData').value;
        novaTarefa = new Tarefa(inputDesc, inputStatus, inputData);

    } else {
        novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data)
    }

    validation = validateModelTarefa(novaTarefa);
    if (!validation.valid) {
        alert(validation.message);
        return validation;
    }

    let tb = document.getElementById(targetTableBody);

    tr = tableRow(novaTarefa);
    tb.append(tr);
    addToTable(novaTarefa);

    return validation;
}

const removeTask = (e) => {
    let tr = (e.target.parentNode).parentNode;

    let id = (tr.getAttribute('id'));

    (e.target.parentNode).parentNode.remove();

    removeFromTable(id);
}

/**
 * Cria a Linha da tabela, a partir de um objeto.
 * @param {Tarefa} tarefa 
 * 
 * @version 2.1.0
 * 
 * @returns {HTMLTableSectionElement}
 */
const tableRow = (tarefa) => {
    tr = document.createElement('tr');

    tdStatus = document.createElement('td');
    tdDesc = document.createElement('td');
    tdData = document.createElement('td');
    tdAcao = document.createElement('td');

    tdStatus.innerHTML = tarefa.status;
    tdDesc.innerHTML = tarefa.descricao;
    tdData.innerHTML = tarefa.data;

    btnExcluir = document.createElement('button');
    btnExcluir.className += 'btn btn-danger';
    btnExcluir.innerHTML = "Excluir";
    btnExcluir.addEventListener('click', (e) => removeTask(e));

    tdAcao.append(btnExcluir);

    tr.setAttribute('id', tarefa.id);

    tr.append(tdStatus);
    tr.append(tdDesc);
    tr.append(tdData);
    tr.append(tdAcao);

    return tr;
}


/**
 * Cria o Elemento tHead e seus filhos.
 * Precisa dos parametros que ficarão como cabeçalhos.
 * @param {String} desc 
 * @param {String} status   
 * @param {String} data 
 * 
 * @version 1.0.0
 * 
 * @returns {HTMLTableSectionElement}
 */
var tableHead = (desc, status, data) => {

    const tableHead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thStatus = document.createElement('th');
    const thDesc = document.createElement('th');
    const thData = document.createElement('th');
    const thAcao = document.createElement('th');

    thStatus.innerHTML = status;
    thDesc.innerHTML = desc;
    thData.innerHTML = data;
    thAcao.innerHTML = 'Ação';

    tr.append(thStatus);
    tr.append(thDesc);
    tr.append(thData);
    tr.append(thAcao);

    tableHead.append(tr);

    return tableHead;
}


/**
 * Função que cria e retorna o footer da tabela com os Inputs inclusos.
 * 
 * @version 1.0.0
 * 
 * @returns {HTMLTableSectionElement}
 */
const tableFooter = () => {
    const tableFoot = document.createElement('tfoot');
    let tr = document.createElement('tr');

    let tdStatus = document.createElement('td');
    let tdDesc = document.createElement('td');
    let tdData = document.createElement('td');
    let tdAcao = document.createElement('td');

    let statusInput = document.createElement('input');
    statusInput.setAttribute('id', 'inputStatus');
    statusInput.setAttribute('type', 'text');
    statusInput.setAttribute('placeholder', 'Status');
    tdStatus.append(statusInput);

    let descInput = document.createElement('input');
    descInput.setAttribute('id', 'inputDesc');
    descInput.setAttribute('type', 'text');
    descInput.setAttribute('placeholder', 'Descrição');
    tdDesc.append(descInput);

    let dataInput = document.createElement('input');
    dataInput.setAttribute('id', 'inputData');
    dataInput.setAttribute('type', 'text');
    dataInput.setAttribute('placeholder', 'dd/mm/AAAA');
    tdData.append(dataInput);

    let btnAdd = document.createElement('button');
    btnAdd.innerHTML = 'Adicionar';
    btnAdd.className += 'btn btn-primmary';
    btnAdd.addEventListener('click', () => addTask('tbody'));
    tdAcao.append(btnAdd);

    tableFoot.append(tdStatus);
    tableFoot.append(tdDesc);
    tableFoot.append(tdData);
    tableFoot.append(tdAcao);

    return tableFoot;
}