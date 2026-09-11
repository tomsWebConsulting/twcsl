# Button Block Sitemap Url Random

### [License][1]

### Synopsis

Assign random Sitemap URLs to Button Blocks.

### Features

* Random URLs come from the Sitemap

* Each Button Block can pull a random URL from any collection of the Sitemap.

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
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Button Block Sitemap Url Random -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c58ed9c55edc3488d5110fe944b39fda1b9297f2/Block/Button/Button%20Block%20Sitemap%20Url%20Random/button%20block%20blog%20sitemap%20random.min.js" type="module"></script>
          
          <!-- end TWC Button Block Sitemap Url Random -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * v7.1
      
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Button Block Sitemap Url Random -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c58ed9c55edc3488d5110fe944b39fda1b9297f2/Block/Button/Button%20Block%20Sitemap%20Url%20Random/button%20block%20blog%20sitemap%20random.min.js" type="module"></script>
            
            <!-- end TWC Button Block Sitemap Url Random -->
            
          ```
          
      * v7.0
      
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Button Block Sitemap Url Random -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@c58ed9c55edc3488d5110fe944b39fda1b9297f2/Block/Button/Button%20Block%20Sitemap%20Url%20Random/button%20block%20blog%20sitemap%20random.min.js" type="module"></script>
            
            <!-- end TWC Button Block Sitemap Url Random -->
            
          ```
          
      * Refer to [Add code to code injection][7] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[button block sitemap url random.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * v7.1
    
      * Add code from file **[button block sitemap url random.html][8]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[button block sitemap url random.html][8]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][7] for details.

## How to Use

* Add or edit a Button Block.

* Set the URL using the following format.
  
  ```
  #twc-bbsur-[ enter a URL Slug here replacing square brackets ]
  ```

## Notes

* This effect fetches the Sitemap.

* For the URL Slug copy the value from a collection Settings > General > URL
  SLUG field. You only need exactly what can be selected from the field.

## Make a Donation

Please consider [making a donation][5].

## Changes

<!-- * **2025-12-30**

  * moved options out of main code
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.4.0
  -->
* **2026-09-11**

  * initial version (commit c58ed9c55edc3488d5110fe944b39fda1b9297f2)

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: button%20block%20sitemap%20url%20random.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
