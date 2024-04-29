# Cart Page Observe Changes

### [License][1]
    
### Synopsis

Limit the number of characters allowed in form block fields.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[cart page observe changes.html][4]** to Website >
  Pages > Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][5]. Read the code for any instructions within.

## Example Callbacks

Following are example callbacks. They doen't do anything except log to the
console nodes that were added or removed to/from the cart page. Add your
callbacks **before** the cart page observe changes code.

```html
<script>

  const cpocNodeAddedLog = ( node ) => {
  
    console.log ( 'cpocNodeAddedLog : ', node );
    
    };
    
  </script>
```

```html
<script>

  const cpocNodeRemovedLog = ( node ) => {
  
    console.log ( 'cpocNodeRemovedLog : ', node );
    
    };
    
  </script>
```

In your callbacks you will probably want to check the node to see if it is one
in which you are interested. For example.

```html
<script>

  const cartContinaerLog = ( node ) => {
  
    const b = node.querySelector === undefined;
    
    if ( b ) return; // bail if no querySelector
    
    const selector = '.cart-container';
    
    node = node
    
      .querySelector ( selector );
      
    if ( node === null ) return; // bail if no cart container
    
    console.log ( 'cartContinaerLog : ', node );
    
    };
    
  </script>
```

## Make a Donation

Please consider [making a donation][6].

## Changes

* **2024-04-28**

  * improved handling of nodes
  * removed dependency on jQuery
  * bumped version to 0.2.0
  
* **2022-02-25**

  * changed a const name, no functional changes
  * added example callback to read me
  * bumped version to 0.1d1
  
* **2022-01-16**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: cart%20page%20observe%20changes.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
