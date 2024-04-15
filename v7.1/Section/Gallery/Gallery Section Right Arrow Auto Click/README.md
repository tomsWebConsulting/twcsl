# Gallery Section Right Arrow Auto Click

### [License][1]

### Synopsis

Auto click right arrow of Gallery sections.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Quick Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[gallery section right arrow auto click.html][5]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Please
      see [Per-page code injection][6].
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[gallery section right arrow auto click.html][5]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][7].

## How to Use

  * Add or modify a Gallery section.
    
  * Edit the section.
    
  * Select a GALLERY TYPE of Simple, Slideshow: Full, or Slideshow: Reel.
    
  * For OPTIONS enable Captions and disable Autoplay (GALLERY TYPE Reel doesn't
    have this option).
    
  * Set the rest of the available settings as desired.
  
  * Edit the Gallery.
  
  * Set the first line of the first image DESCRIPTION to the following.
  
    ```text
    twc-gsraac : { "slideDuration" : 5, "intersectionObserver" : true }
    ```
    
    * Keys
      
      * slideDuration
        
        The number of seconds a slide is visible or the current slide.
        
      * intersectionObserver
        
        Values are **true** or **false**. True means wait for the Gallery
        section to be mostly visible in the viewport before the first right
        arrow click after the slideDuration. False means start the first right
        click after the slideDuration.

## Notes

This effect is not active in SS Preview to test it use [private browsing][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2021-08-15**
  
  * added kill upon user action
  * bumped version to 0.2d0
  -->
* **2024-04-14**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: gallery%20section%20right%20arrow%20auto%20click.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
