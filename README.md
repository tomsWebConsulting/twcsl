# Tom's Web Consulting Squarespace Library

This is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) of code for adding
various effects to Squarespace v7.0 and v7.1 sites.

## General Layout Overview

* v7.0 and v7.1 effects

* v7.0 only effects

  * effects for all v7.0 templates
  
  * template specific effects
  
* v7.1 only effects

* twcsl

To find an effect browse the repository. Each effect has it's own version
number, code, read me, and etc.

**The rest of this document covers twcsl**.

# twcsl

Is a Javascript library of common properties and methods useful for building
higher level effects in Squarespace sites.

### Version 0.1d0

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d0/twcsl.js"></script>
```

## Example

You want to build an effect that does something when you are on a store category
product grid page. You can use twcsl to test if you are on such a page with the
following.

```javascript
if ( twcsl.storePage.hasCategory ) console.log ( 'has category' );
```

## Changes

<!-- * **2021-05-19**
<br><br>
  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  <br><br -->
* **2021-05-22**
<br><br>
  * initial version
