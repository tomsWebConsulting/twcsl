# Calendar Block Multiday First Class Add

### [License][1]

### Synopsis

Add classes to first day of multiday events.

### Version

  * 0.2.0

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
          <!-- begin TWC Calendar Block Multiday First Class Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@84845ac190f1e7635e6715478e29ad24073f4d0c/Block/Calendar/Calendar%20Block%20Multiday%20First%20Class%20Add/calendar%20block%20multiday%20first%20class%20add.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block Multiday First Class Add -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Store pages.
        
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Calendar Block Multiday First Class Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@84845ac190f1e7635e6715478e29ad24073f4d0c/Block/Calendar/Calendar%20Block%20Multiday%20First%20Class%20Add/calendar%20block%20multiday%20first%20class%20add.min.js" type="module"></script>
              
              <!-- end TWC Calendar Block Multiday First Class Add -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Calendar Block Multiday First Class Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@84845ac190f1e7635e6715478e29ad24073f4d0c/Block/Calendar/Calendar%20Block%20Multiday%20First%20Class%20Add/calendar%20block%20multiday%20first%20class%20add.min.js" type="module"></script>
              
              <!-- end TWC Calendar Block Multiday First Class Add -->
              
            ```
            
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[calendar block multiday first class
        add.html][10]** to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add code from file **[calendar block multiday event first class
          add.html][10]** to Website > Pages > Custom Code > Code Injection >
          FOOTER.
          
      * v7.0
      
        * Add code from file **[calendar block multiday event first class
          add.html][10]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][9] for details.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-10-24**

  * updated to work with Calendar Block Observe Changes v0.5.0
  * removed jQuery dependency
  * bumped version to 0.2.0 (commit 84845ac190f1e7635e6715478e29ad24073f4d0c)
  
* **2022-08-09**

  * fix for first day of multi day event not spanning two days because of local
    time zone
  * bumped version to 0.1.1
  
* **2022-08-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Calendar/Calendar%20Block%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Calendar/Calendar%20Block%20Observe%20Changes#calendar-block-observe-changes
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: calendar%20block%20multiday%20first%20class%20add.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
