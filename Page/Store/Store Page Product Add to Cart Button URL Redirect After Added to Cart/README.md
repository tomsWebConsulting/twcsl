# Store Page Product Add to Cart Button URL Redirect After Added to Cart

### [License][1]

### Synopsis

Redirect to URL after Add to Cart button clicked and product has been added to
cart.

### Version

  * 0.3.0

#### Squarespace Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Store Page.
    
    * Add code from file **[store page product add to cart button url redirect
      after added to cart options.html][4]** to Page Settings > Advanced > Page
      Header Code Injection for the Store Page. Read the code for any
      instructions within.
      
    * Add code from file **[store page product add to cart button url redirect
      after added to cart.html][6]** to Page Settings > Advanced > Page Header
      Code Injection for the Store Page.
      
    * Refer to [Inject code to a specific page][5] for details.
    
  * Site-wide
  
    Use this option when you want to have this effect on all Store Pages.
    
    * Add code from file **[store page product add to cart button url redirect
      after added to cart options.html][4]**  to Website > Pages > Custom Code >
      Code Injection > FOOTER. Read the code for any instructions within.
      
    * Add code from file **[store page product add to cart button url redirect
      after added to cart.html][6]** to Website > Pages > Custom Code >
      Code Injection > FOOTER.
      
    * Refer to [Add code to the header and footer][7] for details.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-06-26**

  * checked v7.1 Products V2 compatibility
  * moved options out of main code into embedded JSON script tag
  * bumped version to 0.3.0
  
* **2025-04-28**

  * added support for v7.1 list add to cart buttons
  * remove dependency on twcsl
  * remove dependency on jQuery
  * bumped version to 0.2.0
  
* **2021-06-14**

  * reworked the autoClick part of the code to work in a wider variety of
    situations
  * code should now work on any page where there are atcb
  * bumped version to 0.1d2
  
* **2021-05-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20product%20add%20to%20cart%20button%20url%20redirect%20after%20added%20to%20cart%20options.html#L1
[6]: store%20page%20product%20add%20to%20cart%20button%20url%20redirect%20after%20added%20to%20cart.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
