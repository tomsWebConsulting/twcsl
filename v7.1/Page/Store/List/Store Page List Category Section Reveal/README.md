# Store Page List Category Section Reveal

### [License][1]

### Synopsis

Reveal Store page list sections based on category.

### Version

 * 0.4.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes
  
#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Page Section First Blank Hide][4]

---

## Install

* Install [Page Section First Blank Hide][5]. After you install Page Section
  First Blank Hide be sure to continue on with the rest of the steps.
  
* Add code from file **[store page list category section reveal.html][6]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Refer to [Per-page code injection][7] for details.
  
* In the store page add a section. Set the section up as desired. To reveal a
  section for a category, set the **ANCHOR LINK name** using the following
  format.
  
  ```
  text
  twc-splcsr-[ enter a dash seperated list of category url slugs here replacing square brackets ]
  ```
  
  An example. Let's say you have the following store categories set up.
  
  * red
  
  * green
  
    * cyan
  
  * blue
  
  The ANCHOR LINK name would be **twc-splcsr-green-cyan**.
  
  You can have a default page section revealed for category pages that don't
  have their own section defined. Use the ANCHOR LINK name of
  **twc-splcsr-default**

## Note

The code has a downside in that it is loading page sections that will not be
displayed.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-08-11**

  * restructured code to use section ANCHOR LINK name to trigger reveal
  * checked v7.1 Products V2 compatibility
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.4.0
  
* **2023-09-14**

  * support for multiple categories using a single section
  * bumped version to 0.3.0
  
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
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Page%20Section%20First%20Blank%20Hide
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Page%20Section%20First%20Blank%20Hide#page-section-first-blank-hide
[6]: store%20page%20list%20category%20section%20reveal.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
