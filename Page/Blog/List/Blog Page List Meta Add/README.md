# Blog Page List Meta Add

### [License][1]

### Synopsis

Add additional meta information to Blog Page list.

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
        
      * Add code from file **[blog page list meta add options.html][6]**
        to Page Settings > Advanced > Page Header Code Injection for the Page.
        Read the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Blog Page List Meta Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.js" type="module"></script>
          
          <!-- end TWC Blog Page List Meta Add -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * v7.1
      
        * Add code from file **[blog page list meta add options.html][6]** to
          Website > Pages > Custom Code > Code Injection > FOOTER. Read the code
          for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Blog Page List Meta Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.js" type="module"></script>
            
            <!-- end TWC Blog Page List Meta Add -->
            
          ```
          
      * v7.0
      
        * Add code from file **[blog page list meta add options.html][6]** to
          Website > Pages > Website Tools > Custom Code > Code Injection >
          FOOTER. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Blog Page List Meta Add -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ae975d51d64336422a625a346ddbef28477025b0/Page/Blog/List/Blog%20Page%20List%20Meta%20Add/blog%20page%20list%20meta%20add.min.js" type="module"></script>
            
            <!-- end TWC Blog Page List Meta Add -->
            
          ```
          
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[blog page list meta add options.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the Page. Read
      the code for any instructions within.
      
    * Add code from file **[blog page list meta add.html][9]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    * Use this option if you want to have this effect on all Pages.
      
    * v7.1
    
      * Add code from file **[blog page list meta add options.html][6]** to
        Page Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add code from file **[blog page list meta add.html][9]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[blog page list meta add options.html][6]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        Read the code for any instructions within.
        
      * Add code from file **[blog page list meta add.html][9]** to Website >
        Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][8] for details.

## Note

If you add a lot of meta info you might find things a bit hard to
determine just what info you are looking at. I followed the style Squarespace
set up, no indicators what the meta info is. If you feel your meta info swimming
in a sea of info, you might want to consider using CSS to give the meta info
some labels.

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2025-12-30**

  * moved options out of main code
  * removed jQuery dependency
  * removed twcsl dependency
  * bumped version to 0.4.0
  -->
* **2026-08-13**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: blog%20page%20list%20meta%20add%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: blog%20page%20list%20meta%20add.html#L1
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
