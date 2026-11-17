# Modal Lightbox Fix

### [License][1]

### Synopsis

Fix Squarespace's incorrect CSS for lightboxes.

### Version

  * 1.0.1

#### Squarespace Versions

  * 7.1
  
  * 7.0

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][2], a [CDN][3])
  
  * Options
  
    * Page Specific
    
      Use this option when you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Modal Lightbox Fix -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@95d9bf52f9bb2f8c0391618aa4a0a8f0b6c63dcf/Element/Modal%20Lightbox%20Fix/modal%20lightbox%20fix.min.css" rel="stylesheet" type="text/css">
          
          <!-- end TWC Modal Lightbox Fix -->
          
        ```
        
        Refer to [Inject code to a specific page][4] for details.
        
    * Site-wide
    
      Use this option when you want to have this effect on all Pages.
      
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > HEADER.
        
        ```html
        <!-- begin TWC Modal Lightbox Fix -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@95d9bf52f9bb2f8c0391618aa4a0a8f0b6c63dcf/Element/Modal%20Lightbox%20Fix/modal%20lightbox%20fix.min.css" rel="stylesheet" type="text/css">
          
          <!-- end TWC Modal Lightbox Fix -->
          
        ```
        
        Refer to [Add code to the header and footer][5] for details.
        
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option when you want to have this effect on only one Page.
    
    * Add code from file **[modal lightbox fix.html][6]** to Page Settings >
      Advanced > Page Header Code Injection for the Page. Refer to [Inject code
      to a specific page][4] for details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[modal lightbox fix.css][7]** to Website >
        Pages > Custom Code > Custom CSS.
        
    * v7.0
    
      * Add code from file **[modal lightbox fix.css][7]** to Website > Pages >
        Website Tools > Custom CSS..
        
    * Refer to [Add CSS code][8] for details.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2026-07-05**

  * fixed issue with background underlay
  * bumped version to 1.0.1
  
* **2026-05-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.jsdelivr.com/
[3]: https://en.wikipedia.org/wiki/Content_delivery_network
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[6]: modal%20lightbox%20fix.html#L1
[7]: modal%20lightbox%20fix.css#L1
[8]: https://support.squarespace.com/hc/en-us/articles/206545567-Add-custom-CSS-to-your-site#h_01JNK62X86KV65WDJ9D9HY1J8C
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
