(function loadingTime() {
    addEventListener(
        'load', function () {
            let loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
            let loadTimeSeconds = loadTime / 1000;
            let infoFooter = document.getElementById('loading-time');
            if (infoFooter) {
                infoFooter.textContent = 'Страница загрузилась за ' + loadTimeSeconds + ' секунд';
            } else {
                console.log('Элемента с ID "info-footer" не существует!!!');
            }
            return loadTimeSeconds;
        });
})();
