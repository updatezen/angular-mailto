angular-mailto
==============

A simple service that generates a mailto: string that can be used in an `<a href="">`.


Installation
------------

Through bower:

	bower install angular-mailto --save

Usage
-----

Include `angular-mailto.js` in your application and add the module `uz.mailto` as a dependency to your app module

```javascript
var myapp = angular.module('myapp', ['uz.mailto']);
```

### The Mailto service

The `Mailto` service can be used to generate a `mailto:` string:

```javascript
var recepient = "stefan@dontgohere.com";
var options = {
	cc: "cc.this.person@dontgohere.com",
	bcc: "bcc.this.person@dontgohere.com",
	subject: "Angular-mailto Email",
	body: "Hi Stefan,\nThis is an email pre-populated from angular-mailto."
};

var href = Mailto.url(recepient, options);
```

you can then use this inside an `<a>` tag:

```html
<a href="{{href}}">email me</a>
```

*	All `options` are optional.
*	For linebreaks / newlines in the email body, use the `\n` character.

License
-------

Released under the terms of MIT License. See LICENSE.
