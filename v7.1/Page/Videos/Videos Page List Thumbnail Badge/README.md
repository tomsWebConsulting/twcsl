# Videos Page List Thumbnail Badge

### [License][1]

### Synopsis

Videos page list thumbnail badge.

### Version

  * 0.1.0

#### SS Version

  * 7.1

---

## Install

* Add code from file **[videos page list thumbnail badge.less][2]** to Website >
  Pages > Custom Code > Custom CSS. Refer to [Using the CSS Editor][3] for
  details. Read the code for instructions within.

* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][4], a [CDN][5])
    
    * Options
    
      * Page Specific
      
        * Use this option if you want to have this effect on only one Videos
          Page.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Videos Page List Thumbnail Badge -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5fc32ec44199dbd7f527dca95b9c97f4e44575d7/Videos/Videos%20Page%20List%20Thumbnail%20Badge/videos%20page%20list%20thumbnail%20badge.min.js" type="module"></script>
            
            <!-- end TWC Videos Page List Thumbnail Badge -->
            
          ```
          
        * Refer to [per-page code injection][6] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Videos pages.
        
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Videos Page List Thumbnail Badge -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@5fc32ec44199dbd7f527dca95b9c97f4e44575d7/Videos/Videos%20Page%20List%20Thumbnail%20Badge/videos%20page%20list%20thumbnail%20badge.min.js" type="module"></script>
            
            <!-- end TWC Videos Page List Thumbnail Badge -->
            
          ```
          
        * Refer to [Add code to code injection][7] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Video Page.
      
      * Add code from file **[videos page list thumbnail badge.html][8]** to
        Page Settings > Advanced > Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Add code from file **[videos page list thumbnail badge.html][8]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][7] for details.

## How to Use

* Edit a Video.

* In the **EXCERPT** field on a line by itself add the following.

```text
twc-vpltb : [ enter your badge text here replacing square brackets ]
```

## Badge Options

   *Note: The following images are not from a Videos Page. The images do show
   layout options.*

* Style

  * Rectangle
  
    ![style rectangle][9]
    
  * Square
  
    ![style square][10]

  * Circle
  
    ![style circle][11]
    
* Background Color and Color (text)

  ![background color and color][12]
  
* Font : family, weight, style (italic and normal), size, letter spacing, and
  text transform (capitalize, lowercase, uppercase)
  
* Padding (around the out of stock text)

* Position

   *Note: The following images are not from a Videos Page. The images do show
   layout options.*

  |            | Left                        | Center                        | Right                        |            |
  | ----------:|:---------------------------:|:-----------------------------:|:----------------------------:|:---------- |
  | **Top**    | ![position top left][13]    | ![position top center][14]    | ![position top right][15]    | **Top**    |
  | **Center** | ![position center left][16] | ![position center][17]        | ![position center right][18] | **Center** |
  | **Bottom** | ![position bottom left][19] | ![position bottom center][20] | ![position bottom right][21] | **Bottom** |
  |            | **Left**                    | **Center**                    | **Right**                    |            |

* Inset

   *Note: The following images are not from a Videos Page. The images do show
   layout options.*

  * Floating
  
    ![inset floating][15]
    
  * Flush
  
    ![inset flush][22]
    
  * Dock Vertically
    
    ![inset dock vertically][23]
    
  * Dock Horizontally
    
    ![inset dock horizontally][24]
    
* Inset Size (margin around the badge for options that have an inset)

## Demo

You can see a [demo of this effect here][25].

## Make a Donation

Please consider [making a donation][26].

## Changes

<!-- * **2025-07-03**

  * updated to work with Products V2
  * bumped version to 0.5.1 (commit 5fc32ec44199dbd7f527dca95b9c97f4e44575d7)
  -->
* **2023-03-24**

  * initial version (commit d20bbc2d16453d7895a7089f0b0d41be764823f8)

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: store%20page%20list%20out%20of%20stock%20badge.less#L1
[3]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: videos%20page%20list%20thumbnail%20badge.html#L1
[9]: read%20me%20assets/style%20rectangle.png
[10]: read%20me%20assets/style%20square.png
[11]: read%20me%20assets/style%20circle.png
[12]: read%20me%20assets/background%20color%20and%20color.png
[13]: read%20me%20assets/position%20top%20left.png
[14]: read%20me%20assets/position%20top%20center.png
[15]: read%20me%20assets/position%20top%20right.png
[16]: read%20me%20assets/position%20center%20left.png
[17]: read%20me%20assets/position%20center.png
[18]: read%20me%20assets/position%20center%20right.png
[19]: read%20me%20assets/position%20bottom%20left.png
[20]: read%20me%20assets/position%20bottom%20center.png
[21]: read%20me%20assets/position%20bottom%20right.png
[22]: read%20me%20assets/inset%20flush.png
[23]: read%20me%20assets/inset%20dock%20vertically.png
[24]: read%20me%20assets/inset%20dock%20horizontally.png
[25]: https://toms-web-consulting-demos.squarespace.com/videos-page-list-thumbnail-badge?password=twcdemos
[26]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
