# Store Page List Product Marks To Badges

### [License][1]

### Synopsis

Convert product marks to old style badges similar to some of the v7.0 templates.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Page Tags Cache][4].

---

## Install

* Install **[Page Tags Cache][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Optional Install

  Use this optional install if you want to add custom product marks using
  tags.
  
  * Install **[Store Page Tags Product Mark Add][6]**. After you install the
    code be sure to continue on with the rest of the steps.
    
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][7], a [CDN][8])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Store
          page.
          
        * Add code from file **[store page list product marks to badges
          options.html][9]** to Store Page Settings > Advanced >
          Page Header Code Injection for the Page. Read the code for any
          instructions within.
          
        * Add the following code to Store Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Store Page List Product Marks To Badges -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@f68dbd2063d2d59b9b48d59d2407d46d692b7cbb/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Marks%20To%20Badges/store%20page%20list%20product%20marks%20to%20badges.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@f68dbd2063d2d59b9b48d59d2407d46d692b7cbb/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Marks%20To%20Badges/store%20page%20list%20product%20marks%20to%20badges.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Product Marks To Badges -->
            
          ```
          
        * Refer to [per-page code injection][10] for details.
        
      * Site-wide
      
        * Use this option if you want to have this effect on all Store pages.
          
        * Add code from file **[store page list product marks to badges
          options.css][13]** to Website > Pages > Custom Code > Custom CSS. Read
          the code for any instructions within. Refer to [Using the CSS
          Editor][14] for details.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page List Product Marks To Badges -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@f68dbd2063d2d59b9b48d59d2407d46d692b7cbb/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Marks%20To%20Badges/store%20page%20list%20product%20marks%20to%20badges.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@f68dbd2063d2d59b9b48d59d2407d46d692b7cbb/v7.1/Page/Store/List/Store%20Page%20List%20Product%20Marks%20To%20Badges/store%20page%20list%20product%20marks%20to%20badges.min.js" type="module"></script>
            
            <!-- end TWC Store Page List Product Marks To Badges -->
            
          ```
          
          Refer to [Add code to code injection][11] for details.
          
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      * Use this option if you want to have this effect on only one Store page.
        
      * Add code from file **[store page list product marks to badges
        options.html][9]** to Store Page Settings > Advanced >
        Page Header Code Injection for the Store page. Read the code for any
        instructions within.
        
      * Add code from file **[store page list product marks to badges.html][12]**
        to Store Page Settings > Advanced > Page Header Code Injection for the
        Store page.
        
      * Refer to [per-page code injection][10] for details.
        
    * Site-wide
    
      * Use this option if you want to have this effect on all Store pages.
        
      * Add code from file **[store page list product marks to badges
        options.css][13]** to Website > Pages > Custom Code > Custom CSS. Read
        the code for any instructions within. Refer to [Using the CSS
        Editor][14] for details.
        
      * Add code from file **[store page list product marks to badges.html][12]**
        to Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][11] for details.

## Badge Options

These images are examples.

* Style

  * Rectangle
  
    ![style rectangle][15]
    
  * Square
  
    ![style square][16]

  * Circle
  
    ![style circle][17]
    
* Background Color and Color (text)

  ![background color and color][18]
  
* Font : family, weight, style (italic and normal), size, letter spacing, and
  text transform (capitalize, lowercase, uppercase)
  
* Padding (around the text)

* Position

  |            | Left                        | Center                        | Right                        |            |
  | ----------:|:---------------------------:|:-----------------------------:|:----------------------------:|:---------- |
  | **Top**    | ![position top left][19]     | ![position top center][20]     | ![position top right][21]     | **Top**    |
  | **Center** | ![position center left][22] | ![position center][23]        | ![position center right][24] | **Center** |
  | **Bottom** | ![position bottom left][25] | ![position bottom center][26] | ![position bottom right][27] | **Bottom** |
  |            | **Left**                    | **Center**                    | **Right**                    |            |

* Inset

  * Floating
  
    ![inset floating][21]
    
  * Flush
  
    ![inset flush][28]
    
  * Dock Vertically
    
    ![inset dock vertically][29]
    
  * Dock Horizontally
    
    ![inset dock horizontally][30]
    
* Inset Size (margin around the badge for options that have an inset)

## Demo

You can see a [demo of this effect here][31].

## Make a Donation

Please consider [making a donation][32].

## Changes

* **2025-11-30**

  * updated to depend on page tags cache
  * bumped version to 0.3.0
  
* **2025-08-01**

  * updated to work with v7.1 Products V2
  * bumped version to 0.2.1
  
* **2025-06-06**

  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2024-07-17**

  * fix for duplicate twc-splb-item elements per product
  * bumped version to 0.1.1
  
* **2023-05-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Page%20Tags%20Cache#page-tags-cache
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Store%20Page%20Tags%20Product%20Mark%20Add#store-page-tags-product-mark-add
[7]: https://www.jsdelivr.com/
[8]: https://en.wikipedia.org/wiki/Content_delivery_network
[9]: store%20page%20list%20product%20marks%20to%20badges%20options.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[11]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[12]: store%20page%20list%20product%20marks%20to%20badges.html#L1
[13]: store%20page%20list%20product%20marks%20to%20badges%20options.css#L1
[14]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[15]: read%20me%20assets/style%20rectangle.png
[16]: read%20me%20assets/style%20square.png
[17]: read%20me%20assets/style%20circle.png
[18]: read%20me%20assets/background%20color%20and%20color.png
[19]: read%20me%20assets/position%20top%20left.png
[20]: read%20me%20assets/position%20top%20center.png
[21]: read%20me%20assets/position%20top%20right.png
[22]: read%20me%20assets/position%20center%20left.png
[23]: read%20me%20assets/position%20center.png
[24]: read%20me%20assets/position%20center%20right.png
[25]: read%20me%20assets/position%20bottom%20left.png
[26]: read%20me%20assets/position%20bottom%20center.png
[27]: read%20me%20assets/position%20bottom%20right.png
[28]: read%20me%20assets/inset%20flush.png
[29]: read%20me%20assets/inset%20dock%20horizontally.png
[30]: read%20me%20assets/inset%20dock%20vertically.png
[31]: https://toms-web-consulting-demos.squarespace.com/store-page-list-badges?password=twcdemos
[32]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
