function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(comment => comment.id >= 100 && comment.id <= 200);
            renderComments(filteredData);
            hidePreloader();
        })
        .catch(error => {
            console.error('Fetch error:', error);
            const feedbackSection = document.querySelector('.feedback-section');
            feedbackSection.innerHTML = '⚠ Что-то пошло не так'
        });
}

function renderComments(comments) {
    const feedbackList = document.querySelector(".feedback-list");
    comments.forEach(comment => {
        feedbackList.innerHTML += `
            <div class="feedback-item">
                <h2 class="feedback-item__name">${comment.name}</h2>
                <p class="feedback-item__text">${comment.body}</p>
                <p class="feedback-item__mail">${comment.email}</p>
            </div>
        `;
    });
}

function hidePreloader() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', loadComments);
