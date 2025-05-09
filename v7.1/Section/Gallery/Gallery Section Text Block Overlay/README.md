# Gallery Section Text Block Overlay

### [License][1]

### Synopsis

Add styled text overlays to gallery section images.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]
 
---

## Install

* Add code from file **[gallery section text block overlay.less][5]** to
  Website > Pages > Custom Code > Custom CSS.
  
* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[gallery section text block overlay.html][6]** to
  Website > Pages > Custom Code > Code Injection > FOOTER. Please see
  [Per-page code injection][7].

* Add a section to a page.

  * There is no need to spend time changing the design layout of this section as
    the code will hide this section.
    
  * Add text blocks that you want to use as gallery section image text overlays.
    For [Classic Editor][8] only use line blocks to keep text blocks from
    collapsing together.
    
* Add a gallery section to a page.

  * Add the gallery section just before the previous section you created.
  
  * For Gallery Type select **Slideshow: simple**.
  
  * Turn the **Captions** on.
  
  * In the first image description add the following line.
    
    ```text
    twc-gstbo
    ```
    
  * For each image you want to have a text block overlay set its 
    description to a text block id. If you want an overlay for the first image
    add a line to the description that is the text block id.
    
    ![first image description](read%20me%20assets/first%20image%20description.png)
    
    To find text block ids you can use a tool like Heather Tovey's most
    excellent looking [Squarespace ID Finder][9].

## Note

This effect is not active in SS Preview to test it use [private browsing][10].

## Demo

You can see a [demo of this effect here][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2023-08-28**

  * fix for opacity issue
  * bumped version to 0.2.1
  
* **2023-08-27**

  * add support for all Gallery Types
  * bumped version to 0.2.0
  
* **2023-08-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: gallery%20section%20text%20block%20overlay.less#L1
[6]: gallery%20section%20text%20block%20overlay.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/6421525446541#toc-classic-editor
[9]: https://www.heathertovey.com/squarespace-id-finder/
[10]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[11]: https://toms-web-consulting-demos.squarespace.com/gallery-section-text-block-overlay?password=twcdemos
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
