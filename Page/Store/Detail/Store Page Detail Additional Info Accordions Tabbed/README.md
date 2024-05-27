# Store Page Detail Additional Info Accordions Tabbed

### [License][1]

### Synopsis

Create rudimentary tabbed accordions with button and accordion blocks.

### Version

 * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store product detail additional info accordions
  tabbed.html][6]** to Store Settings > Advanced > Page Header Code Injection
  for the store page. Please see [per-page code injection][7].
  
* In Additional Info for a product add at least two button blocks. Set the LINK
  for each button block to **#twc-spdaiat**. I suggest a horizontal orientation
  for the buttons as that is the easiest layout. You can do other layouts but
  the default CSS isn't designed to accomodate all designs. You'd need to add
  your own custom CSS.
  
* Add a corresponding number of accordion blocks. Set the first line of the
  first item description of each accordion block to **twc-spdaiat**.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2022-09-18**

  * replace twcsl getFirstPageSection method with getPageSectionNth
  * bumped version to 0.1.1
  -->
* **2023-10-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20detail%20additional%20info%20accordions%20tabbed.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-additional-info-accordions-tabbed/p/country-feast-set?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
