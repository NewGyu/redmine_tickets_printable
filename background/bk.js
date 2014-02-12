//printable.htmlへのissues引き渡し用
var issues = {};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  chrome.pageAction.show(sender.tab.id);
  issues[sender.tab.id] = request.issues;
  sendResponse({tabid:sender.tab.id});
});

chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.create({url:"printable.html?tabid=" + tab.id},function(tab){
    });
});