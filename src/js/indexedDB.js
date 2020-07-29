let StartDB = () => {
    var db;
    debugger;
    const dbName = 'TarefasDB'
    var request = window.indexedDB.open(dbName, 1);

    listaTarefas = [];

    tarefasJson.forEach(tarefa => {
        let novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data);
        listaTarefas.push(novaTarefa);
    })
    console.log(listaTarefas);

    request.onerror = (event) => console.log("Erro ao abrir o banco de dados", event);

    request.onupgradeneeded = (event) => {
        console.log("Atualizando...");
        db = event.target.result;
        var objectStore = db.createObjectStore(dbName, { keyPath: "id", autoIncrement: true });

        //Transaction

    };

    request.onsuccess = (event) => {
        debugger;
        console.log("Banco de dados aberto com sucesso.");
        db = event.target.result;

        var tarefasObjectStoreTransaction = db.transaction(dbName, "readwrite");
        var store = tarefasObjectStoreTransaction.objectStore(dbName);


        listaTarefas.forEach(tarefa => {
            var add = store.add(tarefa);
        })
    };
}