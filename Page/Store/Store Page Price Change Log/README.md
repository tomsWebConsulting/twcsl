# Store Page Price Change Log

### [License][1]

### Synopsis

Log store page price changes.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Five][3], [Montauk template family][4])

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [Store Page Price Change][5]. After you install it be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want only one Page to have this effect.
    
    * Add code from file **[store page price change log.html][6]** to
      Store Settings > Advanced > Page Header Code Injection for the Store Page.
      Refer to [Per-page code injection][7] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[store page price change log.html][6]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][8] for details.
      
* Add the following to searchReplaceText in the Store Page price change code per
  that codes instructions.
  
  ```JavaScript
          // log store page price changes
          
          'log' : 'twcSppcl',
          
    ```

## Note

This code is more of a diagnostic or example code.

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2021-05-08**

  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  -->
* **2024-10-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[4]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[6]: store%20page%20price%20change%20log.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
