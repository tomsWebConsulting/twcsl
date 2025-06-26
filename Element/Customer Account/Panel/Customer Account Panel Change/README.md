# Customer Account Panel Change

### [License][1]

### Synopsis

Make changes to the Customer Account panel that can't be achieved through the
Squarespace editor.

### Version

  * 0.9.3

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * Set Website > Settings > Site Languages > Site Language and Region Format >
    Language / Region to one of the following langugages.[*][4]
    
    * English (Australia)
    
    * English (Canada)
    
    * English (India)
    
    * English (Ireland)
    
    * English (New Zealand)
    
    * English (South Africa)
    
    * English (United Kingdom)
    
    * English (United States)
    
    * Japanese (Japan)
    
    * Spanish (Mexico)

---

## Install

* Find the Language / Region setting of the site below. Add code from one of the
  language files to Website > Pages > Custom Code > Code Injection > FOOTER.
  Refer to [Add code to code injection][5] for details.
  
  For example if the Language / Region setting is set to **English (United
  States)** you would install the code from the **customer account panel change
  language english.html** file.
  
  * English (Australia)
  
  * English (Canada)
  
  * English (India)
  
  * English (Ireland)
  
  * English (New Zealand)
  
  * English (South Africa)
  
  * English (United Kingdom)
  
  * English (United States)
  
    * **[customer account panel change language english.html][6]**
    
  * Japanese (Japan)
  
    * **[customer account panel change language japanese.html][7]**
    
  * Spanish (Mexico)
  
    * **[customer account panel change language spanish.html][8]**
    
* Optional. If you want to style elements of the customer account panel add code
  from file **[customer account panel change style.html][9]** to Website >
  Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to code
  injection][5] for details. Read the code for any instructions within.
  
* Optional. If you want to change options of the code add code from file
  **[customer account panel change options.html][10]** to Website > Pages >
  Custom Code > Code Injection > FOOTER. Refer to [Add code to code
  injection][5] for details. Read the code for any instructions within.
  
* Add code from file **[customer account panel change.html][11]** to Website >
  Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to code
  injection][5] for details. Read the code for any instructions within.

## Class Names

