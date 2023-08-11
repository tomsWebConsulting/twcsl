# Store Product Details Reorder Desktop

### [License][1]

### Synopsis

Reorder store page product detail elements.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Product Details Display Flex Desktop][2]

---

## Install

* Add code from the following files, **in order**, to Store Settings >
  Advanced > Page Header Code Injection for the store page.
  
  * **[store product details natural order desktop.html][3]** <sup>[1][4]</sup>
  
  * **[store product details display flex desktop.html][5]** <sup>[2][2]</sup>
  
  * **[store product details reorder desktop.html][6]** 
  
    Read the code for any instructions within.
    
  Please see [Per-page code injection][7]. 
  
## Example Reorderings

  * Add to Cart button after Price
  
    ```css
          --add-to-cart-button : -1;
          --description : unset;
          --price : -1;
          --quantity : unset;
          --variants : unset;
    ```
    
  * Price, Variants, Quantity, Add to Cart, and Description
  
    ```css
        --add-to-cart-button : 4;
        --description : 5;
        --price : 1;
        --quantity : 3;
        --variants : 2;
    ```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2022-02-11**

  * add support for store detail page layouts
  * bumped version to 0.2.0
  
* **2021-10-07**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Store%20Product%20Details%20Display%20Flex%20Desktop#store-product-details-display-flex-desktop
[3]: https://github.com/tomsWebConsulting/twcsl/blob/main/v7.1/Store%20Product%20Details%20Natural%20Order%20Desktop/store%20product%20details%20natural%20order%20desktop.html#L1
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Store%20Product%20Details%20Natural%20Order%20Desktop#store-product-details-natural-order-desktop
[5]: https://github.com/tomsWebConsulting/twcsl/blob/main/v7.1/Store%20Product%20Details%20Display%20Flex%20Desktop/store%20product%20details%20display%20flex%20desktop.html
[6]: store%20product%20details%20reorder%20desktop.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
