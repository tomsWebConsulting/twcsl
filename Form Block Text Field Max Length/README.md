# Form Block Text Field Max Length

### [License][1]

### Synopsis

Limit the number of characters allowed in form fields.

### Version 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Add the following to Website > Pages ( v7.0 only ) > Website Tools > Code
  Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Page Specific

  * Add code from file **[form block text field max length.html][5]** to Page
    Settings > Advanced > Page Header Code Injection for the page. Please see
    [per-page code injection][6].
    
* Site-wide

  * Add code from file **[form block text field max length.html][5]** to
    Website > Pages ( v7.0 only ) > Website Tools > Code Injection > FOOTER.
    
* Read the code for any instructions within.

* Add a form block to your page and set up as desired.
  
  For each text or text area field where you want a max character limit do the
  following :
  
  Edit the field.
  
  At the beginning of the description field enter
  **twc-fbtfml : [enter max length number here replacing square brackets]**. An
  example.
  
  ```
  twc-fbtfml : 10
  ```
  
  If you want to have description text for the field that the user will see
  enter it after the twc-fbtfml tag. An example.
  
  ```
  twc-fbtfml : 10
  My description text that helps the user.
  ```

## Note

Squarespace is currently in the process of updating form blocks. This code is
developed against forms in this transition state. I expect the code will soon
need a minor update to work with the finalized version of form blocks.

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

This effect is not active in SS Preview to test it use [private browsing][6].

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-05-11**

  * clean up the aria-label on the description as well
  * bumped version to 0.2.0
  
* **2022-05-11**

  * initial version

**All trademarks are property of their respective owners.**

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: form%20block%20text%20field%20max%20length.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
