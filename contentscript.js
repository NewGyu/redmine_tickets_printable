//var issues = $("table issues");
var issues = $("table.issues tbody>tr.issue").map(function() {
   var td = $(this).find("td");
   return {
     id: td.filter(".id").text()
     ,tracker: td.filter(".tracker").text()
     ,project: td.filter(".project").text()
     ,subject: td.filter(".subject").text()
     ,requester: td.filter(".cf_57").text()
     ,client: td.filter(".cf_80").text()
     ,storyPoint: td.filter(".cf_64").text()
     ,hours: td.filter(".estimated_hours").text()
   };
}).get();

chrome.runtime.sendMessage({issues: issues}, function(response) {
  console.log("tabid="+response.tabid);
});