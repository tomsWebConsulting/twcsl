# Gallery Section Horizontal Scroll

### [License][1]

### Synopsis

Gallery section horizontal scroll effect.

### Version

  * 0.1.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Quick Install

* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[gallery section horizontal scroll.html][5]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[gallery section horizontal scroll.html][5]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][7] for details.
      
* Add or edit a Gallery section.

* Set the Gallery Type to Grid: Simple.

* Turn Captions on.

* Add **#twc-gshs-medium** to the end of the Link field of the first image of
  the Gallery. This text will be removed from the link.
  
  Optionally, you can change medium to small, large or a custom CSS height
  value.

## Note

On mobile the scroll changes to vertical. It is possbile to maintain the
horizontal scroll on mobile with some minor changes to the CSS.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2024-12-09**

  * fix for trigger text showing briefly
  * fix for images being cropped on mobile devices
  * bumped version to 0.1.1
  
* **2024-11-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: gallery%20section%20horizontal%20scroll.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/gallery-section-horizontal-scroll?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
