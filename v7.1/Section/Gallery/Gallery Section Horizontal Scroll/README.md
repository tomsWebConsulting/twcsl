# Gallery Section Horizontal Scroll

### [License][1]

### Synopsis

Gallery section horizontal scroll effect.

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
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[gallery section horizontal scroll.html][5]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Please
      see [Per-page code injection][6].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[gallery section horizontal scroll.html][5]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][7].
      
* Add or edit a Gallery section.

* Turn Captions on.

* Add **twc-gshs : medium** to the first Description field of the first image of
  the Gallery. This text will be removed from the description. If you want a
  normal description, you can add it below the twc-gshs line.
  
  Optionally , you can change medium to small, large or a custom CSS height value.

## Note

On mobile the scroll changes to vertical. It is possbile to maintain the
horizontal scroll on mobile with some minor changes to the CSS.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

<!-- * **2024-06-05**

  * support all gallery types
  * bumped version to 0.2.0
  -->
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
