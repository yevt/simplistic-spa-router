document.addEventListener('DOMContentLoaded', main);

function main() {
  window.addEventListener("hashchange", onHashChange, false);
  onHashChange();
}

function onHashChange(e) {
  var page = window.location.hash.substr(1);
  console.log('page ===>', page);
  if (page) {
    var url = window.location.origin + '/' + page;
    console.log('url ===>', url);
    loadPage(url, showPageContent);
  }
}

function loadPage(href, loadedCallback) {
  var oReq = new XMLHttpRequest();

  oReq.onload = function() {
    loadedCallback(this.responseText);
  };

  oReq.open("get", href, true);
  oReq.send();
}

function showPageContent(text) {
  var $content = document.getElementById('content');
  $content.innerHTML = text;
}
