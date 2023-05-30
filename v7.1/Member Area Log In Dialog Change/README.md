# Member Area Log In Dialog Change

### [License][1]
    
### Version 0.1.1

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Add code from file **[member area log in dialog change.html][5]** to
  Settings > Developer Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][6]. Read the code for any instructions within.

## Classes

Squarespace includes virtually no semantic class names for the log in dialog.
This code attempts to add some useful classes.

  * twc-malidc-name
  * twc-malidc-name-first
  * twc-malidc-name-last
  * twc-malidc-not-you
  * twc-malidc-sign-in
  * twc-malidc-sign-in-again-text
  * twc-malidc-sign-in-email-text
  * twc-malidc-sign-in-password
  * twc-malidc-sign-up
  * twc-malidc-sign-up-password
  * twc-malidc-sign-up-password-confirm
  * twc-malidc
  * twc-malidc-create
  * twc-malidc-email
  * twc-malidc-password
  * twc-malidc-request-reset

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage, becuase of future SS changes, but I think my method will
break at a slower rate. Also be aware that SS is doing some dynamic class
add/remove behaviors based on elements being active/inactive. I know of no easy
way to provide more semantic classes for these cases.

## accountFrameCallback Example

You can optionally create a [callback][7] function to further customize the
processing of the sign in dialog.

Following is example code. Place your callback before the member area log in
dialog change code.

```html
<script>

  const myNamedFunction = ( dcmnt, logInType ) => {
  
    console.log ( dcmnt );
    
    console.log ( logInType );
    
    }
    
  </script>

```

Then in the member area log in dialog change code set accountFrameCallback to
the following.

```html
      accountFrameCallback : myNamedFunction
```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2023-04-27**

  * fix for code picking up CSS from other code similar to this code
  * bumped version to 0.1.1
  
* **2023-04-18**

  * initial version

**All trademarks are property of their respective owners.**

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: member%20area%20log%20in%20dialog%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
