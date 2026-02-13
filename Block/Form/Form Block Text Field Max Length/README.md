# Form Block Text Field Max Length

### [License][1]

### Synopsis

Limit the number of characters allowed in some form block fields.

### Version

  * 0.5.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Form Element Add Watch][4]

---

## Install

* Install **[Form Block Form Element Add Watch][5]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Page.
        
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Form Block Text Field Max Length -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@95ea23e2b97ec85f5965c53a94fadec8b4752505/Block/Form/Form%20Block%20Text%20Field%20Max%20Length/form%20block%20text%20field%20max%20length.min.js" type="module"></script>
            
            <!-- end TWC Form Block Text Field Max Length -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Pages.
        
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Form Block Text Field Max Length -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@95ea23e2b97ec85f5965c53a94fadec8b4752505/Block/Form/Form%20Block%20Text%20Field%20Max%20Length/form%20block%20text%20field%20max%20length.min.js" type="module"></script>
              
              <!-- end TWC Form Block Text Field Max Length -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Form Block Text Field Max Length -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@95ea23e2b97ec85f5965c53a94fadec8b4752505/Block/Form/Form%20Block%20Text%20Field%20Max%20Length/form%20block%20text%20field%20max%20length.min.js" type="module"></script>
              
              <!-- end TWC Form Block Text Field Max Length -->
              
            ```
            
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[form block form element add watch.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add code from file **[form block form element add watch.html][10]** to
          Website > Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[form block form element add watch.html][10]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER.
          
      * Refer to [Add code to code injection][9].

## How To Use

* Add or edit a form block on your Page and set up as desired.
  
* In the **Form Block Text Field Max Length** code add the callback name
  **twcFbtfml** to **added** per the **Form Block Text Field Max Length**
  code install steps.
  
* For each text or text area field where you want a max character limit do the
  following.
  
  * Edit the field.
    
  * At the beginning of the description field enter **twc-fbtfml : [enter max
    length number here replacing square brackets]**. An example.
    
    ```text
    twc-fbtfml : 10
    ```
    
    If you want to have description text for the field that the user will see
    enter it after the twc-fbtfml tag. An example.
    
    ```text
    twc-fbtfml : 10
    My description text that helps the user.
    ```

## Note

This code is client side and making use of an HTML form feature. Since this code
is client side it is possible to bypass the max length limit this code is
setting. In other words you still need to be checking manually when forms or
orders come in to make sure your limits are not being exceeded. Consider this
code more of an aid to help users not exceed your field max length limits.

## Demo

You can see a [demo of this effect here][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-02-13**

  * updated to work with Form Block Text Field Max Length v0.5.0
  * bumped version to 0.5.0
  
* **2025-04-09**

  * updated to work with Form Block Text Field Max Length v0.4.0
  * remove dependency on jQuery
  * bumped version to 0.4.0
  
* **2024-04-28**

  * updated to work with Form Block Text Field Max Length v0.3.0
  * bumped version to 0.3.0
  
* **2023-05-11**

  * clean up the aria-label on the description as well
  * bumped version to 0.2.0
  
* **2022-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch#form-block-form-element-add-watch
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: form%20block%20form%20element%20add%20watch.html#L1
[11]: https://toms-web-consulting-demos.squarespace.com/form-block-text-field-max-length?password=twcdemos
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
