let db;
let dbName = "TarefasDB";
let tableName = "tarefas";

/**
 * Começa o DB e Popula ele com um Mock de Tarefas.
 */
let StartDB = async() => {
    var request = await window.indexedDB.open(dbName, 1);

    var listaTarefas = [];

    tarefasJson.forEach(tarefa => {
        let novaTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.data);
        listaTarefas.push(novaTarefa);
    });

    request.onerror = event =>
        console.log("Erro ao abrir o banco de dados", event);

    request.onupgradeneeded = event => {
        console.log("Atualizando...");
        db = event.target.result;
        var objectStore = db.createObjectStore(tableName, {
            keyPath: "id",
            autoIncrement: true
        });
    };

    request.onsuccess = event => {
        console.log("Banco de dados aberto com sucesso.");
        db = event.target.result;

        //Transaction
        var tarefasObjectStoreTransaction = db.transaction(tableName, "readwrite");
        var store = tarefasObjectStoreTransaction.objectStore(tableName);
        store.getAll().onsuccess = e => {
            lista = e.target.result;
            if (lista.length === 0) {
                listaTarefas.forEach(tarefa => {
                    store.add(tarefa);
                });
            }
        };
    };
};

/**
 * Retorna todas as Tarefas dentro do IndexedDB
 * @param {Array.<Tarefa>} tarefas
 */
const GetAllTarefas = async tarefas => {
    listaTarefas = [];
    let request = await setUpDb();

    request.onerror = event => {
        console.log("Não foi possível abrir o Banco de Dados de: " + dbName);
    };

    request.onsuccess = event => {
        db = event.target.result;

        let transaction = db.transaction([tableName]);
        let store = transaction.objectStore(tableName);
        let storeReq = store.getAll();

        storeReq.onsuccess = () => {
            listaTarefas = storeReq.result;
            tarefas(listaTarefas);
        };
    };
};

/**
 * Busca uma tarefa pelo Id, retorna a tarefa como um Callback.
 * @param {Number} idTarefa
 * @param {Tarefa} tarefa
 */
const GetTarefaById = async(idTarefa, callBackTarefa) => {
    let request = await setUpDb();

    request.onerror = event => {
        console.log("Não foi possivel abrir o Banco de Dados de nome: " + dbName);
    };

    request.onsuccess = event => {
        db = event.target.result;
        let transaction = db.transaction([tableName]);
        let store = transaction.objectStore(tableName);
        let storeReq = store.get(idTarefa);

        storeReq.onsuccess = () => {
            callBackTarefa(storeReq.result);
        };
    };
};

/**
 * Atualiza a tabela procurando um Id já existente e atualizando os dados.
 * @param {Number} idTarefa
 * @param {Tarefa} novaTarefa
 */
const UpdateById = async(idTarefa, novaTarefa) => {
    let request = await setUpDb();

    request.onsuccess = async e => {
        await GetTarefaById(idTarefa, callBackTarefa => {
            db = e.target.result;
            var dado = callBackTarefa;

            dado.descricao = novaTarefa.descricao;
            dado.status = novaTarefa.status;
            dado.data = novaTarefa.data;

            console.log(dado);

            objectStore = db
                .transaction([tableName], "readwrite")
                .objectStore(tableName);

            requestUpdate = objectStore.put(dado);

            requestUpdate.onerror = () => {
                console.log("Não foi possível Guardar o Dado: " + dado.descricao);
            };

            requestUpdate.onsuccess = e => {
                console.log("Dado atualizado com Sucesso");
            };
        });
    };
};

/**
 * Adiciona uma nova tarefa de um Objeto.
 * @param {Tarefa} tarefa
 */
const addTarefaToDb = async(tarefa, callBack) => {
    let request = await setUpDb();
    var novaTarefaId;

    request.onerror = () => {
        console.log("Não foi possível abrir o Banco de Dados de nome: " + dbName);
    };

    request.onsuccess = e => {
        db = e.target.result;

        var tarefasObjectStoreTransaction = db.transaction(tableName, "readwrite");
        var store = tarefasObjectStoreTransaction.objectStore(tableName);

        store.add(tarefa).onsuccess = e => {
            idNovaTarefa = e.target.result;
            callBack(idNovaTarefa);
        };

        console.log("Adicionado Tarefa no DB com Sucesso");
    };
};
/**
 * Remove a tarefa do DB pelo seu ID
 * @param {Number} id
 */
const removeTarefaById = async id => {
    let request = await setUpDb();

    request.onerror = () => {
        console.log("Não foi possível iniciar o Banco de Dados");
    };

    request.onsuccess = e => {
        console.log("Sucesso! Db Iniciado");
        db = e.target.result;

        var transaction = db
            .transaction(tableName, "readwrite")
            .objectStore(tableName)
            .delete(parseInt(id));

        transaction.onerror = () => {
            console.log("Não foi possível deleter o Item de Id: " + id);
        };

        transaction.onsuccess = () => {
            console.log("Sucesso! Deletado Tarefas com Id: " + id);
        };
    };
};

/**
 * Retorna a abertura do IndexedDB.
 */

StartDB();
const setUpDb = async() => {
    return window.indexedDB.open(dbName, 1);
};