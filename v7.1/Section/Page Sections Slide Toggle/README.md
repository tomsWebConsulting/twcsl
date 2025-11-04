# Page Sections Slide Toggle

### [License][1]

### Synopsis

Add page section toggle effect to pages.

### Version

  * 0.8.1

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### Fluid Engine Compatible

  * Yes

---

## Install

* Add the following to Website > Pages > Custom Code > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[page sections slide toggle.html][5]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Refer to
      [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[page sections slide toggle.html][5]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][7] for details.
      
* Read the code for any instructions within.

* Add a section and set it's height to small. This whole section will become a
  clickable zone for the toggle effect.
  
  * Add a text block with text to be used as a label for the section.
  
  * Add a code block and add one of the following.
  
    * Arrow
    
      ```html
      <x-twc-psst>
      
        <svg class="twc-psst-arrow">
                
          <use xlink:href="#twc-psst-arrow">
                  
            </use>
            
          </svg>
          
        </x-twc-psst>
      ```
      
    * Plus
    
      ```html
      <x-twc-psst>
      
        <svg class="twc-psst-plus">
        
          <use xlink:href="#twc-psst-plus-horizontal" />
          
          <use xlink:href="#twc-psst-plus-vertical" />
          
          </svg>
          
        </x-twc-psst>
      ```
      
    Generally you will want to place the code block in horizontal alignment with
    the previous mentioned text block.
    
  * Optional Attributes
  
    Add attributes to the **&lt;x-twc-psst&gt;** opening tag.
    
    * data-section-count
    
      Toggle multiple sections. The default value when this attribute is not
      used is one. An example.
      
      ```html
      <x-twc-psst data-section-count="2">
      ```
      
      This effect does not check that you are using resonable values in the
      context of what you are building. If the wrong values are used it can
      cause unusual results.
      
* Add a section after the previous section and add whatever blocks you want to
  the section. This will be the content that gets toggled (hidden/shown).
  
* You can repeat the previous two (or more when using the data-section-count
  attribute) section pattern for as many toggle sections as you want.

## x-twc-psst-close tag

The **&lt;x-twc-psst-close&gt;** tag can be added to a code block at the end
of a section to close the section. This can be useful for long sections so you
don't have to scroll up to click and close the section.

* Arrow

  ```html
  <x-twc-psst-close>
  
    <svg class="twc-psst-arrow">
            
      <use xlink:href="#twc-psst-arrow">
              
        </use>
        
      </svg>
      
    </x-twc-psst-close>
  ```
  
* Plus

  ```html
  <x-twc-psst-close>
  
    <svg class="twc-psst-plus">
    
      <use xlink:href="#twc-psst-plus-horizontal" />
      
      <use xlink:href="#twc-psst-plus-vertical" />
      
      </svg>
      
    </x-twc-psst-close>
  ```

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-10-28**

  * fix for effect not working with FE
  * bumped version to 0.8.1
  
* **2024-08-17**

  * watch for hash change events and open appropiate section if it contains
    anchor link
  * bumped version to 0.8.0
  
* **2024-08-09**

  * use classes on classic editor row and columns that need display flex
  * bumped version to 0.7.1
  
* **2024-08-08**

  * make code work in editor
  * fix for summary blocks not laying out properly
  * bumped version to 0.7.0
  
* **2024-07-20**

  * adjust plus icon a bit for better alignment
  * add toggle icon justification feature
  * bumped version to 0.6.0
  
* **2024-06-12**

  * fix duration check
  * remove non-blank page sections from hide/show page section code
  * bumped version to 0.5.2
  
* **2024-04-16**

  * fix for Gallery section elements not showing images
  * bumped version to 0.5.1
  
* **2024-03-04**

  * add feature to toggle multiple sections
  * add feature to toggle sections from the end of a section
  * bumped version to 0.5.0
  
* **2023-04-12**

  * fix issue with data-toggle-color attribute not working
  * bumped version to 0.4.1
  
* **2023-02-08**

  * add plus toggle icon option
  * add fluid engine compatibility
  * bumped version to 0.4.0
  
* **2022-04-29**

  * user can override default toggle arrow color
  * code picks up a default color for toggle arrow from parent element
  * user can now use a text block with any Header or Paragraph style. previously
    the code only worked with Paragraph 2
  * update code for twc global, multiple effects can coexist
  * bumped version to 0.3.0
  
* **2021-07-28**

  * take a less tortuous route for CSS
  * fix for page section blocks being hidden without code block tag being set
  * bumped version to 0.2d2
  
* **2021-07-28**

  * fix for .nextUntil ( ) skipping .sqs-row
  * bumped version to 0.2d1
  
* **2021-07-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: page%20sections%20slide%20toggle.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
[9]: https://toms-web-consulting-demos.squarespace.com/page-sections-slide-toggle?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
