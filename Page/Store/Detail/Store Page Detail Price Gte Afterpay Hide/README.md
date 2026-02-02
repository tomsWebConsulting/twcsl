# Store Page Detail Price Gte Afterpay Hide

### [License][1]

### Synopsis

Hide afterpay when price is greater than or equal price.

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

* Install **[Store Page Price Change][6]**. After you install the code be sure
  to continue on with the rest of the steps.
  
* Add the following to searchReplaceText in the Store Page price change code per
  that codes instructions.
  
  ```
      // store page detail price gte afterpay hide
      
      "/$.+/" : "twcSpdpgah",
    ```
    
* Options

  * Page Specific
  
    Use this option when you want only one Page to have this effect.
    
    * Add code from file **[store page detail price gte afterpay hide.html][7]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Per-page code injection][8] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[store page detail price gte afterpay hide.html][7]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Refer to
      [Add code to code injection][9] for details.

## Note

If your currency symbol is not dollar sign then use the one set for your site.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-10-04**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.2.0
  
* **2024-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[4]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[7]: store%20page%20detail%20price%20gte%20afterpay%20hide.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
