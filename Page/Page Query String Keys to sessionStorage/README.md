# Page Query String Keys to sessionStorage

### [License][1]

### Synopsis

Store white listed search query strings in [sessionStorage][2].

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][5], a [CDN][6])
  
  * Options
  
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[query string keys to sessionStorage
        options.html][7]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Page Query String Keys to sessionStorage -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ef7e0c70e3f699f4cb9766bbcd7a4a3680b250bb/Page/Page%20Query%20String%20Keys%20to%20sessionStorage/query%20string%20keys%20to%20sessionStorage.min.js" type="module"></script>
          
          <!-- end TWC Page Query String Keys to sessionStorage -->
          
        ```
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add code from file **[query string keys to sessionStorage
          options.html][7]** to Website > Pages > Custom Code >
          Code Injection > FOOTER. Read the code for instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Page Query String Keys to sessionStorage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ef7e0c70e3f699f4cb9766bbcd7a4a3680b250bb/Page/Page%20Query%20String%20Keys%20to%20sessionStorage/query%20string%20keys%20to%20sessionStorage.min.js" type="module"></script>
            
            <!-- end TWC Page Query String Keys to sessionStorage -->
            
          ```
          
      * v7.0
      
        * Add code from file **[query string keys to sessionStorage
          options.html][7]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER. Read the code for instructions within.
          
        * Add the following code to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Page Query String Keys to sessionStorage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@ef7e0c70e3f699f4cb9766bbcd7a4a3680b250bb/Page/Page%20Query%20String%20Keys%20to%20sessionStorage/query%20string%20keys%20to%20sessionStorage.min.js" type="module"></script>
            
            <!-- end TWC Page Query String Keys to sessionStorage -->
            
          ```
          
      * Refer to [Add code to code injection][9] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
      * Add code from file **[query string keys to sessionStorage
        options.html][7]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
    * Add code from file **[query string keys to sessionStorage.html][10]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][8] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * v7.1
    
      * Add code from file **[query string keys to sessionStorage
        options.html][7]** to Website > Pages > Custom Code > Code Injection >
        FOOTER. Read the code for instructions within.
        
      * Add code from file **[query string keys to sessionStorage.html][10]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * v7.0
    
      * Add code from file **[query string keys to sessionStorage
        options.html][7]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
      * Add code from file **[query string keys to sessionStorage.html][10]** to
        Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
        
    * Refer to [Add code to code injection][9].

## Notes

This effect is meant as a base for other effects.

This effect does not create persistant query string parameters across all the
URLs of your site. Rather if you hit a page on your site with a query string
that has a white listed parameter a key/value pair it will be stored in
sessionStorage.

For example if the URL is < /my-page?utm_source=my-value > then a key of
**twc-qskts-utm_source** with a value of **my-value** will be stored.

## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2026-08-19**

  * reordered code
  * fixed bug in find id for form
  * bumped version to 0.6.1
  -->
* **2026-08-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://www.jsdelivr.com/
[6]: https://en.wikipedia.org/wiki/Content_delivery_network
[7]: query%20string%20keys%20to%20sessionStorage%20options.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: query%20string%20keys%20to%20sessionStorage.html#L1
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
