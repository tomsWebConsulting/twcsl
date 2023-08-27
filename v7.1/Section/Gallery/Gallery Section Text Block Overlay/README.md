# Gallery Section Text Block Overlay

### [License][1]

### Synopsis

Add styled text overlays to gallery section images.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]
 
---

## Install

* Add code from file **[gallery section text block overlay.css][5]** to
  Website > Website Tools > Design > Custom CSS.
  
* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[gallery section text block overlay.html][6]** to
  Settings > Developer Tools > Code Injection > FOOTER. Please see [Per-page
  code injection][7].

* Add a section to a page.

  * There is no need to spend time changing the design layout of this section as
    the code will hide this section.
    
  * Add text blocks that you want to use as gallery section image text overlays.
    Use line blocks to keep text blocks from collapsing together.
    
* Add a gallery section to a page.

  * Add the gallery section just before the previous section you created.
  
  * Turn the **Captions** on.
  
  * In the first image description add the following line.
    
    ```
    twc-gstbo
    ```
    
  * For each image you want to have a text block overlay set its 
    description to a text block id. If you want an overlay for the first image
    add a line to the description that is the text block id.
    
    ![first image description](read%20me%20assets/first%20image%20description.png)
    
    To find text block ids you can use a tool like Heather Tovey's most
    excellent looking [Squarespace ID Finder][8].

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2022-05-10**

  * support for v7.1 product detail layouts
  * use twcsl
  * bumped version to 0.2.0
  -->
* **2023-08-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: gallery%20section%20text%20block%20overlay.css#L1
[6]: gallery%20section%20text%20block%20overlay.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://www.heathertovey.com/squarespace-id-finder/
[9]: https://toms-web-consulting-demos.squarespace.com/gallery-section-text-block-overlay?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
