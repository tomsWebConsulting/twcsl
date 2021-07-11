# Add Store Category Accordion

### Version 0.2d0

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d8/twcsl.js"></script>
```

Add code from
[Add Category Attribute to a Store Category Page](https://github.com/tomsWebConsulting/twcsl/tree/main/Add%20Category%20Attribute%20to%20a%20Store%20Category%20Page)
ignoring the first install step about jQuery and twcsl.

Add code from file **add store category accordion.html** to Store Settings >
Advanced > Page Header Code Injection for the store page.

## Example Use Case

### v7.0

​In the store page Intro area add a code block with the following code.

```html
<div category="[enter category here between double quotes]"></div>
```

After the code block add an image and text block. Repeat this pattern for all
categories. The category must match the category text as entered in the SS
interface.

### v7.1

​In the store page add a page section before the store page section. Add a code
block with the following code.

```html
<div category="[enter category here between double quotes]"></div>
```

After the code block add an image and text block. Repeat this pattern for all
categories. The category must match the category text as entered in the SS
interface.

## Changes

* **2021-07-10**
<br><br>
  * support v7.1
  * bumped version to 0.2d0
  <br><br>
* **2021-05-20**
<br><br>
  * initial version
