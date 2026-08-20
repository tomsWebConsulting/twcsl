# Form Block Fields From sessionStorage

### [License][1]

### Synopsis

Fill Form Block fields from [sessionStorage][2].

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Form Block Form Element Add Watch][5]

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][6], a [CDN][7])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Form Block Fields From sessionStorage -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.js" type="module"></script>
          
          <!-- end TWC Form Block Fields From sessionStorage -->
          
        ```
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Form Block Fields From sessionStorage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.js" type="module"></script>
            
            <!-- end TWC Form Block Fields From sessionStorage -->
            
          ```
          
      * v7.0
      
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Form Block Fields From sessionStorage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@13a2bc230fba5cbf77882c8a971d88179edacbea/Block/Form/Form%20Block%20Fields%20From%20sessionStorage/form%20block%20fields%20from%20sessionStorage.min.js" type="module"></script>
            
            <!-- end TWC Form Block Fields From sessionStorage -->
            
          ```
          
      * Refer to [Add code to code injection][9] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[form block fields from sessionStorage.html][10]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][8] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[form block fields from sessionStorage.html][10]**
        to Website > Pages > Website Tools > Custom Code > Code Injection >
        FOOTER.
        
    * v7.0
    
      * Add code from file **[form block fields from sessionStorage.html][10]**
        to Website > Pages > Website Tools > Custom Code > Code Injection >
        FOOTER.
        
    * Refer to [Add code to code injection][9].

## How To Use

Add the callback name **twcFbffs** to the **Form Block Form Element Add Watch**
callbacks per that codes instructions.

Add a Text Field to your Form Block with the **LABEL** field set to the value of
a search query parameter key. Set the **DESCRIPTION** field to **twc-fbffs**.
The field will be hidden. You can repeat this step for as many times as needed.
Note: you can use the **DUPLICATE** option for the field to reduce repetitive
steps.

## Note

This effect does not work with checkbox, radio, or survey fields.

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2025-06-02**

  * fixed select fields not storing values, inputChangeTrigger
  * bumped version to 0.3.1
 -->
* **2026-08-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: form%20block%20fields%20from%20sessionStorage.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
