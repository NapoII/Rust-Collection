function performSearch() {
    var searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        var url = 'https://rustlabs.com/search=' + encodeURIComponent(searchInput);
        openLink(url);
    }
}