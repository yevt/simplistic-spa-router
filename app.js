document.addEventListener('DOMContentLoaded', main);

function main() {
  window.addEventListener("hashchange", onHashChange, false);
  onHashChange();
}

function onHashChange(e) {
  var page = window.location.hash.substr(1);
  if (page) {
    var url = window.location.origin + '/' + page;
    loadPage(url);
  }
}

function loadPage(href) {
  var oReq = new XMLHttpRequest();

  oReq.onload = function() {
    showPageContent(this.responseText);
  };

  oReq.open("get", href, true);
  oReq.send();
}

function showPageContent(text) {
  var $content = document.getElementById('content');
  $content.innerHTML = text;
}
