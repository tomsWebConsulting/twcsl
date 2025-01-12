# Gallery Section Image Order Random

### [License][1]

### Synopsis

Randomize the images of gallery sections.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable.

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
      
    * Add code from file **[gallery section image order random.html][5]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Please
      see [Per-page code injection][6].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[gallery section image order random.html][5]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][7].
      
* Add or edit a Gallery section.

* Turn Captions on.

* Add **twc-gsior** to the first Description field of the first image of the
  Gallery. This text will be removed from the description. If you want a normal
  description, you can add it below the twc-gsior text.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-01-11**

  * major restructuring
  * support lightbox
  * fix bug when Lightbox on gallery section images disappeared
  * bumped version to 0.3.0
  
* **2024-06-05**

  * support all gallery types
  * bumped version to 0.2.0
  
* **2021-12-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: gallery%20section%20image%20order%20random.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/gallery-section-image-order-random?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
