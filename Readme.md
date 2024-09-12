## 📝 YAPILACAKLAR

```js
/* providing token in bearer */
fetch("https://dummyjson.com/auth/me", {
  method: "GET",
  headers: {
    Authorization: "Bearer /* YOUR_TOKEN_HERE */",
  },
})
  .then((res) => res.json())
  .then(console.log);
```
