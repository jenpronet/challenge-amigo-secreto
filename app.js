// Selección de elementos del DOM
const inputField = document.getElementById('friendName');
const addButton = document.getElementById('addButton');
const drawButton = document.getElementById('drawButton');
const friendList = document.getElementById('friendList');
const resultDisplay = document.getElementById('result');

// Lista de amigos
let friends = [];

// Función para agregar un nombre a la lista
addButton.addEventListener('click', () => {
    const name = inputField.value.trim();

    if (name === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar nombre a la lista y limpiar el campo de entrada
    friends.push(name);
    inputField.value = '';
    updateFriendList();
});

// Función para actualizar la visualización de la lista de amigos
function updateFriendList() {
    // Limpiar la lista actual
    friendList.innerHTML = '';

    // Renderizar cada amigo en la lista
    friends.forEach((friend) => {
        const listItem = document.createElement('li');
        listItem.textContent = friend;
        friendList.appendChild(listItem);
    });
}

// Función para sortear un amigo aleatoriamente
drawButton.addEventListener('click', () => {
    if (friends.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agrega nombres antes de realizar el sorteo.');
        return;
    }

    // Seleccionar un amigo aleatoriamente
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];

    // Mostrar el resultado del sorteo
    resultDisplay.textContent = `¡El amigo sorteado es: ${selectedFriend}!`;
});
