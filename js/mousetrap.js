// Получаем все ссылки с классом '.head-navigation-panel__link'
const links = document.querySelectorAll('.head-navigation-panel__link');

// Начальный номер для горячих клавиш
let hotkeyNumber = 1;

// Функция для проверки, является ли устройство мобильным
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
// Проходим по каждой ссылке из навигационной панели
    links.forEach(function (link) {
        // Создаем строку с горячей клавишей, например 'ctrl+alt+1', 'ctrl+alt+2', и т.д.
        const hotkey = 'ctrl+alt+' + hotkeyNumber;

        // Привязываем горячую клавишу к действию
        // hotkey - сочетание клавиш для активации
        // функция - действие, которое будет выполнено при активации горячей клавиши
        Mousetrap.bind(hotkey, function () {
            // Перенаправление на URL, указанный в атрибуте 'href' текущей ссылки
            window.location.href = link.getAttribute('href');
        });

        // Увеличиваем номер для следующей горячей клавиши
        hotkeyNumber++;
    });
    // Базовая горячая клавиша для перенаправления на 'index.html'
    // 'ctrl+alt+0' - сочетание клавиш для активации
    // функция - действие, выполняемое при активации горячей клавиши
    Mousetrap.bind('ctrl+alt+0', function () {
        // Перенаправление на 'index.html'
        window.location.href = 'index.html';
    });

}
