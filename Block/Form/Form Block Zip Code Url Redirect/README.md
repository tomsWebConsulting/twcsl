# Form Block Zip Code Url Redirect

### [License][1]

### Synopsis

Redirect a form block with a single Text field labeled Zip Code to a URL.

### Version

  * 0.1.1

#### Squarespace Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Wrapper Observe Changes][4]

---

## Install

* Install **[Form Block Wrapper Observe Changes][5]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Page.
    
    * Add code from file **[form block zip code url redirect.html][6]** to Page
      Settings > Advanced > Page Header Code Injection for the Page. Read the
      code for any instructions within. Refer to [Inject code to a specific
      page][7] for details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Pages.
    
    * Add code from file **[form block zip code url redirect.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Read the code for
      any instructions within. Refer to [Add code to the header and footer][8]
      for details.
      
* Add or edit a form block.

* In the **Form Block Wrapper Observe Changes** code add **twcFbzcur** to
  **added** per the **Form Block Wrapper Observe Changes** code install steps.
  
* In addition to Label field as described in the **Form Block Wrapper Observe
  Changes** code, add a Text field with a label of Zip Code.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-05-14**

  * fixed url undefined error
  * bumped version to 0.1.1
  
* **2025-03-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[6]: form%20block%20zip%20code%20url%20redirect.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
