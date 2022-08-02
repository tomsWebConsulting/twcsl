# Store Category Section Reveal

### Version 0.1d0

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Install

* Install
  [twcsl](https://github.com/tomsWebConsulting/twcsl#install-options).
  
* Add code from file
  **[store category section reveal.html](store%20category%20section%20reveal.html#L1)**
  to Store Settings > Advanced > Page Header Code Injection for the store page.
  
​* In the store page add a page section. Set the section up as desired. Add a 
  code block at the top of the section with the following code.
  
  ```html
  <div data-category="[enter category here between double quotes]"></div>
  ```
  
  Repeat this pattern for as many categories as desired. The category must match
  the category text as entered in the SS interface.
  
  You can have a default section revealed when no section with a category is
  defined. This default section will show on all non-category pages or category
  pages with no corresponding page section defined. To have a default section
  add a code block at the top of the section with the following code.
  
  ```html
  <div data-category="default"></div>
  ```

## Note

This code has a downside in that it is loading page sections that will not be
displayed.

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-08-31**

  * initial version
