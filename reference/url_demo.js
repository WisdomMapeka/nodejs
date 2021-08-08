const url = require('url');

const myurl = new URL('https://www.instagram.com/zimfitmums/')

// serialized url
console.log(myurl.href);
console.log(myurl.toString());

// host: root domain
console.log(myurl.host);

// hostname( does not get port)
console.log(myurl.hostname);

// pathname
console.log(myurl.pathname)

// serialized querry
console.log(myurl.search);

// param objects
console.log(myurl.searchParams);

// add paramiters
myurl.searchParams.append("abc", "123");
console.log(myurl.searchParams);

// loop through params
myurl.searchParams.forEach((name, val) => console.log(`${name} : ${val}`));