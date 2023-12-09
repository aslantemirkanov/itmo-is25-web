const links = document.querySelectorAll('.head-navigation-panel__link');
let hotkeyNumber = 1;

links.forEach(function(link) {
    const hotkey = 'ctrl+alt+' + hotkeyNumber;

    Mousetrap.bind(hotkey, function() {
        window.location.href = link.getAttribute('href');
    });
    hotkeyNumber++;
});

Mousetrap.bind('ctrl+alt+0', function() {
    window.location.href = 'index.html';
});