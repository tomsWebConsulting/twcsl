# Store Page List Category Blocks Reveal

### [License][1]

### Synopsis

Reveal blocks based on category.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### v7.1 Products V2 Compatible

  * Not Applicable
  
#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Store Page List Category Attribute Add][5].

---

## Install

* Install **[Store Page List Category Attribute Add][6]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options
  
  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][7], a [CDN][8])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Store page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Store Page List Category Blocks Reveal -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Category Blocks Reveal -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Pages.
          
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page List Category Blocks Reveal -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.css" rel="stylesheet" type="text/css">
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.js" type="module"></script>
              
              <!-- end TWC Store Page List Category Blocks Reveal -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Store Page List Category Blocks Reveal -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.css" rel="stylesheet" type="text/css">
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@31ce8ad240e9a1a02af7749587fa5ec4c935ed58/Page/Store/List/Store%20Page%20List%20Category%20Blocks%20Reveal/store%20page%20list%20category%20blocks%20reveal.min.js" type="module"></script>
              
              <!-- end TWC Store Page List Category Blocks Reveal -->
              
            ```
            
        * Refer to [Add code to code injection][10] for details.
  
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page list category blocks reveal.html][11]**
        to Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][9] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Pages.
        
      * v7.1
      
        * Add code from file **[store page list category blocks
          reveal.html][11]** to Website > Pages > Custom Code > Code Injection >
          FOOTER.
          
      * v7.0
      
        * Add code from file **[store page list category blocks
          reveal.html][11]** to Website > Pages > Website Tools > Custom Code >
          Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][10] for details.

## Example Use Cases

* v7.1

  * In the Store page add a page section before the store page section. Add a
    code block with the following code.
    
    ```html
    <x-twc-splcbr category="[ enter category here between double quotes replacing square brackets ]"></x-twc-splcbr>
    ```
  
* v7.0

  * In the Store page Intro area add a code block with the following code.
  
    ```html
    <x-twc-splcbr category="[ enter category here between double quotes replacing square brackets ]"></x-twc-splcbr>
    ```
    
After the code block add an image and text block. Repeat this pattern for all
categories. The category must match the category text as entered in the
Squarespace interface.

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2025-12-20**

  * removed jQuery dependency
  * bumped version to 0.3.0
  
* **2021-07-11**

  * fix syntax errors
  * bumped version to 0.2d1
  
* **2021-07-10**

  * support v7.1
  * bumped version to 0.2d0
  
* **2021-05-20**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/List/Store%20Page%20List%20Category%20Attribute%20Add
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/List/Store%20Page%20List%20Category%20Attribute%20Add#store-page-list-category-attribute-add
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20list%20category%20blocks%20reveal.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
