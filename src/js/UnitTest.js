/**
 * Cria o ambiente de teste.
 * @returns {HTMLElement} 
 */

const testingEnvoirement = () => {
    main = document.createElement('div');
    main.setAttribute('id', 'main');

    return main;
};

/**
 * Testa a integração das outras funções e checa para ver se renderizou
 * a tabela de maneira correta comparando com um mock de OuterHTML.
 */
const testRenderTable = () => {
    console.log('Teste de Integração - Render Table');
    let main = testingEnvoirement();

    let tarefa = new Tarefa('Descrição', 'Status', 'Data');

    main.append(renderTable(tarefa));

    let hopeMain = '<div id="main"><table><thead><tr><th>Descrição</th><th>Status</th><th>Data</th><th>Ação</th>' +
        '</tr></thead><tbody id="tbody"><tr><td>Status</td><td>Descrição</td><td>Data</td><td>' +
        '<button class="btn btn-danger">Excluir</button></td></tr></tbody><tfoot><td>' +
        '<input id="inputStatus" type="text" placeholder="Status"></td><td>' +
        '<input id="inputDesc" type="text" placeholder="Descrição"></td><td>' +
        '<input id="inputData" type="text" placeholder="dd/mm/AAAA"></td><td>' +
        '<button class="btn btn-primmary">Adicionar</button></td></tfoot></table></div>';

    if (main.outerHTML === hopeMain) {
        console.log('Sucesso! Os elementos da Table são iguais.');
    } else {
        console.log('Falha! Os elementos da Table são diferentes');
    }
    console.log('___________');

}

/**
 * Testa a função que renderiza o TableHead e compara com um mock de outerHTML.
 */
const testRenderHead = () => {
    console.log('Teste de Unidade - Render TableHead');
    let header = tableHead('Descrição', 'Status', 'Data');

    let hopeHeader = '<thead><tr><th>Status</th><th>Descrição</th><th>Data</th><th>Ação</th></tr></thead>';

    if (header.outerHTML === hopeHeader) {
        console.log("Sucesso! Os elementos de TableHead são iguais.");
    } else {
        console.log("Falha! Os elementos de TableHead são diferentes.");
    }
    console.log('-----------');
}

/**
 * Testa a função que renderiza o TableFooter e compara com um mock de outerHTML.
 */
const testRenderFooter = () => {
    console.log('Teste de Unidade - Render TableFooter');
    let footer = tableFooter();

    let hopeFooter = '<tfoot><td><input id="inputStatus" type="text" placeholder="Status">' +
        '</td><td><input id="inputDesc" type="text" placeholder="Descrição">' +
        '</td><td><input id="inputData" type="text" placeholder="dd/mm/AAAA">' +
        '</td><td><button class="btn btn-primmary">Adicionar</button></td></tfoot>';


    if (footer.outerHTML === hopeFooter) {
        console.log('Sucesso! Os elementos de TableFooter são iguais.');
    } else {
        console.log('Falha! Os elementos de TableFooter são diferentes');
    }
    console.log('-----------');
}

/**
 * Testa a função que renderiza o TableRow e compara com um mock de outerHTML.
 */
const testRenderRow = () => {
    console.log('Teste de Unidade - Render TableRow');

    let tarefa = new Tarefa('Test Desc', 'Teste Stat', 'Teste Date');

    let row = tableRow(tarefa);

    let hopeRow = '<tr><td>Teste Stat</td><td>Test Desc</td><td>Teste Date</td>' +
        '<td><button class="btn btn-danger">Excluir</button></td></tr>';
    if (row.outerHTML === hopeRow) {
        console.log('Sucesso! Os elementos de TableRow são iguais.')
    } else {
        console.log('Falha! Os elementos de TableRow são diferentes.')
    }
    console.log('-----------');
}

const runTests = () => {
    testRenderHead();
    testRenderRow();
    testRenderFooter();
    testRenderTable();
}


runTests();