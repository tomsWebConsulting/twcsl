# Store Page Price Hide When From

### [License][1]

### Synopsis

Hide price when it contains from on Store page.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Avenue][2], [Bedford template family][3], [Brine template family][4], [Pacific template family][5])

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Price Change][16]

---

## Install

* Install [Store Price Change][6]. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Add code from file **[store page price hide when from.html][7]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Please see [per-page code injection][8].
      
  * Site-wide
  
    * Add code from file **[store page price hide when from.html][7]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][9].
      
* Add the following to searchReplaceText in the store page price change code per
  that codes instructions.
  
  ```json
          // store page price hide when from
          
          "from" : "twcSpphwf",
    ```

## Make a Donation

Please consider [making a donation][10].

## Changes

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
[16]: https://github.com/tomsWebConsulting/twcsl/tree/main/Store$20Page%20Price%20Change
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Store$20Page%20Price%20Change#store-page-price-change
[7]: store%20page%20price%20hide%20when%20from.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
