# Store Page Detail Page Sections Append Footer Section

### [License][1]

### Synopsis

Append Footer Section to Store Page detail Page Sections.

### Version

  * 0.4.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Elements Manipulate][4]

---

## Install

* Install **[Elements Manipulate][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options
 
  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Store Page.
        
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page.
          
          ```html
          <!-- begin TWC Store Page Detail Page Sections Append Footer Section -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3fd1fb5f8e062cc456e5b52d6603adac05a31ef0/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Page%20Sections%20Append%20Footer%20Section/store%20page%20detail%20page%20sections%20append%20footer%20section.min.css" rel="stylesheet" type="text/css">
            
            <!-- end TWC Store Page Detail Page Sections Append Footer Section -->
            
          ```
          
          Refer to [per-page code injection][8] for details.
          
        * Add code from file **[store page detail page sections append footer
          section.js][9]** to the **elements manipulate options** code.
          
      * Site-wide
      
        Use this option if you want to have this effect on all Store Pages.
        
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > HEADER.
          
          ```html
          <!-- begin TWC Store Page Detail Page Sections Append Footer Section -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3fd1fb5f8e062cc456e5b52d6603adac05a31ef0/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Page%20Sections%20Append%20Footer%20Section/store%20page%20detail%20page%20sections%20append%20footer%20section.min.css" rel="stylesheet" type="text/css">
            
            <!-- end TWC Store Page Detail Page Sections Append Footer Section -->
            
          ```
          
          Refer to [Add code to code injection][10] for details.
          
        * Add code from file **[store page detail page sections append footer
          section.js][9]** to the **elements manipulate options** code.
          
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store Page.
      
      * Add code from file **[store page detail page sections append footer
        section.css][11]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Refer to [per-page code
        injection][8] for details.
        
      * Add code from file **[store page detail page sections append footer
        section.js][9]** to the **elements manipulate options** code.
        
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page detail page sections append footer
        section.css][11]** to Website > Pages > Custom Code > Custom CSS. Refer
        to [Using the CSS Editor][12] for details.
        
      * Add code from file **[store page detail page sections append footer
        section.js][9]** to the **elements manipulate options** code.

## How to Use

For Footer Sections you want to append to Page Sections add a Code Block with
Content set to the following.

```html
<x-twc-spdpsafs />
```

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2026-04-23**

  * updated to work with Squarespace removal of additional info in product
    editor
  * bumped version to 0.4.0
  
* **2025-12-05**

  * updated to use elements manipulate
  * bumped version to 0.3.0
  
* **2021-08-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate#elements-manipulate
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: store%20page%20detail%20page%20sections%20append%20footer%20section.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[12]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[11]: store%20page%20detail%20page%20sections%20append%20footer%20section.css#L1
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
