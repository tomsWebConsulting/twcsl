# Gallery Section Image Order Random

### [License][1]

### Synopsis

Randomize the images of gallery sections.

### Version

  * 0.4.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable.

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[gallery section image order random.html][4]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [Per-page code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[gallery section image order random.html][4]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][6] for details.
      
* Add or edit a Gallery section.

* Turn Captions on.

* Add **twc-gsior** to the first Description field of the first image of the
  Gallery. This text will be removed from the description. If you want a normal
  description, you can add it below the twc-gsior text.

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-01-21**

  * remove dependency on jQuery
  * fix for twc-gsior trigger text showing when loading a larger number of images
  * bumped version to 0.4.0
  
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
[4]: gallery%20section%20image%20order%20random.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://toms-web-consulting-demos.squarespace.com/gallery-section-image-order-random?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
