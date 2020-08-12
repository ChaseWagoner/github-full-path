const path = document.location.pathname;

document.title = path.replace(/.*?\/([^\/]*?)\/blob\/(.*?)\//, '$1/$2:');
