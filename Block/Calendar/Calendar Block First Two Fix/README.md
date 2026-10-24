# Calendar Block First Two Fix

### [License][1]

### Synopsis

Fix Calendar Block months that have two firsts of the month.

### Version

  * 1.0.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Calendar Block Observe Changes][4]

---

## Install

* Install **[Calendar Block Observe Changes][5]**. After you install the code
  be sure to continue on with the rest of the steps.
  
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
          <!-- begin TWC Calendar Block First Two Fix -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5b108c9d929f5a815d2f64e7b2b3efa2d8465246/Block/Calendar/Calendar%20Block%20First%20Two%20Fix/calendar%20block%20first%20two%20fix.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block First Two Fix -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Store pages.
        
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Calendar Block First Two Fix -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5b108c9d929f5a815d2f64e7b2b3efa2d8465246/Block/Calendar/Calendar%20Block%20First%20Two%20Fix/calendar%20block%20first%20two%20fix.min.js" type="module"></script>
              
              <!-- end TWC Calendar Block First Two Fix -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Calendar Block First Two Fix -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5b108c9d929f5a815d2f64e7b2b3efa2d8465246/Block/Calendar/Calendar%20Block%20First%20Two%20Fix/calendar%20block%20first%20two%20fix.min.js" type="module"></script>
              
              <!-- end TWC Calendar Block First Two Fix -->
              
            ```
            
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[calendar block first two fix.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add code from file **[calendar block first two fix.html][10]** to
          Website > Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[calendar block first two fix.html][10]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER.
          
      * Refer to [Add code to code injection][9] for details.

## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2025-12-30**

  * moved options out of main code
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.4.0
  -->
* **2026-10-23**

  * initial version (commit 5b108c9d929f5a815d2f64e7b2b3efa2d8465246)

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Calendar/Calendar%20Block%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Calendar/Calendar%20Block%20Observe%20Changes#calendar-block-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: calendar%20block%20first%20two%20fix.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
