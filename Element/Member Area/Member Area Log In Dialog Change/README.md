# Member Area Log In Dialog Change

### [License][1]

### Synopsis

Alter member area sign up and in dialogs.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add code from file **[member area log in dialog change.html][5]** to
  Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
  code to code injection][6]. Read the code for any instructions within.

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
  * twc-malidc-sign-up-join
  * twc-malidc-sign-up-join-text
  * twc-malidc-sign-up-password
  * twc-malidc-sign-up-password-confirm
  * twc-malidc
  * twc-malidc-create
  * twc-malidc-email
  * twc-malidc-password
  * twc-malidc-password-reset

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage, becuase of future SS changes, but I think my method will
break at a slower rate. Also be aware that SS is doing some dynamic class
add/remove behaviors based on elements being active/inactive. I know of no easy
way to provide more semantic classes for these cases.

## Callback Example

You can create a [callback][7] function to customize the processing of the
member area log in dialog.

Your callback must accept 2 parameters :

  * dcmnt ( document )
  
  * dialogType ( string )
  
    The parameter value will be one of the following.
    
    * password-reset
    
    * sign-in
    
    * sign-up
    
    * sign-up-join
    
```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc malidc sub-module
  
  twc.malidc = ( ( self ) => self ) ( twc.malidc || { } );
  
  // initialize twc malidc callbacks sub-module
  
  twc.malidc.callbacks = ( ( self ) => {
  
    const callback = ( dcmnt, dialogType ) => {
    
      console.log ( 'malidc log dcmnt : ', dcmnt );
      
      console.log ( 'malidc log dialogType : ', dialogType );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.malidc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-03-27**

  * removed dependency on english language text to determine dialog type
  * added twc-malidc-password-reset class
  * added password reset dialog type
  * bumped version to 0.4.0
  
* **2024-09-12**

  * rework code to use JavaScript Module Patterns for twc, twc.malidc, and
    twc.malidc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.3.0
  
* **2024-06-26**

  * wrap code in IIFE to keep code out of global space
  * bumped version to 0.2.1
  
* **2024-06-26**

  * support for sign up join
  * support v7.0
  * removed dependency on jQuery
  * bumped version to 0.2.0
  
* **2023-08-16**

  * fix for code not running after apparent changes by Squarespace
  * bumped version to 0.1.2
  
* **2023-04-27**

  * fix for code picking up CSS from other code similar to this code
  * bumped version to 0.1.1
  
* **2023-04-18**

  * initial version

**All trademarks are property of their respective owners.**

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[5]: member%20area%20log%20in%20dialog%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
