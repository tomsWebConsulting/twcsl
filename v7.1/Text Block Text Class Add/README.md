# Text Block Text Class Add

### Version 0.1.0

#### SS Version 7.1

---

## Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  ```
  
* Site-wide Effect

  * Add code from file **[text block text class add.html][1]** to Settings >
    Advanced > Code Injection > FOOTER.
    
* Page Specific Effect

  * Add code from file **[text block text class add.html][1]** to
    Page Settings > Advanced > Page Header Code Injection for the page. Please
    see [per-page code injection][2]. Read the code for any instructions
    within.
    
## How To Use

As this is a base effect it is up to you to design your CSS using the tools
this code gives you. I can provide some basic guidance on getting a start on
your code.

First you need to layout a page section similar to the following.

![tabs layout](read%20me%20assets/tabs%20layout.png)

The basic above is two columns. Left containing your tab labels. Right
containing each tabs detail. Notice the code block in the left column. Add the
following to it.

```html
<x-twc-tbtca></x-twc-tbtca>
```

This tells the code that this column contains the tab labels. Also note the use
of line blocks to keep the text from collapsing into a single text block when
editing.

Following is example CSS.

```css

/* hide the blocks */

html:not( .squarespace-damask ) #page-section-628c141547351548fbd44951 .sqs-row > .sqs-col-12 > .sqs-row:first-child .sqs-block {

  visibility : hidden;
  
  }
  
/* show the blocks */

html:not( .squarespace-damask ) #page-section-628c141547351548fbd44951 .sqs-row > .sqs-col-12 > .sqs-row:first-child.twc-tbtca .sqs-block {

  visibility : unset;
  
  }
  
/* hide the line blocks and text blocks that are not tab labels */

.twc-tbtca .sqs-block-horizontalrule,
.twc-tbtca .sqs-block-html:not( .twc-tbtca-tab-label )

  {
  
    display : none;
    
    }
    
/* show tab detail when tab is selected */

.twc-tbtca-Dream-It #block-yui_3_17_2_1_1653363874270_6337,
.twc-tbtca-Build-It #block-yui_3_17_2_1_1653347622381_5745,
.twc-tbtca-Make-It #block-yui_3_17_2_1_1653347622381_7491

  {
  
    display : block;
    padding-top : 0;
    
    }
    
/* begin styling for tabs */

  .twc-tbtca-tab-label:hover {
  
    cursor : pointer;
    
    }
    
  .twc-tbtca-tab-label:hover .sqs-block-content * {
  
    font-weight : bold;
    
    }
    
  .twc-tbtca-Dream-It [data-twc-tbtca-class="twc-tbtca-Dream-It"] .sqs-block-content *,
  .twc-tbtca-Build-It [data-twc-tbtca-class="twc-tbtca-Build-It"] .sqs-block-content *,
  .twc-tbtca-Make-It [data-twc-tbtca-class="twc-tbtca-Make-It"] .sqs-block-content *
  
    {
    
      font-weight : bold;
      
      }
      
  /* end styling for tabs */

```

You would of course change page section and block ids to match your page.

## Note

This code is a base effect for other effects. This code alone shouldn't produce
any visible change.

## Demo

You can see a [demo of this effect here][3].

## Make a Donation

Please consider [making a donation][4].

## Changes

<!-- * **2022-05-10**

  * support for v7.1 product detail layouts
  * use twcsl
  * bumped version to 0.2.0
  -->
* **2022-05-24**

  * initial version

[1]: text%20block%20text%20class%20add.html#L1
[2]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[3]: https://toms-web-consulting-demos.squarespace.com/text-block-text-class-add?password=twcdemos
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
