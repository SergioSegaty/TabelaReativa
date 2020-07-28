/**
 * Função que cria e renderiza a tabela a partir de um Objeto.
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * @param {List[Tarefas]} tarefas 
 * 
 * @version 1.0.0
 */
var renderTable = (tarefas) => {
    const eleTable = document.createElement('table');

    th = tableHead('Status', 'Descrição', 'Data');
    tf = tableFooter();
    eleTable.append(th);

    const tableBody = document.createElement('tbody');
    tableBody.setAttribute('id', 'tbody');
    tarefas.forEach((tarefa) => {

        tr = tableRow(tarefa);
        tableBody.append(tr);
    })
    eleTable.append(tableBody);
    eleTable.append(tf);

    let main = document.querySelector('.main');

    main.append(eleTable);
}


/**
 * Função que cria uma nova tarefa a partir dos inputs do Footer.
 * Adiciona ela no Body da Tabela.
 * @version 1.0.0
 */
let addTask = () => {
    inputStatus = document.getElementById('inputStatus').value;
    inputDesc = document.getElementById('inputDesc').value;
    inputData = document.getElementById('inputData').value;
    novaTarefa = new Tarefa(inputDesc, inputStatus, inputData);
    tr = tableRow(novaTarefa);

    tableBody = document.getElementById('tbody');
    tableBody.append(tr);
}

/**
 * Cria a Linha da tabela, a partir de um objeto.
 * @param {Tarefa} tarefa 
 * @version 1.0.0
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
    btnExcluir.addEventListener('click', (e) => {
        ((e.target.parentNode).parentNode).remove();
    });

    tdAcao.append(btnExcluir);

    tr.append(tdStatus);
    tr.append(tdDesc);
    tr.append(tdData);
    tr.append(tdAcao);

    return tr;

}


/**
 * Cria o Elemento tHead e seus filhos.
 * Precisa dos parametros que ficarão como cabeçalhos.
 * @param {String} status   
 * @param {String} desc 
 * @param {String} data 
 * @version 1.0.0
 */
const tableHead = (status, desc, data) => {

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
 * Função que cria e retorna o footer da tabela.
 * @version 1.0.0
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
    btnAdd.addEventListener('click', () => addTask())
    tdAcao.append(btnAdd);

    tableFoot.append(tdStatus);
    tableFoot.append(tdDesc);
    tableFoot.append(tdData);
    tableFoot.append(tdAcao);

    return tableFoot;
}