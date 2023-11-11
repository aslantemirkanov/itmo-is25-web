    //достаю из хранилища
    let storageMaxItems = localStorage.getItem('maxItems');
    let storageWishList = JSON.parse(localStorage.getItem('wishList')) || [];

    let maxItems = storageMaxItems ? parseInt(storageMaxItems, 10) : 0;
    let wishList = storageWishList;

    let maxItemsForm = document.getElementById('max-items-form');
    let maxItemsInput = document.getElementById('max-items');

    let wishListForm = document.getElementById('wish-form');
    let wishItemInput = document.getElementById('wish-item');
    let wishListOl = document.getElementById('wish-list');

    // восстановливаю список желаемых покупок из базы (отрисовываю)
    wishList.forEach(createWishListItem);
    function createWishListItem(itemText) {
        // создаю элемент
        const li = document.createElement('li');
        li.className = "wish-list-panel__item";
        li.textContent = itemText;
        li.style.margin = "10px"

        // создаю кнопку для удаления и добавляю ей логику
        const deleteButton = document.createElement('button');
        deleteButton.style.margin = '10px';
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            wishList = wishList.filter(wish => wish !== itemText);
            localStorage.setItem('wishList', JSON.stringify(wishList));
            wishListOl.removeChild(li);
        };
        li.appendChild(deleteButton);

        wishListOl.appendChild(li);
    }

    // обрабатываю форму максимального числа покупок
    maxItemsForm.addEventListener('submit', function(event) {
        event.preventDefault(); //здесь я предотвращаю перезагрузку страницы
        maxItems = parseInt(maxItemsInput.value, 10);
        localStorage.setItem('maxItems', maxItems);
        wishListForm.style.display = 'block'; // показываем форму списка покупок т.к. уже ввели число
    });

    // Обработка формы списка покупок
    wishListForm.addEventListener('submit', function(event) {
        event.preventDefault(); //здесь я предотвращаю перезагрузку страницы
        if (wishList.length < maxItems) {
            const item = wishItemInput.value;
            wishList.push(item); // добавляю элемент в массив
            localStorage.setItem('wishList', JSON.stringify(wishList)); // Сохраняем в LocalStorage
            createWishListItem(item);
            wishItemInput.value = ''; // очищаю поле ввода
        } else {
            alert('Достигнуто максимальное количество покупок!');
        }
    });


    if (maxItems > 0) {
        maxItemsInput.value = maxItems;
        wishListForm.style.display = 'block';
    }
