# Image Blocks Random

### [License][1]

### Synopsis

Randomize the images of image blocks.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### v7.1 Fluid Engine Compatibility

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]
  
  * [Fluid Engine][5]

---

## Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[image blocks random.html][6]** to Store Settings >
      Advanced > Page Header Code Injection for the store page. Please see
      [Per-page code injection][7].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[image blocks random.html][6]** to Website > Pages >
      Website Tools > Code Injection > FOOTER. Please see [Add code to code
      injection][8].

* Create a Fluid Engine page section.

* Layout images blocks as desired.

* For each image block you want to randomize set it's Link URL to **#twc-ibr**.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2024-04-28**

  * removed dependency on jQuery
  * make compatible with cart page observe changes v0.2.0
  * bumped version to 0.2.0
  -->
* **2024-06-03**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: https://support.squarespace.com/hc/en-us/articles/6421525446541-Editing-your-site-with-Fluid-Engine
[6]: image%20blocks%20random.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://toms-web-consulting-demos.squarespace.com/image-blocks-random?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
