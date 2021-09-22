# Cart Prices Change

### Version 0.2d0

#### SS Versions 7.1, 7.0

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d15/twcsl.js"></script>
```

Add code from file
**[cart prices change.html](cart%20prices%20change.html#L1)**
to Settings > Advanced > Code Injection > FOOTER.

## searchReplaceText Example Lines

```javascript
      '$' : '', // remove dollar sign
  ```

```javascript
      '/.*?\\d+(?:,\\d{3})*(?:\\.\\d{2})?/' : x828dc1d3, // replacement text function name
  ```

## Note

Changing prices on the cart page does not effect the store/product
pages, checkout, or other SS pages/backend storage. This is purely a cosmetic
change. No code can change the checkout page. It is an SS security feature.

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-09-21**

  * use mutation observer to watch price elements instead of events on quantity
  * bumped version to 0.2d0
  
* **2021-09-04**

  * when quantity is changed run search replace for changed item and subtotal
  * bumped version to 0.1d2
  
* **2021-08-29**

  * added missing is cart page check
  * bumped version to 0.1d1
  
* **2021-08-27**

  * initial version
