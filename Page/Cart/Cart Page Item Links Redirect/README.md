# Cart Page Item Links Redirect

### [License][1]

### Synopsis

Redirect cart page product item links.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Install **[Cart Page Observe Changes][4]**. After you install the code be sure
  to continue on with the rest of the steps.
  
* In the cart page observe changes code add **twcCartPageItemLinksRedirect** to
  the added callbacks. Example.
  
  ```javascript
      added : [
      
        /*
        
          following is an example line. copy and paste it after the example
          line. remove the double forward slash space of the new line. replace
          the name with your callback
          
          */
          
        // '[ optional, enter your callback name here replacing square brackets ]',
        
        'twcCartItemLinksRedirect',
        
        ],
        
  ```

* Options

  * v7.1
  
    * Add code from file **[cart item links redirect options.html][5]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Read the code for
      any instructions within.
      
    * Add code from file **[cart item links redirect.html][6]** to Website >
      Pages > Custom Code > Code Injection > FOOTER.
      
  * v7.0
  
    * Add code from file **[cart item links redirect options.html][5]** to 
      Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
      Read the code for any instructions within.
      
    * Add code from file **[cart item links redirect.html][6]** to Website >
      Pages > Website Tools > Custom Code > Code Injection > FOOTER.
      

* Refer to [Add code to code injection][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-11-11**

  * updated for Cart Page Observe Changes v0.2.2
  * bumped version to 0.3.0
  
* **2022-09-23**

  * adapted for Cart Page Observe Changes
  * bumped version to 0.2.0
  
* **2020-11-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Cart/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[5]: cart%20page%20item%20links%20redirect%20options.html#L1
[6]: cart%20page%20item%20links%20redirect.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
