function doGet(e){

  // create and use a template
  var template = HtmlService.createTemplateFromFile("Template");
  return template.evaluate();
  
}

function shortenUrl(url) {
  var url = UrlShortener.Url.insert({
    longUrl: url
  });
  return JSON.stringify({"url":url.id});
}
