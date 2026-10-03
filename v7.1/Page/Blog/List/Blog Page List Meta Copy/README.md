# Blog Page List Meta Copy

### [License][1]

### Synopsis

Copy Blog Page List meta after title.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Blog Page.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Blog Page List Meta Copy -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d507c77f09a8992d25113b1b9f64ef5968edb7bf/v7.1/Page/Blog/List/Blog%20Page%20List%20Meta%20Copy/blog%20page%20list%20meta%20copy.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d507c77f09a8992d25113b1b9f64ef5968edb7bf/v7.1/Page/Blog/List/Blog%20Page%20List%20Meta%20Copy/blog%20page%20list%20meta%20copy.min.js" type="module"></script>
          
          <!-- end TWC Blog Page List Meta Copy -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Blog pages.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Blog Page List Meta Copy -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d507c77f09a8992d25113b1b9f64ef5968edb7bf/v7.1/Page/Blog/List/Blog%20Page%20List%20Meta%20Copy/blog%20page%20list%20meta%20copy.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d507c77f09a8992d25113b1b9f64ef5968edb7bf/v7.1/Page/Blog/List/Blog%20Page%20List%20Meta%20Copy/blog%20page%20list%20meta%20copy.min.js" type="module"></script>
          
          <!-- end TWC Blog Page List Meta Copy -->
          
        ```
        
      * Refer to [Add code to code injection][7] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[blog page list meta copy.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the Blog Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * Add code from file **[blog page list meta copy.html][8]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
    * Refer to [Add code to code injection][7] for details.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2026-10-02**

  * fixed issue with incorrect selector
  * removed jQuery dependency
  * bumped version to 0.2.0 (commit d507c77f09a8992d25113b1b9f64ef5968edb7bf)
  
* **2023-06-10**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: blog%20page%20list%20meta%20copy.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
