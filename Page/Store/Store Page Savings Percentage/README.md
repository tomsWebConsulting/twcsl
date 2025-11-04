# Store Page Savings Percentage

### [License][1]

### Synopsis

Add savings percent to products on sale.

### Version

  * 0.1.1

#### SS Versions

  * 7.1, 7.0

#### v7.1 Products V2 Compatible

  * Yes

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Page Price Change][4]

#### v7.1 Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [Store Page Price Change][5]. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page savings percentage.html][6]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page savings percentage.html][6]** to
      Website > Pages > Custom Code > Custom Code > Code Injection > FOOTER.
      Refer to [Add code to code injection][8] for details.
      
* Read the code for any instructions within.

* In the **store page price change script** code, installed earlier, add the
following to searchReplaceText, per that code instructions.

```json
        "savings percentage" : "twcSpsp",
```

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-07-04**

  * updated to work with v7.1 Products V2
  * bumped version to 0.1.1
  
* **2025-05-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[6]: store%20page%20savings%20percentage.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://toms-web-consulting-demos.squarespace.com/store-page-savings-percentage?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
