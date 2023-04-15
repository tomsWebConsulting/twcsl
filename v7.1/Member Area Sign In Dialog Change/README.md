# Member Area Sign In Dialog Change

### [License][1]
    
### Version 0.4.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Add code from file **[member area sign in dialog change.html][5]** to
  Settings > Advanced > Code Injection > FOOTER. Please see [Add code to code
  injection][6]. Read the code for any instructions within.

## Note

Squarespace includes virtually no semantic class names for the sign in dialog.
This code attempts to add some useful classes.

  * twc-masidc-create
  * twc-masidc-email
  * twc-masidc-not-you
  * twc-masidc-password
  * twc-masidc-request-reset
  * twc-masidc-sign-in-again-text
  * twc-masidc-sign-in-email-text
  * twc-masidc-title

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage but I think my method will break at a slower rate. Also
be aware that SS is doing some dynamic class add/remove behaviors based on
elements being active/inactive. I know of no easy way to provide more semantic
classes for these cases.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-04-15**

  * restructured the code to reduce some nesting
  * add classes to some elements for easier CSS creation
  * fix for another case where code not running when a page is loaded
  * bumped version to 0.4.0

* **2023-04-12**

  * add variable for adding a script tag to the dialog
  * fix for code not running when the dialog is on screen and the page is
    reloaded
  * bumped version to 0.3.0

* **2023-04-06**

  * fix for changes SS made that broke the code, no feature changes
  * bumped version to 0.2.1

* **2022-12-06**

  * add variable for CSS customization
  * fix for changes SS made that broke the code
  * bumped version to 0.2.0

* **2021-09-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: member%20area%20sign%20in%20dialog%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
