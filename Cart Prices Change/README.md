# Cart Prices Change

### [License][1]

### Version

  * 0.3.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Unknown

---

## Quick Install

* Install the code from **[Cart Page Observe Changes][2]**. In the code find the
  following line.
  
  ```javascript
      const nodesAddedCallback = undefined;
  ```
  
  Change **undefined** to **cpc**.
  
* Add code from file **[cart prices change.html][3]** to Website > Website
  Tools > Code Injection > FOOTER **before** the Cart Page Observe Changes code.
  
* Read the code for any instructions within.

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

Please consider [making a donation][4].

## Changes

* **2022-06-21**

  * fix regression for quantity changes
  * bumped version to 0.3.1
  
* **2022-06-21**

  * use cart page observe changes
  * bumped version to 0.3.0
  
* **2022-03-29**

  * twcsl 0.2d0 reformat
  * update classes because of SS changes
  * bumped version to 0.2d1
  
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

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[3]: cart%20prices%20change.html#L1
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
