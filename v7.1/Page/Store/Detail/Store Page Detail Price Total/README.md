# Store Page Detail Price Total

### [License][99]

### Synopsis

Total price times quantity on Store detail page.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Price Change][6]

---

## Install

* Install **[Store Page Price Change][16]**. After you install the code be sure
  to continue on with the rest of the steps.
  
* Install code from **[Store Page Detail Price Force Mutation on Quantity
  Change][8]**. After you install the code be sure to continue on with the rest
  of the steps.
  
* Options

  * Page Specific
  
    * Add code from file **[store product detail price total.html][9]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Please see [per-page code injection][9].
      
  * Site-wide
  
    * Add code from file **[store product detail price total.html][9]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][10].
      
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```
          // store page detail price total
          
          "/\\d+(?:,\\d{3})*(?:\\.\\d{2})?/" : "twcSpdpt",
          
          "/\\d(?=(?:\\d{3})+(?!\\d))/g" : "$&,",
    ```

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2024-10-05**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.3.0
  
* **2022-01-31**

  * updated for compatibility with Store Price Change v0.3d8
  * bumped version to 0.2d2
  
* **2022-01-29**

  * do not total on out of stock items
  * bumped version to 0.2d1
  
* **2021-09-29**

  * updated to work with newer version of store price change
  * bumped version to 0.2d0
  
* **2021-08-30**

  * updated references to code which this code depends on
  * bumped version to 0.1d1
  
* **2021-08-22**

  * initial version

[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[16]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Detail/Store%20Page%20Price%20Change#store%20page%20price%20change
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Detail/Store%20Page%20Price%20Change#store%20page%20price%20change#store-page-price-change
[8]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Price%20Force%20Mutation%20on%20Quantity%20Change
[9]: store%20page%20detail%20price%20total.html#L1
[10]: https://toms-web-consulting-demos.squarespace.com/store/p/spring-pickle-mix?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
