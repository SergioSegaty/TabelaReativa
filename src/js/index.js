AdicionarLinha = () => {
    let tbody = document.getElementById('tableBody');

    let status = document.getElementById('inputStatus');
    let desc = document.getElementById('inputDesc');
    let data = document.getElementById('inputData');

    let elementRow = document.createElement('tr');

    if (!status.value) {
        alert("Status precisa estar preenchido");
    }

    let tdStatus = document.createElement('td');
    let tdDesc = document.createElement('td');
    let tdData = document.createElement('td');
    let tdButton = document.createElement('td');

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Excluir';
    deleteBtn.className += 'btn btn-danger';

    tdStatus.innerHTML = status.value;
    tdDesc.innerHTML = desc.value;
    tdData.innerHTML = data.value;

    tdButton.append(deleteBtn);

    elementRow.append(tdStatus);
    elementRow.append(tdDesc);
    elementRow.append(tdData);
    elementRow.append(tdButton);

    tbody.appendChild(elementRow);

    deleteBtn.addEventListener('click', (e) => {
        ((e.target.parentNode).parentNode).remove();
    });
}


appStart = () => {
    let addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', () => AdicionarLinha());

    let deleteBtn = document.getElementsByClassName('btn-excluir');

    for (let index = 0; index < deleteBtn.length; index++) {
        deleteBtn[index].addEventListener('click', (e) => {
            ((e.target.parentNode).parentNode).remove();
        });
    }

    let menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click', () => alert('foi'));
}


appStart();