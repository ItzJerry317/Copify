const { shell } = require('electron')
 
var aHref = document.querySelector('#link')
 
aHref.onclick = function (e) {
    e.preventDefault()
 
    let href = this.getAttribute('href')
    shell.openExternal(href)
}