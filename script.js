let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function searchAndHighlight() {
    var searchQuery = document.getElementById('search-box').value.trim();
    var content = document.body.innerHTML;
    var regex = new RegExp(searchQuery, 'gi');

    // Remove previous highlights
    content = content.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');

    // Apply new highlights
    content = content.replace(regex, '<span class="highlight">$&</span>');

    document.body.innerHTML = content;

    var matches = document.querySelectorAll('.highlight');

    var resultsContainer = document.getElementById('searchResults');

    if (matches.length > 0) {
        resultsContainer.innerHTML = '<p>Found ' + matches.length + ' matches.</p>';
    } else {
        resultsContainer.innerHTML = '<p>No matches found.</p>';
    }
}