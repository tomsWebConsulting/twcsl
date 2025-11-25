# Store Page List Badges

### [License][1]

### Synopsis

Replace Squarespace v7.1 native badge with an old style badge from some of the
v7.0 templates.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list badges.html][4]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list badges.html][4]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][6] for details.
      
* Read the code for any instructions within.

## Badge Options

These images are examples.

* Style

  * Rectangle
  
    ![style rectangle][7]
    
  * Square
  
    ![style square][8]

  * Circle
  
    ![style circle][9]
    
* Background Color and Color (text)

  ![background color and color][10]
  
* Font : family, weight, style (italic and normal), size, letter spacing, and
  text transform (capitalize, lowercase, uppercase)
  
* Padding (around the text)

* Position

  |            | Left                        | Center                        | Right                        |            |
  | ----------:|:---------------------------:|:-----------------------------:|:----------------------------:|:---------- |
  | **Top**    | ![position top left][11]     | ![position top center][12]     | ![position top right][13]     | **Top**    |
  | **Center** | ![position center left][14] | ![position center][15]        | ![position center right][16] | **Center** |
  | **Bottom** | ![position bottom left][17] | ![position bottom center][18] | ![position bottom right][19] | **Bottom** |
  |            | **Left**                    | **Center**                    | **Right**                    |            |

* Inset

  * Floating
  
    ![inset floating][13]
    
  * Flush
  
    ![inset flush][21]
    
  * Dock Vertically
    
    ![inset dock vertically][22]
    
  * Dock Horizontally
    
    ![inset dock horizontally][23]
    
* Inset Size (margin around the badge for options that have an inset)

## Custom Badges

In addition to the Squarespace built-in badges this code lets you add your own
custom badges to products. For example lets say you want to add a **pre-order
badge** to a product. Edit the product. Add a tag with the text **twc splb
pre-order**. You will now see a pre-order badge on the store page list.

## Demo

You can see a [demo of this effect here][24].

## Make a Donation

Please consider [making a donation][25].

## Changes

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
[4]: store%20page%20list%20badges.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: read%20me%20assets/style%20rectangle.png
[8]: read%20me%20assets/style%20square.png
[9]: read%20me%20assets/style%20circle.png
[10]: read%20me%20assets/background%20color%20and%20color.png
[11]: read%20me%20assets/position%20top%20left.png
[12]: read%20me%20assets/position%20top%20center.png
[13]: read%20me%20assets/position%20top%20right.png
[14]: read%20me%20assets/position%20center%20left.png
[15]: read%20me%20assets/position%20center.png
[16]: read%20me%20assets/position%20center%20right.png
[17]: read%20me%20assets/position%20bottom%20left.png
[18]: read%20me%20assets/position%20bottom%20center.png
[19]: read%20me%20assets/position%20bottom%20right.png
[21]: read%20me%20assets/inset%20flush.png
[22]: read%20me%20assets/inset%20dock%20horizontally.png
[23]: read%20me%20assets/inset%20dock%20vertically.png
[24]: https://toms-web-consulting-demos.squarespace.com/store-page-list-badges?password=twcdemos
[25]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
