# Header Menu Mobile Outline

### [License][1]

### Synopsis

Format mobile menu as an outline.

### Version

  * 0.6.0

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Add code from file **[header menu mobile outline.less][6]** to Website >
    Pages > Custom Code > Custom CSS. Refer to [Add CSS code][7] for details.
    
  * Add code from file **[header menu mobile outline options.html][8]** to
    Website > Pages > Custom Code > Code Injection > FOOTER. Read the code for
    instructions within.
    
  * Add the following code to Website > Pages > Custom Code > Code Injection >
    FOOTER.
    
    ```html
    <!-- begin TWC Header Menu Mobile Outline -->
    
      <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
      
      <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@67ad21ab15526070cc5fd24e7379d6891640ba0a/v7.1/Element/Header/Header%20Menu%20Mobile%20Outline/header%20menu%20mobile%20outline.min.js" type="module"></script>
      
      <!-- end TWC Header Menu Mobile Outline -->
      
    ```
    
   Refer to [Add code to the header and footer][9] for details.
    
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Add code from file **[header menu mobile outline.less][6]** to Website >
    Pages > Custom Code > Custom CSS. Refer to [Add CSS code][7] for
    details.
    
  * Add code from file **[header menu mobile outline options.html][8]** to
    Website > Pages > Custom Code > Code Injection > FOOTER. Read the code for
    instructions within.
    
  * Add code from file **[header menu mobile outline.html][10]** to Website >
    Pages > Custom Code > Code Injection > FOOTER.
    
  * Refer to [Add code to the header and footer][9] for details.

## Callbacks

You can optionally add [callback][11] functions to further customize the
newly created menu outline element. Your callbacks must accept an element as a
parameter. Callbacks are run in the order the browser processes them, so order
can be important. Following is a minimal example of a callback.

```html
<script>

  ( ( ) => {
  
    // initialize twc module
    
    window.twc =
    
      ( ( self ) => self  )
      
      ( window.twc || { } );
    
    // initialize twc hmmo sub-module
    
    twc.hmmo =
    
      ( ( self ) =>  self )
      
      ( twc.hmmo || { } );
    
    // initialize twc hmmo callbacks sub-module
    
    twc.hmmo.callbacks =
    
      ( ( self ) => {
      
        const callback = ( element ) => {
        
          console.log ( 'hmmo log element : ', element );
          
          };
          
        self.push ( callback );
        
        return self;
        
        } )
        
      ( twc.hmmo.callbacks || [ ] );
      
    } ) ( );
    
  </script>

```

## Demo

You can see a [demo of this effect here][12].

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2026-04-01**

  * added support for user callbacks
  * restructured code
  * moved options from LESS based to JavaScript
  * bumped version to 0.6.0
  
* **2025-11-28**

  * moved options out of main code
  * fixed syntax errors reported by Squarespace CSS editor
  * removed jQuery dependency
  * bumped version to 0.5.0
  
* **2024-12-31**

  * added icon active feature
  * restructured code
  * bumped version to 0.4.0
  
* **2023-08-30**

  * added expandable feature
  * bumped version to 0.3.0
  
* **2023-03-29**

  * fixed user accounts info showing when it shouldn't
  * bumped version to 0.2.2
  
* **2023-03-22**

  * fixed menu not being built in editor
  * bumped version to 0.2.1
  
* **2022-04-30**

  * fixed blowing away menu action and cta elements
  * fixed layout issues, use ul instead of divs
  * bumped version to 0.2.0
  
* **2021-11-21**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: header%20menu%20mobile%20outline.less#L1
[7]: https://support.squarespace.com/hc/en-us/articles/206545567-Add-custom-CSS-to-your-site#h_01JNK62X86KV65WDJ9D9HY1J8C
[8]: header%20menu%20mobile%20outline%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[11]: https://en.wikipedia.org/wiki/Callback_(computer_programming)
[10]: header%20menu%20mobile%20outline.html#L1
[12]: https://toms-web-consulting-demos.squarespace.com/header-menu-mobile-outline/header-menu-mobile-outline?password=twcdemos
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
