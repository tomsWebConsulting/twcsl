# Customer Account Panel Change

### [License][1]

### Synopsis

Make changes to the Customer Account panel that can't be achieved through the
Squarespace editor.

### Version 0.6.1

#### SS Versions

  * 7.1

  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add code from file **[customer account panel change.html][4]** to Website >
  Pages > Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][5]. Read the code for any instructions within.

## Classes

Squarespace includes virtually no semantic class names for the Customer Account
panel element. This code attempts to add some useful classes.

  * twc-capc-account-settings
  * twc-capc-addresses
  * twc-capc-close
  * twc-capc-greeting
  * twc-capc-greeting-sign-out
  * twc-capc-header
  * twc-capc-orders
  * twc-capc-pages
  * twc-capc-profile
  * twc-capc-search
  * twc-capc-sign-out
  * twc-capc-title

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage but I think my method will break at a slower rate.

## Callback Example

You can optionally create a [callback][6] function to further customize the
processing of customer account panel.

Following is example code.

```html
<script>

  var twc = ( ( self ) => { // initialize twc module
  
    return self;
    
    } ) ( twc || { } );
    
  twc.capc = ( ( self ) => { // initialize twc capc sub-module
  
    return self;
    
    } ) ( twc.capc || { } );
    
  // initialize twc capc callbacks sub-module
  
  twc.capc.callbacks = ( ( self ) => {
  
    const callback = ( dcmnt, logInType ) => {
    
      console.log ( dcmnt );
      
      console.log ( logInType );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.capc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2024-12-10**

  * fix for apparent change the prevented user CSS from working
  * bumped version to 0.6.1
  
* **2024-10-29**

  * add twc-capc-pages class
  * bumped version to 0.6.0
  
* **2024-09-13**

  * rework code to use JavaScript Module Patterns for twc, twc.capc, and
    twc.capc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.5.0
  
* **2024-07-08**

  * support multiple callbacks
  * bumped version to 0.4.0
  
* **2024-06-24**

  * support digital products panel
  * remove jQuery dependency
  * bumped version to 0.3.0
  
* **2024-06-20**

  * workaround for code not running
  * bumped version to 0.2.5
  
* **2023-08-16**

  * restore missing callback code functionality
  * bumped version to 0.2.4
  
* **2023-08-16**

  * changed twc-capc-title-close class to twc-capc-header
  * fix for code not running after apparent changes by Squarespace
  * bumped version to 0.2.3
  
* **2023-05-06**

  * fix for code not running is some circumstances
  * bumped version to 0.2.2
  
* **2023-04-27**

  * fix for code picking up CSS from other code similar to this code
  * bumped version to 0.2.1
  
* **2023-04-22**

  * restructured the code to reduce some nesting
  * bumped version to 0.2.0
  
* **2023-04-13**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: customer%20account%20panel%20change.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
