# Store Page Price Remove Decimal for Prices Greater Than or Equal to N

### [License][1]

### Synopsis

Remove decimal for prices greater than equal to n on Store Page.

### Version

  * 0.3.0

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Store Page Price Change][2]

---

## Install

* Install **[Store Page Price Change][3]**. After you install the code be sure
  to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Store Page.
    
    * Add code from file **[store page price remove decimal for prices greater
      than or equal to n options.html][4]** to Store Settings > Advanced >
      Page Header Code Injection for the Store Page. Read the code for any
      instructions within.
      
    * Add code from file **[store page price remove decimal for prices greater
      than or equal to n.html][6]** to Store Settings > Advanced >
      Page Header Code Injection for the Store Page.
      
    * Refer to [Inject code to a specific page][5] for details.
    
  * Site-wide
  
    Use this option when you want to have this effect on all Store Pages.
    
    * Add code from file **[store page price remove decimal for prices greater
      than or equal to n options.html][4]** to Website > Pages > Custom Code >
      Code Injection > FOOTER. Read the code for any instructions within.
      
    * Add code from file **[store page price remove decimal for prices greater
      than or equal to n.html][6]** to Website > Pages > Custom Code >
      Code Injection > FOOTER.
      
    * Refer to [Add code to the header and footer][7] for details.
    
* Add the following to searchReplaceText in the Store Page price change code per
  that codes instructions.
  
  ```
          /*
          
            store product price remove decimal for prices greater than or equal
            to n
            
            */
            
          "/(\\d+(?:,\\d{3})*)(?:\\.\\d{2})?/" : "twcSpprdfpgtoetn",
    ```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-08-01**

  * checked v7.1 Products V2 compatibility
  * moved options out of main code
  * bumped version to 0.3.0
  
* **2024-10-05**

  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks
  * bumped version to 0.2.0
  
* **2022-01-31**
  
  * updated for compatibility with Store Price Change v0.3d8
  * bumped version to 0.1d1
  
* **2021-09-28**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[4]: store%20page%20price%20remove%20decimal%20for%20prices%20greater%20than%20or%20equal%20to%20n%20options.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[6]: store%20page%20price%20remove%20decimal%20for%20prices%20greater%20than%20or%20equal%20to%20n.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
