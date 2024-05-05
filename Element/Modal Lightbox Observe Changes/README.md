# Modal Lightbox Observe Changes

### [License][1]

### Synopsis

Observe changes to the modal lightbox and call custom callbacks as nodes are
added to the [DOM][2].

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].

---

## Install

* Add code from file **[modal lightbox observe changes.html][5]** to Website >
  Pages > Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][6]. Read the code for any instructions within.
  
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

Please consider [making a donation][7].

## Changes

<!-- * **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  -->
* **2024-05-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: form%20block%20wrapper%20observe%20changes.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
