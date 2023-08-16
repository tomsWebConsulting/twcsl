# Customer Account Panel Change

### [License][1]
    
### Synopsis

Make changes to the Customer Account panel that can't be achieved through the
Squarespace editor.

### Version 0.2.4

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
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[customer account panel change.html][5]** to Settings >
  Developer Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][6]. Read the code for any instructions within.

## Classes

Squarespace includes virtually no semantic class names for the Customer Account
panel element. This code attempts to add some useful classes.

  * twc-capc-addresses
  * twc-capc-close
  * twc-capc-greeting
  * twc-capc-greeting-sign-out
  * twc-capc-header
  * twc-capc-orders
  * twc-capc-profile
  * twc-capc-sign-out
  * twc-capc-title

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage but I think my method will break at a slower rate.

## accountFrameCallback Example

You can optionally create a [callback][7] function to further customize the
processing of the sign in dialog.

Following is example code. Place your callback before the customer account panel
change code.

```html
<script>

  const myNamedFunction = ( dcmnt ) => {
  
    console.log ( dcmnt );
    
    }
    
  </script>

```

Then in the customer account panel change code set accountFrameCallback to the
following.

```html
      accountFrameCallback : myNamedFunction
```

## Make a Donation

Please consider [making a donation][8].

## Changes

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

**All trademarks are property of their respective owners.**

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: customer%20account%20panel%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
