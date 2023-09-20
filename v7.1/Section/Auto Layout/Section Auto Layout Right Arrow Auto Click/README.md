# Section Auto Layout Right Arrow Auto Click

### [License][1]

### Synopsis

Auto click right arrow of Auto Layout section.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[section auto layout right arrow auto
      click.html][5]** to Page Settings > Advanced > Page Header Code Injection
      for the page. Please see [Per-page code injection][6]. Read the code for
      any instructions within.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[section auto layout right arrow auto
      click.html][5]** to Settings > Developer Tools > Code Injection > FOOTER.
      Please see [Add code to code injection][7]. Read the code for any
      instructions within.

* Settings
  
  There are global and Auto Layout section settings. You can use both or either.

  * Global
    
    For a global effect add the following to Settings > Developer Tools >
    Code Injection > HEADER.
    
    ```html
    <x-twc-alraac data-click-interval-seconds="6" data-kill-upon-user-action="true"/>
    ```
    
    * Attributes
    
      * data-click-interval-seconds
        
        The interval in seconds between clicks.
        
      * data-kill-upon-user-action
        
        Values are **true** or **false**. True means stop auto clicking if
        the user interacts with the section.
        
  * Auto Layout
  
    * For a per Auto Layout section specific effect add the following to the
      Title Text on a line by itself.
      
      ```text
      twc-alraac : { "clickIntervalSeconds" : 6, "killUponUserAction" : true }
      ```
      
      * Properties
        
        When used these properties override global settings, when global settings
        are used.
        
        * clickIntervalSeconds
          
          The interval in seconds between clicks. If the value is **-1** then
          the auto click will be disabled for the particular Auto Layout
          section.
          
        * killUponUserAction
          
          Values are **true** or **false**. True means stop auto clicking if the
          user interacts with the section.

## Note

Only slideshow banner and carousel auto layouts are supported.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-09-19**
  
  * added support for global or section specific effects
  * bumped version to 0.3.0
  
* **2022-02-18**
  
  * fix for auto clicks closing lightbox forms
  * bumped version to 0.2.3
  
* **2022-02-18**
  
  * target mobile right arrow for click. it is there regardless of arrow setting
  * bumped version to 0.2d2
  
* **2021-12-05**
  
  * removed extra dataSectionIds push line
  * bumped version to 0.2d1
  
* **2021-08-15**
  
  * added kill upon user action
  * bumped version to 0.2d0
  
* **2021-07-10**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: section%20auto%20layout%20right%20arrow%20auto%20click.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/auto-layout-right-arrow-auto-click?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
