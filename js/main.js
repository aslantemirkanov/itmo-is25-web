const links2name = new Map([
    ['catalog.html', 'Каталог'],
    ['male-catalog.html', 'Для мужчин'],
    ['female-catalog.html', 'Для женщин'],
    ['child-catalog.html', 'Детям'],
    ['sports-catalog.html', 'Виды спорта'],
]);


function activateMenuColor(){
    let items = document.querySelectorAll(".head-navigation-panel__link");
    items.forEach((item) => {
        let link = item.getAttribute("href")

        let path_split = document.location.pathname.split('/');
        let path = path_split[path_split.length - 1]

        if (link === path){
            item.parentElement.classList.add("active_page");
            console.log(item.parentElement.classList + "active_page")
        }
    })

}

addEventListener(
    'load', activateMenuColor);