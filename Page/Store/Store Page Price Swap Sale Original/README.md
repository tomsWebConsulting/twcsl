# Store Page Price Swap Sale Original

### [License][1]

### Synopsis

Swap sale and original price on Store page.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Price Change][2]

---

## Install

* Install code from **[Store Page Price Change][3]**. After you install the code
  be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page price swap sale original.html][4]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page price swap sale original.html][4]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Refer to [Add
      code to code injection][6] for details.
      
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```
      // store page price swap sale original
      
      "" : "twcSppsso",
    ```

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2024-10-05**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.2.0
  
* **2022-05-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[4]: store%20page%20price%20swap%20sale%20original.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
