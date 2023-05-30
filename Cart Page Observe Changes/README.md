# Cart Page Observe Changes

### [License][1]
    
### Version 0.1d1

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Not Applicable

---

## Quick Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  ```
  
* Add code from file **[cart page observe changes.html][2]** to Add the
  following to Settings > Developer Tools > Code Injection > FOOTER. Read the
  code for any instructions within.

## Example Callback

Following is an example callback. It doesn't do anything except log to the
console nodes that were added to the cart page. Add your callbacks **before**
the cart page observe changes code.

```html
<script>

  const cpocNodeAddedLog = ( $node ) => {
  
    console.log ( $node );
    
    };
    
  </script>
```

In a real callback you are going to want to check $node to see if it is a node
you are interested in.

```html
<script>

  const cpocNodeAddedLog = ( $node ) => {
  
    if ( ! $node.hasClass ( 'checkout' ) ) return; // bail if not checkout
    
    console.log ( $node );
    
    };
    
  </script>
```

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2022-02-25**

  * changed a const name, no functional changes
  * added example callback to read me
  * bumped version to 0.1d1
  
* **2022-01-16**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: cart%20page%20observe%20changes.html#L1
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
