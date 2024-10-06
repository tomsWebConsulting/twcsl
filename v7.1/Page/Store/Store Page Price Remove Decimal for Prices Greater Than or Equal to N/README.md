# Store Page Price Remove Decimal for Prices Greater Than or Equal to N

### [License][1]

### Synopsis

Remove decimal for prices greater than equal to n on Store page.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Price Change][2]

---

## Install

* Install **[Store Page Price Change][3]**. After you install the code be sure
  to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Add code from file **[store product price remove decimal for prices
      greater than or equal to n.html][4]** to Store Settings > Advanced >
      Page Header Code Injection for the store page. Please see [per-page code
      injection][5].
      
  * Site-wide
  
    * Add code from file **[store product price remove decimal for prices
      greater than or equal to n.html][4]** to Website > Pages > Website Tools >
      Code Injection > FOOTER. Please see [Add code to code injection][6].
      
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```json
          // store page detail price total
          
          "/(\\d+(?:,\\d{3})*)(?:\\.\\d{2})?/" : "twcSpprdfpgtoetn",
    ```

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2024-10-05**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.2.0
  
* **2022-01-31**
  
  * updated for compatibility with Store Price Change v0.3d8
  * bumped version to 0.1d1
  
* **2021-09-28**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store%20price%20change
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store%20price%20change#store-page-price-change
[4]: store%page%20price%20remove%20decimal%20for%20prices%20greater%20than%20or%20equal%20to%20n.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation