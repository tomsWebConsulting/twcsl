# Product Quick View Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox product quick view and call custom
callbacks as nodes are added to the [DOM][2].

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Modal Lightbox Observe Changes][5]

---

## Install

* Install [Modal Lightbox Observe Changes][5]. After you install the code be
  sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[product quick view observe changes.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the page,
      **before** the modal lightbox observe changes code. Please see
      [Per-page code injection][7].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple elements such
      as a store page and product blocks where you want to have this effect.
      
    * Add code from file **[product quick view observe changes.html][6]**
      to Website > Pages > Website Tools > Code Injection > FOOTER, **before**
      the modal lightbox observe changes code. Please see [Add code to code
      injection][8].
      
* Add the **twcPqvoc** callback name to the modal lightbox observe changes code
  code per that codes install instructions.
  
* If you need installation help or customization please [contact me for paid
  consulting][9].

## Callbacks

Your callbacks must accept a node as a parameter.

Following is a very generalized example of a callback. The callback(s) must be
defined before the code of this effect. Note the use of var.

```html
<script>

  var pqvocNodeAddedLog = ( node ) => {
  
    console.log ( 'pqvocNodeAddedLog : ', node );
    
    };
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  -->
* **2024-05-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes#modal-lightbox-observe-changes
[6]: product%20quick%20view%20observe%20changes.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://github.com/tomsWebConsulting/twcsl#need-help-installing-or-customizing-the-code
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
