# Store Category Section Reveal

### [License][1]

### Synopsis

Store category page custom headers.

### Version

 * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store category section reveal.html][6]** to Store
  Settings > Advanced > Page Header Code Injection for the store page.
  
* In the store page add a page section. Set the section up as desired. Add a 
  code block at the top of the section with the following code.
  
  ```html
  <x-twc-scsr data-categories="[enter categories here between double quotes replacing square brackets]"></x-twc-scsr>
  ```
  
  Repeat this pattern for as many categories as desired. Categories is a
  delimted ( > ) list of categories. An example. Let's say you have the
  following store categories set up.
  
  * red
  
  * green
  
    * cyan
  
  * blue
  
  To reveal a page section for the cyan category, the data-categories value
  above would be **green > cyan**.
  
  You can have a default section revealed when no section with a category is
  defined. This default section will show on all non-category pages or category
  pages with no corresponding page section defined. To have a default section
  add a code block at the top of the section with the following code.
  
  ```html
  <x-twc-scsr data-categories="default"></x-twc-scsr>
  ```

## Note

This code has a downside in that it is loading page sections that will not be
displayed.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-06-24**

  * support for nested categories
  * bumped version to 0.2.0
  
* **2022-09-18**

  * replace twcsl getFirstPageSection method with getPageSectionNth
  * bumped version to 0.1.1
  
* **2021-08-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20category%20section%20reveal.html#L1
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
