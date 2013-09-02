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
  var url = "http://pulsatrix.inbio.ac.cr/rss/write.php";
  
  var params = "title=" + tab.title;
  params += "&url=" + tab.url;
  params += "&code=" + code;

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
