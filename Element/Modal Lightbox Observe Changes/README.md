# Modal Lightbox Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox and call custom callbacks as nodes are
added to the [DOM][2].

### Version

  * 0.1.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[modal lightbox observe changes.html][5]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Refer to
      [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple elements such as a store page and
      product blocks where you want to have this effect.
      
    * Add code from file **[product quick view observe changes.html][5]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Refer to [Add
      code to code injection][7] for details.
      
* Read the code for any instructions within.

* Add your callback names to the code.

## Callbacks

Your callbacks must accept a node as a parameter.

Following is a very generalized example of a callback. The callback(s) must be
defined before the code of this effect. Note the use of var.

```html
<script>

  var mlocNodeAddedLog = ( node ) => {
  
    console.log ( 'mlocNodeAddedLog : ', node );
    
    };
    
  </script>
```

## Note

This code is a base for other effects.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2024-05-23**

  * minor tweaks, no functional changes
  * bumped version to 0.1.1
  
* **2024-05-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: modal%20lightbox%20observe%20changes.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
