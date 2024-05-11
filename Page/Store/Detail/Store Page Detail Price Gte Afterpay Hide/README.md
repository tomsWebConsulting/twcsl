# Store Page Detail Price Gte Afterpay Hide

### [License][99]

### Synopsis

Hide afterpay when price is greater than or equal price.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][1], [Five][2], [Montauk template family][3])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][12] that supports [JavaScript][13].
  
  * [Store Price Change][14]

---

## Install

* Install **[Store Price Change][4]**. After you install twcsl be sure to
  continue on with the rest of the steps.
  
* In the store price change code after the searchReplaceText example lines add
  the following example code.
  
  ```javascript
        '/$.+/' : twcSpdpgah, // store page detail price gte afterpay hide
  ```
  
* Add code from **[store page detail price gte afterpay hide.html][5]** to
  Store Settings > Advanced > Page Header Code Injection for the store page
  **before** the **store price change** code. Please see [per-page code
  injection][8].  Read the code for any instructions within.

## Note

If your currency symbol is not dollar sign then use the one set for your site.

## Make a Donation

Please consider [making a donation][6].

## Changes

<!-- * **2022-10-10**

  * check text includes instead of ==
  * bumped version to 0.1.1
  -->
* **2024-05-11**

  * initial version

[1]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[2]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[3]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[12]: https://www.squarespace.com/pricing
[13]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Price%20Change#store-price-change
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[5]: store%20page%20detail%20price%20gte%20afterpay%20hide.html#L1
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
