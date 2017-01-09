The 'this' Keyword in React
===========================

- [Implicit Binding](#impicit-binding)
- [Explicit Binding](#explicit-binding)
- [new Binding](#new-binding)
- [window Binding](#window-binding)

### Where is this function invoked?

```js
// function is defined here
sayName(name) {
	console.log(`Hello ${name}`)
}

// function is invoked here
sayName('Anita');
```


### Implicit Binding
Left of the dot at call time

```js
// Example 1
const me = {
	name: 'Anita',
	age: 29,
	sayName: () => {
		console.log(this.name);
	}
};

// 'this' references 'me' - it is left of the dot
me.sayName();


// Example 2
sayNameMixin(obj) => {
	obj.sayName = () => {
		console.log(this.name);
	}
};

const me = {
	name: 'Anita',
	age: 29,
};

const you = {
	name: 'Joey',
	age: 28
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // 'Anita'
you.sayName();  // 'Joey'
```


### Explicit Binding
Call, apply, bind

```js
// Example 1
const stacey = {
	name: 'Stacey',
	age: 38
}

const sayName = (lang1, lang2, lang3) => {
	console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
}

const languages = ['JavaScript', 'Ruby', 'Python']

// 'this' is explicitly stated as the first argument
// funciton is immediately invoked
// *.call() - arguments passed in one by one
// *.apply() - arguments passed as an array
sayName.call(stacey, languages[0], languages[1], languages[2]);
sayName.apply(stacey, languages);

// same as *.call() but returns a function that can be invoked later
sayName.bind(stacey, languages[0], languages[2]);

```


### new Binding
```js
const Animal = (color, name type)  => {
	// this = {}
	this.color = color;
	this.name = name;
	this.type = type;
}

const zebra = new Animal('black and white', 'Zorro', 'Zebra');
```


### window Binding
```js
const sayAge = () => {
	// If 'use strict' is added, JS will not default 'this' to window
	console.log(this.age)
}

const me = {
	age: 13
};


// if invoke function without left of dot
// defaults to the window object
sayAge(); // undefined
window.age = me.age;
sayAge(); // 13

```
