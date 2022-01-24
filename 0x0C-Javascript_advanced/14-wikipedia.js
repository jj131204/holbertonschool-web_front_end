function createElement(data) {
    pararaph = document.createElement('p');
    text = document.createTextNode(data);
    pararaph.appendChild(txt);
    document.body.append(pararaph);
  }

  function queryWikipedia(callback) {
    var test = new XMLHttpRequest();
    test.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    test.responseType = 'json';
  
    test.onreadystatechange = function () {
      if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        callback(test.response.query.pages["21721040"].extract);
      }
    };
  
    test.send();
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
    queryWikipedia(createElement);
  })