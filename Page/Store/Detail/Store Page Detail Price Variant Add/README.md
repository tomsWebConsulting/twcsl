# Store Page Detail Price Variant Add

### [License][1]

### Synopsis

Add prices to Store page detail variant.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Five][3], [Montauk template family][4])

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Price Change][5]

---

## Install

* Install **[Store Page Price Change][6]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Add code from file **[store page detail price variant add.html][7]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Please see [per-page code injection][8]. Read the code for any
      instructions within.
      
  * Site-wide
  
    * Add code from file **[store page detail price variant add.html][7]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][9]. Read the code for any instructions within.
      
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```json
          // store page detail price variant add
          
          "[enter search text here between single quotes replacing square brackets]" : "twcSpphwf",
    ```
    
  The search text you enter needs to target the end of the price. For prices
  that end with a currency symbol, it is easy. For example if the currency is
  Euros then you enter **€** for search text. If the price ends with numbers
  then things get a bit trickier. You need to use a regular expression. For
  example **/(\\\d+(?:,\\\d{3})*)(\\\\.\\\d{2})?/**.

## Note

This code only works for one variant.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-10-05**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.2.0
  
* **2022-10-02**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[4]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[7]: store%20page%20detail%20price%20variant%20add.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
