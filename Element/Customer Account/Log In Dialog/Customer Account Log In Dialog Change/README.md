# Customer Account Log In Dialog Change

### [License][1]

### Synopsis

Alter customer account sign up and in dialogs.

### Version

  * 0.8.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add code from file **[customer account log in dialog change.html][4]** to
  Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
  code injection][5] for details.
  
* Read the code for any instructions within.

## Classes

Squarespace includes virtually no semantic class names for the log in dialog.
This code attempts to add some useful classes.

  * twc-calidc
  * twc-calidc-account-verify-text
  * twc-calidc-email
  * twc-calidc-emails-updates-text
  * twc-calidc-error-text
  * twc-calidc-exclusive-context-text
  * twc-calidc-name
  * twc-calidc-name-first
  * twc-calidc-name-last
  * twc-calidc-not-you
  * twc-calidc-password
  * twc-calidc-password-confirm
  * twc-calidc-password-reset
  * twc-calidc-sign-in
  * twc-calidc-sign-in-link
  * twc-calidc-sign-in-member-site
  * twc-calidc-sign-up
  * twc-calidc-sign-up-member-site
  * twc-calidc-unlock-exclusive-content-text
  * twc-calidc-with-email-text

If you use Squarespace dynamically generated class names, the ones that look
like a string of gibberish, your code will most likely break pretty quickly. My
code is not immune to breakage, becuase of future Squarespace changes, but I
think my method will break at a slower rate. Also be aware that Squarespace is
doing some dynamic class add/remove behaviors based on elements being
active/inactive. I know of no easy way to provide more semantic classes for
these cases.

## Callback Example

You can create a [callback][6] function to customize the processing of the
member area log in dialog.

Your callback must accept 2 parameters :

  * dcmnt ( document )
  
  * dialogType ( string )
  
    The parameter value will be one of the following.
    
    * password-reset
    
    * sign-in
    
    * sign-in-member-site
    
    * sign-up
    
    * sign-up-member-site
    
```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc calidc sub-module
  
  twc.calidc = ( ( self ) => self ) ( twc.calidc || { } );
  
  // initialize twc calidc callbacks sub-module
  
  twc.calidc.callbacks = ( ( self ) => {
  
    const callback = ( dcmnt, dialogType ) => {
    
      console.log ( 'calidc log dcmnt : ', dcmnt );
      
      console.log ( 'calidc log dialogType : ', dialogType );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.calidc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2025-06-23**

  * added [ ppn ] tag feature
  * bumped version to 0.8.0
  
* **2025-06-22**

  * reworked class names to reduce some of the repeated information like sign-in
    and sign-up in a bunch of names
  * added class names to contexts not covered by previous version
  * bumped version to 0.7.0
  
* **2025-04-23**

  * made sign up join price plan names easier to use
  * added support for Japanese language
  * change class name twc-malidc-sign-up-join-text to
    twc-malidc-sign-up-join-unlock-exclusive-content-text
  * added class name twc-malidc-sign-up-join-emails-updates-text
  * bumped version to 0.6.0
  
* **2025-04-13**

  * added password reset title
  * fixed some missing , and ;
  * fixed bug where twc-malidc-email wasn't being applied sometimes
  * bumped version to 0.5.0
  
* **2025-03-27**

  * added sign up join title change setting for member site plan names
  * removed dependency on english language text to determine dialog type
  * added twc-malidc-password-reset class
  * added password reset dialog type
  * bumped version to 0.4.0
  
* **2024-09-12**

  * reworked code to use JavaScript Module Patterns for twc, twc.malidc, and
    twc.malidc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.3.0
  
* **2024-06-26**

  * wrapped code in IIFE to keep code out of global space
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

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: customer%20account%20log%20in%20dialog%20change.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
