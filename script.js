document.getElementById('showProjectBtn').addEventListener('click', function() {
    var projectContent = document.getElementById('projectContent');
    if (projectContent.style.display === 'none') {
        projectContent.style.display = 'block';
    } else {
        projectContent.style.display = 'none';
    }
});