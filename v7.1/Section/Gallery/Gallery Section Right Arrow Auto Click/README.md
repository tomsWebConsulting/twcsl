# Gallery Section Right Arrow Auto Click

### [License][1]

### Synopsis

Auto click right arrow of Gallery sections.

### Version

  * 0.3.0

#### SS Version

  * 7.1

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
    
      Use this option if you want to have this effect on only one Page.
      
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Gallery Section Right Arrow Auto Click -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@337abd0b8ec04f02e51d551249bfd490407a51e8/Section/Gallery/Gallery%20Section%20Right%20Arrow%20Auto%20Click/gallery%20section%20right%20arrow%20auto%20click.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@337abd0b8ec04f02e51d551249bfd490407a51e8/Section/Gallery/Gallery%20Section%20Right%20Arrow%20Auto%20Click/gallery%20section%20right%20arrow%20auto%20click.min.js" type="module"></script>
          
          <!-- end TWC Gallery Section Right Arrow Auto Click -->
          
        ```
        
      * Refer to [per-page code injection][6] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Gallery Section Right Arrow Auto Click -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@337abd0b8ec04f02e51d551249bfd490407a51e8/Section/Gallery/Gallery%20Section%20Right%20Arrow%20Auto%20Click/gallery%20section%20right%20arrow%20auto%20click.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@337abd0b8ec04f02e51d551249bfd490407a51e8/Section/Gallery/Gallery%20Section%20Right%20Arrow%20Auto%20Click/gallery%20section%20right%20arrow%20auto%20click.min.js" type="module"></script>
          
          <!-- end TWC Gallery Section Right Arrow Auto Click -->
          
        ```
        
      * Refer to [Add code to code injection][7] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[gallery section right arrow auto click.html][8]**
      to Page Settings > Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][6] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
    * Add code from file **[gallery section right arrow auto click.html][8]**
      to Website > Pages > Website Tools > Custom Code > Code Injection >
      FOOTER.
      
    * Refer to [Add code to code injection][7].

## How to Use

  * Add or modify a Gallery section.
    
  * Edit the section.
    
  * Select a GALLERY TYPE of Slideshow: Simple, Slideshow: Full, or Slideshow:
    Reel.
    
  * For OPTIONS enable Captions and disable Autoplay (GALLERY TYPE Reel doesn't
    have this option).
    
  * Set the rest of the available settings as desired.
  
  * Edit the Gallery.
  
  * In the DESCRIPTION of the first image, on a new line, add the following.
  
    ```text
    twc-gsraac : { "slideDuration" : 5, "inactivityDelay" : 30, "intersectionObserver" : true }
    ```
    
    * Keys
      
      * slideDuration
        
        The number of seconds a slide is visible or the current slide.
        
      * inactivityDelay
      
        The number of seconds after a user interacts with the gallery the auto
        click will resume. If you set the value to -1 the auto click will stop.
        
      * intersectionObserver
        
        Values are **true** or **false**. True means wait for the Gallery
        section to be mostly visible in the viewport before the first right
        arrow click after the slideDuration. False means start the first right
        click after the slideDuration.

## Notes

This effect is not active in Squarespace Preview to test it use [private
browsing][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2026-08-24**
  
  * restructured the code
  * updated to work with new Squarespace Page Blank structure
  * bumped version to 0.3.0 (commit 4e39832b89f6c72da4a540693395a2a7a83c5fc5)
  
* **2025-03-30**
  
  * added pause/cancel feature
  * remove jQuery dependency
  * bumped version to 0.2.0
  
* **2024-04-14**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: gallery%20section%20right%20arrow%20auto%20click.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
