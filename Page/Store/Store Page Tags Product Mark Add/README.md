# Store Page Tags Product Mark Add

### [License][1]

### Synopsis

Add product marks using tags.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Products V2 Compatible

  * Not Applicable
  
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
      
        * Use this option if you want to have this effect on only one Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Store Page Tags Product Mark Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.js" type="module"></script>
            
            <!-- end TWC Store Page Tags Product Mark Add -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page Tags Product Mark Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.css" rel="stylesheet" type="text/css">
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.js" type="module"></script>
              
              <!-- end TWC Store Page Tags Product Mark Add -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page Tags Product Mark Add -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.css" rel="stylesheet" type="text/css">
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d7cb7fe85bd3aa4677108522bb35cc86b689060b/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add/store%20page%20tags%20product%20mark%20add.min.js" type="module"></script>
              
              <!-- end TWC Store Page Tags Product Mark Add -->
              
            ```
            
        * Refer to [Add code to code injection][9] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on your
    site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[store page tags product mark add.html][10]** to Page Settings >
        Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add code from file **[store page tags product mark add.html][10]** to Website >
          Pages > Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[store page tags product mark add.html][10]** to Website > Pages >
          Website Tools > Custom Code > Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][9] for details.

## Callback Example

You can create [callback][11] functions to customize the processing of the tags
or use them.

Your callback must accept an array parameter.

```html
<script>

  // initialize twc module
  
  window.twc = ( ( self ) => self ) ( window.twc || { } );
  
  // initialize twc ptc sub-module
  
  twc.ptc = ( ( self ) => self ) ( twc.ptc || { } );
  
  // initialize twc ptc callbacks sub-module
  
  twc.ptc.callbacks = ( ( self ) => {
  
    const callback = ( tags ) => {
    
      console.log ( 'ptc log : ', tags );
      
      };
      
    self.push ( callback );
    
    return self;
    
    } ) ( twc.ptc.callbacks || [ ] );
    
  </script>

```

## Make a Donation

Please consider [making a donation][12].

## Changes

<!-- * **2025-05-09**

  * added some missing code
  * bumped version to 0.1.1
  -->
* **2025-11-26**

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
[10]: store%20page%20tags%20product%20mark%20add.html#L1
[11]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
