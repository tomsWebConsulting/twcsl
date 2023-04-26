# Customer Account Panel Change

### [License][1]
    
### Version 0.2.0

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
  
* Add code from file **[customer account panel change.html][5]** to Settings >
  Advanced > Code Injection > FOOTER. Please see [Add code to code
  injection][6]. Read the code for any instructions within.

## Note

Squarespace includes virtually no semantic class names for the Customer Account
Panel element. This code attempts to add some useful classes.

  * twc-capc-addresses
  * twc-capc-close
  * twc-capc-greeting
  * twc-capc-greeting-sign-out
  * twc-capc-orders
  * twc-capc-profile
  * twc-capc-sign-out
  * twc-capc-title
  * twc-capc-title-close

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage but I think my method will break at a slower rate.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-04-22**

  * restructured the code to reduce some nesting
  * bumped version to 0.2.0
  
* **2023-04-13**

  * initial version

**All trademarks are property of their respective owners.**

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: customer%20account%20panel%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
