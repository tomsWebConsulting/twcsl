# Store Category Section Reveal

### Version 0.1.1

#### SS Version 7.1

#### Fluid Engine Compatible : Yes

---

## Install

* Install [twcsl][1]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store category section reveal.html][2]** to Store
  Settings > Advanced > Page Header Code Injection for the store page.
  
* In the store page add a page section. Set the section up as desired. Add a 
  code block at the top of the section with the following code.
  
  ```html
  <div data-category="[enter category here between double quotes replacing square brackets]"></div>
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

Please consider [making a donation][3].

## Changes

* **2022-09-18**

  * replace twcsl getFirstPageSection method with getPageSectionNth
  * bumped version to 0.1.1
  
* **2021-08-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl#install-options
[2]: store%20category%20section%20reveal.html#L1
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
