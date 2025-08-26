# Product Quick View Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox product quick view and call custom
callbacks as nodes are added to the [DOM][2].

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Products V2 Compatible

  * Yes
  
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
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[product quick view observe changes
      options.html][6]** to Page Settings > Advanced > Page Header Code
      Injection for the page. Refer to [Per-page code injection][7] for details.
      
    * Add code from file **[product quick view observe changes.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the page.
      
  * Site-wide
  
    * Use this option if you have multiple elements such as a store page and
      product blocks where you want to have this effect.
      
    * Add code from file **[product quick view observe changes
      options.html][6]** to Website > Pages > Custom Code > Code Injection >
      FOOTER. Refer to [Add code to code injection][9] for details.
      
    * Add code from file **[product quick view observe changes.html][8]** to
      Website > Pages > Custom Code > Code Injection > FOOTER.
      
* Add the **twcPqvoc** callback name to the modal lightbox observe changes code
  code per that codes install instructions.
  
* If you need installation help or customization please [contact me for paid
  consulting][10].

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

Please consider [making a donation][11].

## Changes

* **2025-08-25**

  * moved options out of main code
  * updated to work with v7.1 Products V2
  * bumped version to 0.2.0
  
* **2024-05-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Modal%20Lightbox%20Observe%20Changes#modal-lightbox-observe-changes
[6]: product%20quick%20view%20observe%20changes%20options.html#L1
[8]: product%20quick%20view%20observe%20changes.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://github.com/tomsWebConsulting/twcsl#need-help-installing-or-customizing-the-code
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
