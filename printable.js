var template = $("#tmpl").html();
var bk = chrome.extension.getBackgroundPage();
var tabid= location.search.match(/tabid=([^&]+)/)[1];
document.write(Mustache.to_html(template, {issues: bk.issues[tabid]}));
