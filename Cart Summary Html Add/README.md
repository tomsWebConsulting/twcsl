# Cart Summary Html Add

### [License][1]
    
### Version 0.1.0

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatibility : Not Applicable

---

## Install

* Install [Cart Page Observe Changes][2]. After you install Cart Page Observe
  Changes be sure to continue on with the rest of the steps.
  
* Add code from file **[cart summary html add.html][3]** to Settings >
  Advanced > Code Injection > FOOTER **before** the **cart page observe
  changes** code. In the **cart page observe changes** code set the
  nodesAddedCallback constant to cartSummaryHtmlAdd.
  
```javascript
    const nodesRemovedCallback = cartSummaryHtmlAdd;
  ```
  
  Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][4].

## Changes

<!-- * **2021-05-08**

  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  -->
* **2022-12-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Cart%20Page%20Observe%20Changes#cart-page-observe-changes
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/Cart%20Summary%20Html%20Add#cart-summary-html-add
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
