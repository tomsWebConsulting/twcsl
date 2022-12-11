# Page Sections Slide Toggle

### [License][99]

### Version 0.3.0

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  ```
  
* Add code from file **[page sections slide toggle.html][1]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Read the code for any instructions within.
  
* For each page section you want to be able to toggle.

  * Set it's height to small and alignment to top in the SS editor.
  
  * Add a code block as the first block for the page section.
  
  * In the code block add the following.
  
    ```html
    <x-twc-psst></x-twc-psst>
    ```
    
  * After the code block add a text block with text to be used as a label for
    the page section.
    
  * From there you can add whatever blocks you want to the section.

## Note

You can add a **data-toggle-arrow-color** attribute to the
**&lt;x-twc-psst&gt;&lt;/x-twc-psst&gt;** tag to override the default color the code picks
for the toggle arrow. An example.

```html
<x-twc-psst data-toggle-arrow-color="red"></x-twc-psst>
```

## Demo

You can see a
[demo of this effect here](https://toms-web-consulting-demos.squarespace.com/page-sections-slide-toggle?password=twcdemos).

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2022-04-29**

  * user can override default toggle arrow color
  * code picks up a default color for toggle arrow from parent element
  * user can now use a text block with any Header or Paragraph style. previously
    the code only worked with Paragraph 2
  * update code for twc global, multiple effect can coexist
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

[1]: page%20sections%20slide%20toggle.html#L1
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
