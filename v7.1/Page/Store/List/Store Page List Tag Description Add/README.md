# Store Page List Tag Description Add

### [License][1]

### Synopsis

Add descriptions to Store page tag pages.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Not Applicable
  
#### Fluid Engine Compatible

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
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add code from file **[store page list tag description add
          options.html][8]** to Store Page Settings > Advanced >
          Page Header Code Injection for the page. Read the code for any
          instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Store Page List Tag Description Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ce75286c8b91249e5defe8a5b73a37d4bfe5a5f1/v7.1/Page/Store/List/Store%20Page%20List%20Tag%20Description%20Add/store%20page%20list%20tag%20description%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Tag Description Add -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * v7.1
        
          * Add code from file **[store page list tag description add
            options.html][8]** to Website > Pages > Custom Code >
            Code Injection > FOOTER. Read the code for any instructions within.
            
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page List Tag Description Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ce75286c8b91249e5defe8a5b73a37d4bfe5a5f1/v7.1/Page/Store/List/Store%20Page%20List%20Tag%20Description%20Add/store%20page%20list%20tag%20description%20add.min.js" type="module"></script>
              
              <!-- end TWC Store Page List Tag Description Add -->
              
            ```
            
        * v7.0
        
          * Add code from file **[store page list tag description add
            options.html][8]** to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER. Read the code for any
            instructions within.
            
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page List Tag Description Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ce75286c8b91249e5defe8a5b73a37d4bfe5a5f1/v7.1/Page/Store/List/Store%20Page%20List%20Tag%20Description%20Add/store%20page%20list%20tag%20description%20add.min.js" type="module"></script>
              
              <!-- end TWC Store Page List Tag Description Add -->
              
            ```
            
        * Refer to [Add code to code injection][10] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[store page list tag description add
        options.html][8]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for any
        instructions within.
        
      * Add code from file **[store page list tag description add.html][11]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][9] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add code from file **[store page list tag description add
          options.html][8]** to Website > Pages > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add code from file **[store page list tag description add.html][11]**
          to Website > Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[store page list tag description add
          options.html][8]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER. Read the code for any instructions within.
          
        * Add code from file **[store page list tag description add.html][11]**
          to Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER.
          
      * Refer to [Add code to code injection][10] for details.

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-11-27**

  * made options JavaScript
  * updated to work with v7.1 Products V2
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.2.0
  
* **2023-02-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache#page-tags-cache
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: store%20page%20list%20tag%20description%20add%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20list%20tag%20description%20add.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
