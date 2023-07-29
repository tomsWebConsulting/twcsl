# Text Block Text Class Add

### [License][99]

### Version 0.2.0

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Page Specific Effect

  * Add code from file **[text block text class add.html][1]** to
    Page Settings > Advanced > Page Header Code Injection for the page. Please
    see [per-page code injection][2]. Read the code for any instructions
    within.
    
* Site-wide Effect

  * Add code from file **[text block text class add.html][1]** to Settings >
    Developer Tools > Code Injection > FOOTER.

## How To Use

As this is a base effect it is up to you to design your CSS using the tools
this code gives you. I can provide some basic guidance on getting a start on
your code by way of a vertical tab example.

First you need to layout a page section similar to the following.

![tabs layout](read%20me%20assets/tabs%20layout.png)

The above is a basic two column layout. Left containing your tab labels. Right
containing the detail of each tab. Notice the code block in the left column. Add
the following to it.

```html
<x-twc-tbtca/>
```

This tells the code that this column contains the tab labels. Also note the use
of line blocks to keep the text from collapsing into a single text block when
editing.

Following is example CSS.

```css
/* hide the blocks */

html:not( .squarespace-damask ) #page-section-628d8e17fbb0f46fdf5d3c47 .sqs-row > .sqs-col-12 > .sqs-row:first-child .sqs-block {

  visibility : hidden;
  
  }
  
/* show the blocks */

html:not( .squarespace-damask ) #page-section-628d8e17fbb0f46fdf5d3c47 .sqs-row > .sqs-col-12 > .sqs-row:first-child.twc-tbtca .sqs-block {

  visibility : unset;
  
  }
  
/* hide the line blocks and text blocks that are not labels */

.twc-tbtca .sqs-block-horizontalrule,
.twc-tbtca .sqs-block-html:not( .twc-tbtca-label )

  {
  
    display : none;
    
    }
    
/* show detail when label is selected */

.twc-tbtca-Dream-It #block-yui_3_17_2_1_1653444109200_3133,
.twc-tbtca-Build-It #block-yui_3_17_2_1_1653444109200_7841,
.twc-tbtca-Make-It #block-yui_3_17_2_1_1653444109200_9540

  {
  
    display : block;
    padding-top : 0;
    
    }
    
/* begin styling for labels */

  .twc-tbtca-label:hover {
  
    cursor : pointer;
    
    }
    
  .twc-tbtca-label:hover .sqs-block-content * {
  
    font-weight : bold;
    
    }
    
  .twc-tbtca-Dream-It [data-twc-tbtca-class="twc-tbtca-Dream-It"] .sqs-block-content *,
  .twc-tbtca-Build-It [data-twc-tbtca-class="twc-tbtca-Build-It"] .sqs-block-content *,
  .twc-tbtca-Make-It [data-twc-tbtca-class="twc-tbtca-Make-It"] .sqs-block-content *
  
    {
    
      font-weight : bold;
      
      }
      
  /* end styling for labels */
```

You would of course change page section and block ids to match your page. Where
you put the CSS depends on the effect you are trying to achieve.

## Note

This code is a base effect for other effects. This code alone shouldn't produce
any visible change.

## Demo

You can see a [demo of this effect here][3].

## Make a Donation

Please consider [making a donation][4].

## Changes

* **2022-06-11**

  * change twc-tbtca-tab-label to twc-tbtca-label
  * add class to label column to differentiate it from other columns
  * bumped version to 0.2.0
  
* **2022-05-24**

  * initial version

[1]: text%20block%20text%20class%20add.html#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[3]: https://toms-web-consulting-demos.squarespace.com/text-block-text-class-add?password=twcdemos
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
