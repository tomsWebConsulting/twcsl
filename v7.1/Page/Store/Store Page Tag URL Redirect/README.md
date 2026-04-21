# Store Page Tag URL Redirect

### [License][1]

### Synopsis

Use **Tags** to redirect Squarespace PLP and PDP links to a URL.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Page Tags Cache][4].

---

## Install

* Install **[Page Tags Cache][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Store Page.
        
        * Add code from file **[store page tag url redirect options.html][8]**
          to Page Settings > Advanced > Page Header Code Injection for the Store
          Page. Read the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page.
          
          ```html
          <!-- begin TWC Store Page Tag URL Redirect -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@2b16664b40f21ee62d7e82c39d88b29ed4b7df26/v7.1/Page/Store/Store%20Page%20Tag%20URL%20Redirect/store%20page%20tag%20url%20redirect.min.js" type="module"></script>
            
            <!-- end TWC Store Page Tag URL Redirect -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Store Pages.
        
        * Add code from file **[store page tag url redirect options.html][8]**
          to Website > Pages > Custom Code > Code Injection > FOOTER. Read the
          code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page Tag URL Redirect -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@2b16664b40f21ee62d7e82c39d88b29ed4b7df26/v7.1/Page/Store/Store%20Page%20Tag%20URL%20Redirect/store%20page%20tag%20url%20redirect.min.js" type="module"></script>
            
            <!-- end TWC Store Page Tag URL Redirect -->
            
          ```
          
        * Refer to [Add code to code injection][10] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store page.
      
      * Add code from file **[store page tag url redirect options.html][8]** to
        Page Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add code from file **[store page tag url redirect.html][11]** to
        Page Settings > Advanced > Page Header Code Injection for the Store
        Page.
        
      * Refer to [per-page code injection][9] for details.
        
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page tag url redirect options.html][8]** to
        Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
        for any instructions within.
        
      * Add code from file **[store page tag url redirect.html][11]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][10] for details.

## How To Use

Add a **Tag** to a product in a specific format. An example.

```text
twc-sptur /store/p/myproduct ?Size=Small
```

## Tag Syntax

  * twc-sptur
  
  * space characer
  
  * URL or id
  
  * space characer
  
  * optional, query/fragment or id
  
```text
twc-sptur [ enter URL or id replacing square brackets ] [ enter query/fragment or id here replacing square brackets ]
```

## IDS

Tag length is limited to 100 characters. This code lets you to set up ids that
will be expanded into longer text.

An id is in the format **[ id ]**. For example.

```text
twc-sptur [ your id here ]
```

## Make a Donation

Please consider [making a donation][12].

## Changes

<!-- * **2026-04-10**

  * updated code to use DOM nodes per insertion to comply with browser
    best‑practices
  * bumped version to 0.3.1
  -->
* **2026-04-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache#page-tags-cache
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: store%20page%20tag%20url%20redirect%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20tag%20url%20redirect.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
