function splitURLandReturnComponents(url) {
  var urlComponents = {};
  var urlParts = url.split('?');
  urlComponents['url'] = urlParts[0];
  urlComponents['query'] = urlParts[1];
  return urlComponents;
}