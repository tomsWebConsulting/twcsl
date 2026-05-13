# Site Wide Image Borders

### [License][1]

### Synopsis

Add border images around image elements of a site.

### Version

  * 0.8.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

---

## Quick Install

* Add code from file **[site wide image borders.less][2]** to Website > Pages >
  Custom Code > Custom CSS. Refer to [Using the CSS Editor][3] for details.
  Read the code for any instructions within.

## Notes

* This effect is not complete.

* This effect won't magically fix your images if there are transparent areas
  around the image and apply the effect. The same is true if the image has a
  border that matches the background behind the image.
  
* There is no switch for portfolio projects as Squarespace does not distinguish
  them from regular pages
         
* Elements that have badges may appear outside the image border effect. For
  those cases you will need custom CSS to try and move the badge as needed.
        
* This effect doesn't work with :

  * fluid engine image block design fit, this is a CSS limitation not
    Squarespace or this code
    
  * image block shapes
    
  * video blocks

## Make a Donation

Please consider [making a donation][4].

## Changes

* **2026-05-12**

  * removed .store-product-detail-additional-info
  * updated CSS for a number of elements
  * bumped version to 0.8.0
  
* **2024-06-20**

  * bunch of tweaks to refine the effect for current v7.1
  * regress from v0.8.0 back to v0.7.2
  * bumped version to 0.7.3
  
* **2024-06-10**

  * use less comments, remove uneeded comments from compilation
  * bumped version to 0.7.2
  
* **2024-04-20**

  * another fix for summary block image border
  * bumped version to 0.7.1
  
* **2023-02-04**

  * fix summary block image border
  * add support for product blocks
  * add support for fluid engine
  * bumped version to 0.7.0
  
* **2022-08-06**

  * add support for some auto layouts
  * bumped version to 0.6.0
  
* **2022-04-13**

  * fix for visual issues with some gallery block designs
  * bumped version to 0.5.2
  
* **2022-03-28**

  * fix for visual issues with some image block designs
  * bumped version to 0.5d1
  
* **2022-03-27**

  * generalized the effect to not only do corners but borders as well
  * fix for image-blocks not getting the effect
  * bumped version to 0.5d0
  
* **2022-03-05**

  * use LESS Parametric Mixins feature to be able to turn on and off some of
    which images get rounded corners
  * bumped version to 0.4d0
  
* **2022-03-04**

  * fix for section background getting rounded by default
  * add coverage for summary blocks
  * bumped version to 0.3d2
  
* **2022-02-22**

  * fix for header logo getting rounded
  * bumped version to 0.3d1
  
* **2021-05-25**

  * fix for Safari transition/transform square corner issue
  * added coverage for blogs
  * added coverage for store product detail
  * bumped version to 0.3d0
  
* **2021-05-15**

  * added coverage for page section background image
  * bumped version to 0.2d0
  
* **2021-05-08**

  * added coverage for store product grid image hover
  * bumped version to v0.1d1
  
* **2021-03-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: site%20wide%20image%20borders.less#L1
[3]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
