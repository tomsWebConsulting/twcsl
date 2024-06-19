# Store Page Price Hide When From

### [License][1]

### Synopsis

Hide price when it contain from on Store page.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Avenue][2], [Bedford template family][3], [Brine template family][4], [Pacific template family][5])

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Price Change][6]

---

## Install

* Install [Store Price Change][6]. After you install the code be sure to
  continue on with the rest of the steps.
  
* In the **store price change** code after the searchReplaceText example lines
  add the following code.
  
  ```javascript
          'from' : twcSpphwf, // store page price hide when from
  ```
  
* Add code from file **[store page price hide when from.html][7]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][8].

## Changes

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
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Price%20Change#store-price-change
[7]: store%20page%20price%20hide%20when%20from.html#L1
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
