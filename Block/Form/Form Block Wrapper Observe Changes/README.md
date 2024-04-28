# Form Block Wrapper Observe Changes

### [License][1]

### Synopsis

Observe changes to the form wrapper of a form block and call custom callbacks as
nodes are added or removed from the [DOM][2].

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [jQuery][5]

---

## Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[form block wrapper observe changes.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Please
      see [Per-page code injection][7]. Read the code for any instructions
      within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple pages where
      you want to have this effect.
      
    * Add code from file **[form block wrapper observe changes.html][6]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][8]. Read the code for any instructions within.
      
* Add or edit a form block.

* Add a Line field with a LABEL of **twc-fbwoc** and DESCRIPTION of the
  following...
  
  ```
  "callbacks" : {
  
    "added" : "[optional, enter callback names here replacing square brackets]",
    
    "removed" : "[optional, enter callback names here replacing square brackets]"
    
    }
  ```
  
  Where indicated add the name(s) of your callback(s). Added and removed are
  optional. You can supply one callback or a list of callbacks seperated by
  comma space for example **callback1, callback2**.

## Callbacks

Your callbacks must accept a jQuery object as a parameter.

Following is a very generalized example of a callback. The callback(s) must be
defined before the code of this effect. Note the use of var.

```html
<script>

  var myNamedFunction = ( $node ) => {
  
    console.log ( 'myNamedFunction : ', $node );
    
    };
    
  </script>
```

## Notes

This code is a base for other effects. This effect is not active in SS Preview
to test it use [private browsing][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-04-27**

  * restructured the code
  * fix for user callbacks not running
  * bumped version to 0.3.0
  
* **2023-10-09**

  * remove some guard checks that prevented some nodes being passed to callbacks
  * bumped version to 0.2.1
  
* **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  
* **2023-07-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://jquery.com/
[6]: form%20block%20wrapper%20observe%20changes.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
