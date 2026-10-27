# Calendar Block Week at a Time

### [License][1]

### Synopsis

Display Calendar Block a week at a time.

### Version

  * 0.2.1

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Calendar Block Observe Changes][4]

---

## Install

* Install **[Calendar Block Observe Changes][5]**. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Calendar Block Week at a Time -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@7c61046242a79ef5020fe4a617849702742a6fba/Block/Calendar/Calendar%20Block%20Week%20at%20a%20Time/calendar%20block%20week%20at%20a%20time.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@7c61046242a79ef5020fe4a617849702742a6fba/Block/Calendar/Calendar%20Block%20Week%20at%20a%20Time/calendar%20block%20week%20at%20a%20time.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block Week at a Time -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Calendar Block Week at a Time -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@7c61046242a79ef5020fe4a617849702742a6fba/Block/Calendar/Calendar%20Block%20Week%20at%20a%20Time/calendar%20block%20week%20at%20a%20time.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@7c61046242a79ef5020fe4a617849702742a6fba/Block/Calendar/Calendar%20Block%20Week%20at%20a%20Time/calendar%20block%20week%20at%20a%20time.min.js" type="module"></script>
            
            <!-- end TWC Calendar Block Week at a Time -->
            
          ```
          
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[calendar block week at a time.html][10]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * Add code from file **[calendar block week at a time.html][10]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][9] for details.

## Note

This effect is not active in Squarespace edit mode to test it use [private
browsing][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2026-10-27**

  * fixed issue with some weeks not showing
  * fixed issue with today week and two weeks showing
  * fixed issue with navigation not controlling the correct calendar
  * bumped version to 0.2.1 (commit 7c61046242a79ef5020fe4a617849702742a6fba)
  
* **2026-10-25**

  * updated to work with Calendar Block Observe Changes v0.5.0
  * removed jQuery dependency
  * bumped version to 0.2.0 (commit f4a3c62d0bd4a4f91358fa69434caa274736c388)
  
* **2022-03-18**

  * fix for images not displaying
  * bumped version to 0.1d1
  
* **2021-10-23**

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
[10]: calendar%20block%20week%20at%20a%20time.html#L1
[11]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