Squarespace includes virtually no semantic class names for the Customer Account
panel element. This code attempts to add some useful classes.

  * All
    * twc-capc
    * twc-capc--account--addresses
    * twc-capc--account--digital-products
    * twc-capc--account--greeting
    * twc-capc--account--greeting--name
    * twc-capc--account--orders
    * twc-capc--account--payment
    * twc-capc--account--profile
    * twc-capc--account-panel
    * twc-capc--addresses--add-new-address
    * twc-capc--addresses--address
    * twc-capc--addresses--address--address-1
    * twc-capc--addresses--address--delete-address
    * twc-capc--addresses--address--name
    * twc-capc--addresses--address--tag
    * twc-capc--addresses--address-new-panel
    * twc-capc--addresses--address-panel
    * twc-capc--addresses-panel
    * twc-capc--digital-products--account-settings
    * twc-capc--digital-products--course
    * twc-capc--digital-products--course--name
    * twc-capc--digital-products--member-site
    * twc-capc--digital-products--member-site--name
    * twc-capc--digital-products--search
    * twc-capc--digital-products--videos
    * twc-capc--digital-products--videos--name
    * twc-capc--digital-products-panel
    * twc-capc--header
    * twc-capc--header--back
    * twc-capc--header--close
    * twc-capc--header--title
    * twc-capc--orders--order
    * twc-capc--orders--order--date
    * twc-capc--orders--order--items
    * twc-capc--orders--order--number
    * twc-capc--orders--order--payment-method
    * twc-capc--orders--order--payment-method-panel
    * twc-capc--orders--order--shipping
    * twc-capc--orders--order--shipping--address
    * twc-capc--orders--order--shipping--option
    * twc-capc--orders--order--shipping-panel
    * twc-capc--orders--order--status
    * twc-capc--orders--order--summary
    * twc-capc--orders--order--summary--shipping
    * twc-capc--orders--order--summary--subtotal
    * twc-capc--orders--order--summary--tax
    * twc-capc--orders--order--summary--total
    * twc-capc--orders--order-panel
    * twc-capc--orders-panel
    * twc-capc--payment--add-new-method
    * twc-capc--payment--default
    * twc-capc--payment--other
    * twc-capc--payment--payment-method
    * twc-capc--payment--payment-method--billing-address
    * twc-capc--payment--payment-method--card-details
    * twc-capc--payment--payment-method--delete-payment-method
    * twc-capc--payment--payment-method-new--billing-address
    * twc-capc--payment--payment-method-new--card-details
    * twc-capc--payment--payment-method-new-panel
    * twc-capc--payment--payment-method-panel
    * twc-capc--payment-panel
    * twc-capc--profile--email
    * twc-capc--profile--email--confirm-new
    * twc-capc--profile--email--current
    * twc-capc--profile--email--new
    * twc-capc--profile--email--password
    * twc-capc--profile--email-panel
    * twc-capc--profile--name
    * twc-capc--profile--name--first
    * twc-capc--profile--name--last
    * twc-capc--profile--password
    * twc-capc--profile--password-update-panel
    * twc-capc--profile--update-password
    * twc-capc--profile--update-password--current
    * twc-capc--profile--update-password--new
    * twc-capc--profile-panel
  * By Panel
    * Digital Products
      * twc-capc
      * twc-capc--digital-products-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--digital-products--search
      * twc-capc--digital-products--videos
      * twc-capc--digital-products--videos--name
      * twc-capc--digital-products--member-site
      * twc-capc--digital-products--member-site--name
      * twc-capc--digital-products--course
      * twc-capc--digital-products--course--name
      * twc-capc--digital-products--account-settings
    * Account
      * twc-capc
      * twc-capc--account-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--account--greeting
      * twc-capc--account--greeting--name
      * twc-capc--account--digital-products
      * twc-capc--account--orders
      * twc-capc--account--payment
      * twc-capc--account--addresses
      * twc-capc--account--profile
    * Orders
      * twc-capc
      * twc-capc--orders-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--orders--order
      * twc-capc--orders--order--number
      * twc-capc--orders--order--date
    * Orders > Order
      * twc-capc
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--close
      * twc-capc--header--title
      * twc-capc--orders--order--date
      * twc-capc--orders--order--items
      * twc-capc--orders--order--payment-method
      * twc-capc--orders--order--shipping
      * twc-capc--orders--order--status
      * twc-capc--orders--order--summary
      * twc-capc--orders--order--summary--shipping
      * twc-capc--orders--order--summary--subtotal
      * twc-capc--orders--order--summary--tax
      * twc-capc--orders--order--summary--total
      * twc-capc--orders--order-panel
    * Orders > Order > Payment Method
      * twc-capc
      * twc-capc--orders--order--payment-method-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
    * Orders > Order > Shipping Panel
      * twc-capc
      * twc-capc--orders--order--shipping-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--orders--order--shipping--option
      * twc-capc--orders--order--shipping--address
    * Payment
      * twc-capc
      * twc-capc--payment-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--payment--default
      * twc-capc--payment--payment-method
      * twc-capc--payment--other
      * twc-capc--payment--add-new-method
    * Payment > Payment Method
      * twc-capc
      * twc-capc--payment--payment-method-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--payment--payment-method--card-details
      * twc-capc--payment--payment-method--billing-address
      * twc-capc--payment--payment-method--delete-payment-method
    * Payment > New Payment Method
      * twc-capc
      * twc-capc--payment--payment-method-new-panel
      * twc-capc--header
      * twc-capc--header--title
      * twc-capc--payment--payment-method-new--card-details
      * twc-capc--payment--payment-method-new--billing-address
    * Addresses
      * twc-capc
      * twc-capc--addresses-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--addresses--address
      * twc-capc--addresses--address--tag
      * twc-capc--addresses--address--name
      * twc-capc--addresses--address--address-1
      * twc-capc--addresses--add-new-address
    * Addresses > Address
      * twc-capc
      * twc-capc--addresses--address-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--addresses--address--delete-address
    * Addresses > New Address
      * twc-capc
      * twc-capc--addresses--address-new-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
    * Profile
      * twc-capc
      * twc-capc--profile-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--profile--name
      * twc-capc--profile--name--first
      * twc-capc--profile--name--last
      * twc-capc--profile--email
      * twc-capc--profile--password
      * twc-capc--profile--update-password
    * Profile > Email
      * twc-capc
      * twc-capc--profile--email-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--profile--email--current
      * twc-capc--profile--email--new
      * twc-capc--profile--email--confirm-new
      * twc-capc--profile--email--password
    * Profile > Update Password
      * twc-capc
      * twc-capc--profile--password-update-panel
      * twc-capc--header
      * twc-capc--header--back
      * twc-capc--header--title
      * twc-capc--header--close
      * twc-capc--profile--update-password--current
      * twc-capc--profile--update-password--new

