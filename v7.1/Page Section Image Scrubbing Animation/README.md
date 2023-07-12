# Page Section Image Scrubbing Animation

### [License][1]

### Synopsis

Add image scrubbing effect to a page section.

### Version

  * 0.5.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[page section image scrubbing animation.html][2]** to
  Page Settings > Advanced > Page Header Code Injection for the page. Please see
  [Per-page code injection][3].
  
* Add an empty section.

* Edit the section.

* Add a background image that represents the animation. The image is used as a
  placeholder while the animation loads or if the animation can't be loaded.

* Set the Overlay Opacity to 0%. Unless of course you want the overlay.

* Options

  * Fluid Engine
  
    * Add a code block. I suggest tucking it in the upper left of the grid. Make
      it about 3 rows high and half the grid width wide.
    
    * Set the Row Count to 50, as a starting point.
    
  * Classic Editor
  
    * Add a code block above the text block.
    
    * Delete the text block.
    
    * Add a spacer block below the code block. Make the height about 1000
      pixels, as a starting point.

    **The Row Count and spacer block are used to control the animation rate and
    how long the animation stays in the viewport. The greater the Row Count or
    height of the Spacer block, the slower the animation rate and the longer the
    animation is in the viewport.**
    
* Add the following to the code block.

  ```html
  <x-twc-psisa/>
  ```
  
* Save the section.

* Images Source
  
  There are three ways you can source the images for the animation.
  
  * Gallery Section
  
    This method has the advantage of more easily using images in your site.
    
    * Above the previous section add a Gallery section. Choose a simple grid
      layout as the section is only being used for to get the URLs for the
      images for the animation. There is no need for fancy styling as once the
      URLs are retrived the section will be deleted. Be sure to remove the
      default images.
      
      ![add gallery section][4]
      
    * Add the images for your animation to the section. Order is important. If
      you add them in the proper order then the process will go more smoothly. I
      have found working with arranging images in the UI can be a pain
      sometimes. Adding a lot of images at once can be challenging. I found
      batches of 25 to 50 are more workable, most of the time. At times I've
      been able to upload around 200 images without issue.
      
    * For the first image set the Description to **twc-psisa**.
    
    * Save the section.
    
  * x-twc-psisa Tag
  
    Image URLs can be added to the x-twc-psisa tag that was added to the
    code block mentioned previously.
    
    * Replace **<x-twc-psisa/>** with the following.
    
      ```html
      <x-twc-psisa>
      
        <!--
        
          repeat the following for as many images as needed for your animation
          
          -->
          
        [enter an image url here replacing square brackets]
        
        </x-twc-psisa>
      ```
      
  * Code Block script Tag
  
    Image URLs can be added programmatically using a script tag.
    
    * Set the content of the code block mention previously to the following. The
      code shown is an example. You will of course need to write your own custom
      script or [hire a consultant][5].
      
      ```html
      <!-- begin programmatically -->
      
        <x-twc-psisa/>
        
        <script>
        
          if ( window.twc == undefined ) window.twc = { };
          
          if ( twc.psisa == undefined ) twc.psisa = { };
          
          twc.psisa.imageUrls = ( ( ) => {
          
            const imageUrls = [ ];
            
            for ( i = 1; i < 181; i++ ) {
            
              const n = i
              
                .toString ( )
                
                .padStart ( 3, '0' );
                
              imageUrls [ i - 1 ] =
              
                `https://www.example.com/image-file-name${ n }.jpg`;
                
              }
              
            return imageUrls;
            
            } ) ( );
            
          </script>
          
        <!-- end programmatically -->
      ```

## Attributes

**There are a two attributes that can be added to the x-twc-psisa tag.**

* data-background-color
  
  By default the code will get the background color of the page section after
  the page section with the **x-twc-psisa** tag. Adding this attribute
  overrides the default value. The value is a valid color.
  
  ```html
  <x-twc-psisa data-background-color="red">
  
    </x-twc-psisa>
  ```
  
* data-animation-ends-before-leaving-viewport
  
  By default the animation completes before leaving viewport.  To have the
  animation continue as the page section leaves the viewport set the value the
  false.
  
  ```html
  <x-twc-psisa data-animation-ends-before-leaving-viewport="false">
  
    </x-twc-psisa>
  ```

## Callbacks

A script tag can be added to the code block mentioned previously to affect how
this effect works.

  * initialize
  
    initialize is called after the main initialization of the main code. An
    object with the following parameters is passed to the callback :
    
      canvasContext, imagesCount, $canvas, $pageSection
      
  * resize
  
    resize is called after the window is resized. An object with the following
    parameters is passed to the callback :
    
      canvasContext, $canvas, $pageSection
      
  * top
  
    top is called to adjust the top variable. Normally the animation starts when
    the page section reaches the bottom of the header or the top of the viewport
    when the header is not fixed. This top callback lets you override the
    default behavior. The following parameters are passed to the callback :
    
      top, $sectionBackground
      
  * update
  
    update is called after the image is updated. An object with the following
    parameters is passed to the callback :
    
      canvasContext, imageIndex, imagesCount, $canvas, $pageSection
      
  Following is an example callback.
  
  ```html
  <script>
  
    if ( window.twc == undefined ) window.twc = { };
    
    twc.psisa = {
    
      callback : {
      
        initialize : p => {
        
          [your code here]
          
          },
          
        },
      
      };
      
    </script>
  ```
  
## Note

This effect is not active in SS Preview to test it use [private browsing][6].

## Demos

You can see [demos of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2023-07-11**

  * add ability to pull image URLs from Gallery section
  * bumped version to 0.5.0
  
* **2023-06-28**

  * fluid engine compatible
  * animation now completes before leaving viewport, previous behaviour
    preserved with data-animation-ends-before-leaving-viewport="false" attribute
    on x-twc-psvsa tag
  * bumped version to 0.4.0
  
* **2023-06-26**

  * fix for changes SS made to section backgrounds
  * bumped version to 0.3.1
  
* **2022-08-19**

  * add callback to adjust top
  * bumped version to 0.3.0
  
* **2022-08-14**

  * fix some spacing issues
  * bumped version to 0.2.0
  
* **2021-08-15**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: page%20section%20image%20scrubbing%20animation.html#L1
[3]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[4]: read%20me%20assets/add%20gallery%20section.png
[5]: https://github.com/tomsWebConsulting/twcsl#need-help-installing-or-customizing-the-code
[6]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[7]: https://toms-web-consulting-demos.squarespace.com/page-section-image-scrubbing-animation?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
