**使用Object的解法**

```js
function isAnagram(s, t) {
  if(s.length !== t.length) return false;
  
  const count = {}
  
  for(let char of s) {
    count[char] = (count[char] || 0) + 1
  }
  
  for(let char of t) {
    if(!count[char]) return false
    count[char]--
    if(count[char] === 0) delete count[char]
  }
  
  return Object.keys(count).length === 0
}

isAnagram("racecar", "carrace") // true
isAnagram("jar", "jam") // false
```

**使用Set的解法**

```js
function isAnagram(s, t) {
  if(s.length !== s.length) return false
  
  const map = new Map()
  
  for(let char of s) {
    map.set(char, (map.get(char) || 0)+1)
  }
  
  for(let char of t) {
    if(!map.has(char)) return false
    
    map.set(char, (map.get(char)) - 1)
    if(map.get(char) === 0) map.delete(char)
  }
  
  return map.size === 0
}

isAnagram("racecar", "carrace") // true
isAnagram("jar", "jam") // false
```