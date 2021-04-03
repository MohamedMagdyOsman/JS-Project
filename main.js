var addButton = document.getElementById('addTask');
    var outputList = document.getElementById('actualList');
    var inputText = document.getElementById('inputArea');

    addButton.addEventListener('click', function(){
        var addItem = document.createElement('p');
        addItem.innerHTML = inputText.value;
        outputList.appendChild(addItem);
        inputText.value = "";
        addItem.addEventListener('click', function(){
            addItem.style.textDecoration = "line-through";
        });
        addItem.addEventListener('dblclick', function(){
            outputList.removeChild(addItem);
        });
    });
