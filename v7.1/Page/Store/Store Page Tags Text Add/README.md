# Store Page Tags Text Add

### [License][1]

### Synopsis

Add text to products.

### Version

  * 0.3.1

#### SS Version

  * 7.1

#### v7.1 Products V2 Compatible

  * Yes
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

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
      
        Use this option if you want to have this effect on only one Store
        Page.
        
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page.
          
          ```html
          <!-- begin TWC Store Page Tags Text Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@77bad4a208e56692dd4a80d2112767ed7d27ec12/v7.1/Page/Store/Store%20Page%20Tags%20Text%20Add/store%20page%20tags%20text%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@77bad4a208e56692dd4a80d2112767ed7d27ec12/v7.1/Page/Store/Store%20Page%20Tags%20Text%20Add/store%20page%20tags%20text%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page Tags Text Add -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Store Pages.
        
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page Tags Text Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@77bad4a208e56692dd4a80d2112767ed7d27ec12/v7.1/Page/Store/Store%20Page%20Tags%20Text%20Add/store%20page%20tags%20text%20add.min.css" rel="stylesheet" type="text/css">
          
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@77bad4a208e56692dd4a80d2112767ed7d27ec12/v7.1/Page/Store/Store%20Page%20Tags%20Text%20Add/store%20page%20tags%20text%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page Tags Text Add -->
            
          ```
          
        * Refer to [Add code to code injection][9] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store page.
      
      * Add code from file **[store page tags text add.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the Store
        Page.
        
      * Refer to [per-page code injection][8] for details.
        
    * Site-wide
    
      Use this option if you want to have this effect on all Store Pages.
      
      * Add code from file **[store page tags text add.html][10]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][9] for details.

## How To Use

Lets say your site sells products. You want to display tags on each product that
show the value alignments of those products so your customers can choose the
products that best align with their own values. For example, women owned, carbon
neutral, plastic free, and etc. Of course value alignments isn't the only use of
these tags. You can use them for anything of which you can think.

Edit the product and add the following tags. **twc-sptta Women Owned ld**,
**twc-sptta Carbon Neutral ld**, and **twc-sptta Plastic Free ld**. The
**twc-sptta** prefix will be stripped from the tags and they will be added to
the product details.

## Tag Syntax

  * twc-sptta
  
  * text
  
  * page show : list & detail, list, or detail
  
    * use **ld**, **l**, or **d**
    
```text
twc-sptta [ text replacing square brackets ] [ page show replacing square brackets ]
```

The tags are a simple unordered list displayed with flexbox. There is a
**twc-sptta** class you can use for your own custom CSS for further styling.

## Demo

You can see a [demo of this effect here][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2026-04-10**

  * updated code to use DOM nodes per insertion to comply with browser
    best‑practices
  * bumped version to 0.3.1
  
* **2026-03-25**

  * updated to depend on page tags cache
  * bumped version to 0.3.0
  
* **2025-08-03**

  * updated to work with v7.1 Products V2
  * bumped version to 0.2.1
  
* **2025-06-05**

  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2024-01-25**

  * fix for tags being misapplied
  * bumped version to 0.1.2
  
* **2023-12-22**

  * fix for tags not being retrieved from api
  * bumped version to 0.1.1
  
* **2023-10-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache#page-tags-cache
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: store%20page%20tags%20text%20add.html#L1
[11]: https://toms-web-consulting-demos.squarespace.com/store-page-tags-text-add?password=twcdemos
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
