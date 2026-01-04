# Form Text Field Max Length Data

### [License][1]

### Synopsis

Gather product ids and skus for use with form text field max length effects.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Cart Page Observe Changes][4]

---

## Install

* Install [Cart Page Observe Changes][5]. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Add the following code to Website > Pages > Custom Code > Code Injection >
      FOOTER.
      
      ```html
      <!-- begin TWC Form Text Field Max Length Data -->
      
        <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
        
        <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@44bb419202ee883221805f65e9ee7295eb90beaf/Page/Cart/Cart%20Page%20Observe%20Changes/cart%20page%20observe%20changes.min.js" type="module"></script>
        
        <!-- end TWC Form Text Field Max Length Data -->
        
      ```
      
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Add code from file **[form text field max length data.html][8]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
  * Refer to [Add code to code injection][9] for details.

## Notes

This code is a base for other effects.

This code makes calls to the json version of products for information that is
not normally available.

This code does not work on the Checkout page. It is a Squarespace security
feature that no code can alter the checkout page

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2026-01-01**

  * updated to work with Cart Page Observe Changes v0.2.0
  * bumped version to 0.3.0
  -->
* **2026-01-03**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: form%20text%20field%20max%20length%20data.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
