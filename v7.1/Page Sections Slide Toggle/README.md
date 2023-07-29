# Page Sections Slide Toggle

### [License][1]

### Version 0.4.1

#### SS Version 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

#### Fluid Engine Compatible

  * Yes

--

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[page sections slide toggle.html][5]** to Page Settings >
  Advanced > Page Header Code Injection for the page. Read the code for any
  instructions within.
  
* Add a section and set it's height to small. This whole section will become a
  clickable zone for the toggle effect.
  
  * Add a text block with text to be used as a label for the section.
  
  * Add a code block and add the following.
  
    ```html
    <x-twc-psst></x-twc-psst>
    ```
    
    You can add a **data-toggle-color** attribute to the **&lt;x-twc-psst
    &gt;&lt;/x-twc-psst&gt;** tag to override the default color the code picks
    for the toggle icon. An example.
    
    ```html
    <x-twc-psst data-toggle-color="red"></x-twc-psst>
    ```
    
    You can add a **data-toggle-icon** attribute to the **&lt;x-twc-psst
    &gt;&lt;/x-twc-psst&gt;** tag to override the default toggle icon. An
    example.
    
    ```html
    <x-twc-psst data-toggle-icon="plus"></x-twc-psst>
    ```
    
    This code block will become the toggle icon. Generally you will want to
    place the code block in horizontal alignment with the previous mentioned
    text block.
    
* Add a section after the previous section and add whatever blocks you want to
  the section. This will be the content of that gets hidden/shown.
  
* You can repeat the previous two section pattern for as many toggle sections as
  you want.

## Demo

You can see a [demo of this effect here][6].

## Make a Donation

Please consider [making a donation][7].

## Changes

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
[6]: https://toms-web-consulting-demos.squarespace.com/page-sections-slide-toggle?password=twcdemos
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
