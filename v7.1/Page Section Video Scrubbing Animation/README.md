# Page Section Video Scrubbing Animation

### [License][99]

### Version 0.3.0

#### SS Version 7.1

#### Fluid Engine Compatible : No

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  ```
  
* Add a classic editor blank section.
  
* Edit the section.
  
* Add a background image that represents the animation.
  
  *Used as a placeholder while the animation loads or if the animation can't be
  loaded.*
  
  * Set the Overlay Opacity to 0%. Unless of course you want the overlay.
  
  * Set the Image Effect to None, unless of course you want the image effect.
    This effect only applies to the background image which is replaced by the
    animation when it loads. 
    
* Add a code block above the text block.
  
  * Add the following code.
    
    ```html
    <x-twc-psvsa/>
    ```
    
* Delete the text block.

* Add a spacer block below the code block.

  *Used to control the animation rate and how long the animation stays in the
  viewport. The more height the spacer has, the slower the animation rate and
  the longer the animation is in the viewport.*

* Save the section.

* Add code from file **[page section video scrubbing animation.html][1]** to
  Page Settings > Advanced > Page Header Code Injection for the page. Read the
  code for any instructions within.

## Demos

You can see [demos of this effect here][2].

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2022-08-19**

  * add callback to adjust top
  * bumped version to 0.3.0
  
* **2022-08-14**

  * fix some spacing issues
  * bumped version to 0.2.0
  
* **2021-08-15**

  * initial version

[1]: page%20section%20video%20scrubbing%20animation.html#L1
[2]: https://toms-web-consulting-demos.squarespace.com/page-section-video-scrubbing-animation?password=twcdemos
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
