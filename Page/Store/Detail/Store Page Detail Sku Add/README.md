# Store Page Detail Sku Add

### [License][1]

### Synopsis

Add sku to the description of store detail pages.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatibility

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Page Detail Variant Selected Callback][4]

---

## Install

* Install [Store Page Detail Variant Selected Callback][4]. After you install
  the code be sure to continue on with the rest of the steps.
  
* Add code from file **[store page detail sku add.html][6]** to Store Settings >
  Advanced > Page Header Code Injection for the store page before the
  **store page detail variant selected callback** code. Please see [per-page
  code injection][7]. Read the code for any instructions within.
  
* In the **store page detail variant selected callback** code add the
  **twcSpdsa** callback to the code. For example.
  
  ```javaScript
      // callback : [enter function name here replacing square brackets]
      
      callback : twcSpdsa
  ```
  
* In each of your product descriptions add the following text where you want the
  sku to appear.
  
  ```text
  [twc-spdsa-sku]
  ```

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2023-10-20**

  * set sku to empty string when no variant is selected
  * bumped version to 0.2.0
  -->
* **2024-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Detail/Store%20Page%20Detail%20Variant%20Selected%20Callback#store-page-detail-variant-selected-callback
[6]: store%20page%20detail%20sku%20add.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
