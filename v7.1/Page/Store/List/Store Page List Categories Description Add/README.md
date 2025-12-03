# Store Page List Categories Description Add

### [License][1]

### Synopsis

Add simple category descriptions to store category pages.

### Version

  * 0.12.5

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page list categories description add
        options.html][6]** to Store Page Settings > Advanced >
        Page Header Code Injection for the page. Read the code for any
        instructions within.
        
      * Add the following code to Store Page Settings > Advanced >
        Page Header Code Injection for the page.
        
        ```html
        <!-- begin TWC Store Page List Categories Description Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5f66ec2595c29b6c304b811d9a52b89c3dd08f5b/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Description%20Add/store%20page%20list%20categories%20description%20add.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5f66ec2595c29b6c304b811d9a52b89c3dd08f5b/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Description%20Add/store%20page%20list%20categories%20description%20add.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Categories Description Add -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * Add code from file **[store page list categories description add
        options.html][6]** to Website > Pages > Custom Code > Code Injection >
        FOOTER.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page List Categories Description Add -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5f66ec2595c29b6c304b811d9a52b89c3dd08f5b/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Description%20Add/store%20page%20list%20categories%20description%20add.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5f66ec2595c29b6c304b811d9a52b89c3dd08f5b/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Description%20Add/store%20page%20list%20categories%20description%20add.min.js" type="module"></script>
          
          <!-- end TWC Store Page List Categories Description Add -->
          
        ```
        
        Refer to [Add code to code injection][8] for details.

* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Store page.
      
    * Add code from files **[store page list categories description add
      options.html][6]** and **[store page detail title text to link.html][9]**
      to Store Page Settings > Advanced > Page Header Code Injection for the
      page. Refer to [per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you want to have this effect on all Store pages.
      
    * Add code from files **[store page list categories description add
      options.html][6]** and **[store page detail title text to link.html][9]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][8] for details.
      
## Notes

The code contains default settings to place the description on the top of the
page. If you want to place the description in another location you will need to
use the optional destination selector to do so.

If you use the page style HTML you will need to create your own CSS to style it.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-12-03**

  * fixed with code not working with some Store page settings
  * bumped version to 0.12.5
  
* **2025-12-02**

  * fixed default destinationSelector after more Squarespace Store page header
    changes
  * bumped version to 0.12.4
  
* **2025-08-26**

  * added CSS to hide description when editing section, less user confusion
  * bumped version to 0.12.3
  
* **2025-08-26**

  * fixed layout issue with recent changes Squarespace made to category HTML
  * bumped version to 0.12.2
  
* **2025-08-14**

  * fixed issue with descriptions not displaying when Top Category Name Filter
    Visibility is off
  * bumped version to 0.12.1
  
* **2025-08-13**

  * moved options out of main code
  * fixed issue with descriptions not displaying when title or breadcrumbs are
    off, make json call to get the categories
  * bumped version to 0.12.0
  
* **2025-07-16**

  * fixed all category not showing
  * bumped version to 0.11.1
  
* **2025-07-10**

  * updated to work with Products V2
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.11.0
  
* **2025-03-10**

  * fix for flexbox issue, remove from twc-splcda-description element
  * bumped version to 0.10.1
  
* **2025-03-09**

  * add HTML format option
  * bumped version to 0.10.0
  
* **2024-11-27**

  * fix for last page section not being hidden for site visitors
  * bumped version to 0.9.1
  
* **2024-11-27**

  * hide last page section while not in edit mode
  * bumped version to 0.9.0
  
* **2024-06-16**

  * potential fix for script ld+json consumers syntax error
  * bumped version to 0.8.0
  
* **2023-11-17**

  * second fix for description html not coming through
  * bumped version to 0.7.4
  
* **2023-08-28**

  * fix parsing errors including description html not coming through
  * bumped version to 0.7.3
  
* **2023-08-25**

  * fix for code hiding product detail page contents
  * bumped version to 0.7.2
  
* **2023-08-24**

  * reworked the parsing code to be a bit more flexible
  * fix disparity between how the read me said to configure category list and
    how the code works
  * bumped version to 0.7.1
  
* **2023-08-13**

  * move configuration out of code and into code block
  * bumped version to 0.7.0
  
* **2023-08-08**

  * support nested categories
  * bumped version to 0.6.0
  
* **2023-06-16**

  * make code more flexible in where the description can be placed
  * bumped version to 0.5.0
  
* **2023-05-31**

  * make code for urlSlugs work the way the text describes to enter them. also
    be flexible with either starting with a forward slash or not
  * bumped version to 0.4.1
  
* **2023-02-16**

  * revert back to using category slugs instead of name, better support for
    nested categories
  * bumped version to 0.4.0
  
* **2021-08-12**

  * support for HTML in descriptions
  * use category instead of category slugs
  * bumped version to 0.3d0
  
* **2021-06-27**

  * added window.twc
  * remove debugger statement
  * bumped version to 0.2d3
  
* **2021-06-15**

  * fix issue with not being able to add category description to store page
    grid/listing
  * bumped version to 0.2d2
  
* **2021-06-11**

  * use twcsl
  * bumped version to 0.2d1
  
* **2021-05-19**

  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  
* **2021-01-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: store%20page%20list%20categories%20description%20add%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: store%20page%20list%20categories%20description%20add.html#L1
[10]: https://toms-web-consulting-demos.squarespace.com/store-page-list-categories-description-add?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
