# Autocomplete Attribute False True Value Fix

### [License][1]

### Synopsis

Fix Squarespace's incorrect use of autocomplete attributes that use a value of
false or true, causing accessibility guideline compliance issues.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        PAGE HEADER CODE INJECTION for the Page.
        
        ```html
        <!-- begin TWC Autocomplete Attribute False True Value Fix -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@e0d1fc92023758b81c371b000d3f3084298e9df6/Element/Autocomplete%20Attribute%20False%20True%20Value%20Fix/autocomplete%20attribute%20false%20true%20fix.min.js" type="module"></script>
          
          <!-- end TWC Autocomplete Attribute False True Value Fix -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Autocomplete Attribute False True Value Fix -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@e0d1fc92023758b81c371b000d3f3084298e9df6/Element/Autocomplete%20Attribute%20False%20True%20Value%20Fix/autocomplete%20attribute%20false%20true%20fix.min.js" type="module"></script>
          
          <!-- end TWC Autocomplete Attribute False True Value Fix -->
          
        ```
        
      * Refer to [Add code to code injection][7] for details.

* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[autocomplete attribute false true fix.html][8]** to
      Page Settings > Advanced > PAGE HEADER CODE INJECTION for the Page.
      
    * Refer to [per-page code injection][6] for details.
      
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * Add code from file **[autocomplete attribute false true fix.html][8]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][7] for details.

## Make a Donation

Please consider [making a donation][9].

## Changes

<!--* **2026-03-25**

  * updated to depend on page tags cache
  * bumped version to 0.3.0
  -->
* **2026-03-30**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: autocomplete%20attribute%20false%20true%20fix.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