If you use SS dynamically generated class names, the ones that look like a
string of gibberish, your code will most likely break pretty quickly. My code is
not immune to breakage but I think my method will break at a slower rate.

## Callback Example

You can optionally create a [callback][12] function to further customize the
processing of the customer account panel.

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
  
    const callback = ( dcmnt, panelElement, panelType ) => {
    
      console.log ( dcmnt );
      
      console.log ( panelElement );
      
      console.log ( panelType );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.capc.callbacks || [ ] );
    
  </script>

```

## Create Your Own Language Configuration JSON

This is for folks with a bit of web development experience. The code does not
support all languages Squarespace supports. It supports the languages listed in
the Dependencies section.[*][13]

You can add a language that Squarespace supports but the code doesn't. Add code
from file **[customer account panel change language template.html][23]** to
Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
code injection][5] for details.

You need to go through the data structure replacing the English language values
with the values Squarespace shows for those elements in the User Interface.

If you do create a new language, feel free to [share][14] it with me. I'll
gladly consider incorporating it in future updates.

## Make a Donation

Please consider [making a donation][15].

## Changes

* **2025-06-25**

  * fixed not verified element causing issue
  * bumped version to 0.9.3
  
* **2025-06-24**

  * fixes for more elements that SS doesn't load in some contexts
  * bumped version to 0.9.2
  
* **2025-06-23**

  * fixed bug where code would fail if the account panel didn't have a digital
    products section on accounts panel
  * bumped version to 0.9.1
  
* **2025-05-25**

  * reworked code to break out the supported languages and settings into
    separate files so users don't have to load code for languages or settings
    they aren't using. also, adding the settings outside of the main code is
    easier for users to update the main code and not have to reapply their
    changes in the main code
  * bumped version to 0.9.0
  
* **2025-05-21**

  * fixed twc-capc--orders--order--payment-method class not being set in some
    cases
  * added support for Japanese language
  * bumped version to 0.8.0
  
* **2025-05-07**

  * fixed classes being applied incorrectly when going from Account via the BACK
    button to Digital Products
  * bumped version to 0.7.2
  
* **2025-05-07**

  * fixed broken callback code
  * bumped version to 0.7.1
  
* **2025-05-05**

  * support many new classes and panel titles
  * bumped version to 0.7.0
  
* **2024-12-10**

  * fix for apparent change that prevented user CSS from working
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
[4]: #user-content-create-your-own-language-configuration-json
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: customer%20account%20panel%20change%20language%20english.html#L1
[7]: customer%20account%20panel%20change%20language%20japanese.html#L1
[8]: customer%20account%20panel%20change%20language%20spanish.html#L1
[9]: customer%20account%20panel%20change%20style.html#L1
[10]: customer%20account%20panel%20change%20options.html#L1
[11]: customer%20account%20panel%20change.html#L1
[12]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[13]: #dependencies
[23]: customer%20account%20panel%20change%20language%20template.html#L1
[14]: mailto:tomsWebConsulting@gmail.com?subject=CAPC%20Language%20JSON&body=%3C!--%20begin%20TWC%20Customer%20Account%20Panel%20Change%20Language%20English%20--%3E%0A%0A%20%20%3C!--%0A%20%20%0A%20%20%20%20customer%20account%20panel%20change%20language%20english%0A%20%20%20%20%0A%20%20%20%20License%20%20%20%20%20%20%3A%20%3C%20https%3A%2F%2Ftinyurl.com%2Fs872fb68%20%3E%0A%20%20%20%20%0A%20%20%20%20Version%20%20%20%20%20%20%3A%200.9.3%0A%20%20%20%20%0A%20%20%20%20SS%20Versions%20%20%3A%207.1%2C%207.0%0A%20%20%20%20%0A%20%20%20%20v7.1%0A%20%20%20%20Fluid%0A%20%20%20%20Engine%0A%20%20%20%20Compatible%20%20%20%3A%20Not%20Applicable%0A%20%20%20%20%0A%20%20%20%20Copyright%20%20%20%20%3A%202023-2025%20Thomas%20Creedon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Tom's%20Web%20Consulting%20%3C%20http%3A%2F%2Fwww.tomsWeb.consulting%2F%20%3E%0A%20%20%20%20%0A%20%20%20%20--%3E%0A%20%20%20%20%0A%20%20%3Cscript%20type%3D%22application%2Fvnd.twc.capc%2Bjson%3B%20lang%3Den%22%3E%0A%20%20%0A%20%20%20%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20%22panels%22%20%3A%20%7B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22account%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Account%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22address%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22deleteAddress%22%20%3A%20%22Delete%20Address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22address%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22addresses%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Addresses%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22addressNew%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22address%20new%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22New%20Address%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22digitalProducts%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22search%22%20%3A%20%22Search%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Digital%20Products%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22email%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22confirmNew%22%20%3A%20%22Confirm%20New%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22current%22%20%3A%20%22Current%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22new%22%20%3A%20%22New%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22password%22%20%3A%20%22Password%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Email%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22order%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22items%22%20%3A%20%22Items%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22orderDate%22%20%3A%20%22Order%20Date%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22order%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22shipping%22%20%3A%20%22Shipping%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22status%22%20%3A%20%22Status%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22subtotal%22%20%3A%20%22Subtotal%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22summary%22%20%3A%20%22Summary%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Order%20%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22tax%22%20%3A%20%22Tax%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22total%22%20%3A%20%22Total%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22orderPaymentMethod%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22order%20payment%20method%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Payment%20Method%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22orderShipping%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22shippingAddress%22%20%3A%20%22Shipping%20Address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22shippingOption%22%20%3A%20%22Shipping%20Option%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Shipping%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22orders%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Orders%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22passwordUpdate%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22current%22%20%3A%20%22Current%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22new%22%20%3A%20%22New%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Update%20Password%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22payment%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22default%22%20%3A%20%22Default%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22other%22%20%3A%20%22Other%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Payment%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22paymentMethod%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22billingAddress%22%20%3A%20%22Billing%20Address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22cardDetails%22%20%3A%20%22Card%20Details%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22deletePaymentMethod%22%20%3A%20%22Delete%20Payment%20Method%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22payment%20method%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Payment%20Method%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22paymentMethodNew%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22billingAddress%22%20%3A%20%22Billing%20Address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22cardDetails%22%20%3A%20%22Card%20Details%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22panelType%22%20%3A%20%22payment%20method%20new%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22New%20Payment%20Method%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%22profile%22%20%3A%20%7B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22password%22%20%3A%20%22Password%22%2C%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%22Title%22%20%3A%20%22Profile%22%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%0A%20%20%20%20%3C%2Fscript%3E%0A%20%20%20%20%0A%20%20%3C!--%20end%20TWC%20Customer%20Account%20Panel%20Change%20Language%20English%20--%3E%0A
[15]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
