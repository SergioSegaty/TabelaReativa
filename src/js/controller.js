/**
 * @author Sergio Segaty <sergio.segaty@gmail.com>
 * Busca a lista de Objetos, trazendo o método do Modelo.
 * Desenha a tabela a partir de uma lista de Objetos.
 * @version 1.0.0
 */
var DrawTable = () => {
    var listaTarefas = getTarefas();

    let main = document.querySelector('#main');

    main.append(renderTable(listaTarefas));
}

DrawTable();