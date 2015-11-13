// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var action_url = "javascript:alert(\"hello world!\");";

  var code = localStorage["code"];
  if (!code) {
    action_url = "javascript:alert(\"Configure your code\")";
    chrome.tabs.update(tab.id, {url: action_url});
    return;
  }

  var xhr = new XMLHttpRequest();
  var url = "http://pulsatrix.inbio.ac.cr/rss/process.php";
  
  var params = "title=" + tab.title;
  params += "&url=" + tab.url;
  params += "&code=" + code;

  var description = getDesc(tab);

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) {
                alert("url enviado");
                //chrome.tabs.update(tab.id, {url: action_url});
        }
  }
  xhr.send(params);

});

// get the meta description of a page
function getDesc(document){
  var metas = document.getElementsByTagName('meta');
  for(var i=0;i<metas.lenght;i++){
    if(metas[i].getAttribute('name').toLowerCase() == 'description'){
      return metas[i].getAttribute('content');
    }
  }
  return null;//or empty string if you prefer
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if(request.action == 'getDescription')
    sendResponse({description: getDesc(document)});
  else
    sendResponse({});
});
