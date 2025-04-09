# Form Block Text Field Max Length

### [License][1]

### Synopsis

Limit the number of characters allowed in some form block fields.

### Version 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Wrapper Observe Changes][4]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install **[Form Block Wrapper Observe Changes][4]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[form block text field max length.html][5]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Please see
      [per-page code injection][6].
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[form block text field max length.html][5]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][7].
      
* Add or edit a form block on your page and set up as desired.
  
* For each text or text area field where you want a max character limit do the
  following.
  
  * Edit the field.
    
  * At the beginning of the description field enter **twc-fbtfml : [enter max
    length number here replacing square brackets]**. An example.
    
    ```text
    twc-fbtfml : 10
    ```
    
    If you want to have description text for the field that the user will see
    enter it after the twc-fbtfml tag. An example.
    
    ```text
    twc-fbtfml : 10
    My description text that helps the user.
    ```

## Note

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-04-09**

  * updated to work with Form Block Wrapper Observe Changes v0.4.0
  * remove dependency on jQuery
  * bumped version to 0.4.0
  
* **2024-04-28**

  * updated to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.3.0
  
* **2023-05-11**

  * clean up the aria-label on the description as well
  * bumped version to 0.2.0
  
* **2022-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[5]: form%20block%20text%20field%20max%20length.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://toms-web-consulting-demos.squarespace.com/form-block-text-field-max-length?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
