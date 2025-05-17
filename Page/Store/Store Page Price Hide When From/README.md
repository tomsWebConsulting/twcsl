# Store Page Price Hide When From

### [License][1]

### Synopsis

Hide price when it contains from on Store page.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Avenue][2], [Bedford template family][3], [Brine template family][4], [Pacific template family][5])

#### 7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Price Change][6]

---

## Install

* Install [Store Page Price Change][7]. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page price hide when from options.html][8]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Read the code for any instructions within.
      
    * Add code from file **[store page price hide when from.html][9]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      
    * Refer to [Per-page code injection][10] for details.
    
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page price hide when from options.html][8]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
      for any instructions within.
      
    * Add code from file **[store page price hide when from.html][9]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][11] for details.
    
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```
      // store page price hide when from
      
      "from" : "twcSpphwf",
    ```

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-05-18**

  * added options to control which elements the effect is applied
  * bumped version to 0.4.0
  
* **2024-10-04**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.3.0
  
* **2024-06-19**

  * remove jQuery dependency
  * support some v7.0 templates
  * bumped version to 0.2.0
  
* **2022-01-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815498-Avenue-template
[3]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[4]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[5]: https://support.squarespace.com/hc/en-us/articles/206545347
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[7]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[8]: store%20page%20price%20hide%20when%20from%20options.html#L1
[9]: store%20page%20price%20hide%20when%20from.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
