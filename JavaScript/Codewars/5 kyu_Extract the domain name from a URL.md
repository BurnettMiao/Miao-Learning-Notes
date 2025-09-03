## 5 kyu Extract the domain name from a URL

Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

- url = "http://github.com/carbonfive/raygun" -> domain name = "github"
- url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
- url = "https://www.cnet.com" -> domain name = cnet"

* 解法一

```js
function domainName(url) {
  let cleanUrl = url
    .replace('http://', '')
    .replace('www.', '')
    .replace('https://', '');

  return cleanUrl.split('.')[0];
}
```
