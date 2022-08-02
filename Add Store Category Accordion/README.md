# Add Store Category Accordion

### Version 0.2d1

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Unknown

---

## Install

* Add code from
  [Add Category Attribute to a Store Category Page](https://github.com/tomsWebConsulting/twcsl/tree/main/Add%20Category%20Attribute%20to%20a%20Store%20Category%20Page).
  
* Add code from file
  **[add store category accordion.html](add%20store%20category%20accordion.html#L1)**
  to Store Settings > Advanced > Page Header Code Injection for the store page.

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

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-07-11**

  * fix syntax errors
  * bumped version to 0.2d1
  
* **2021-07-10**

  * support v7.1
  * bumped version to 0.2d0
  
* **2021-05-20**

  * initial version
