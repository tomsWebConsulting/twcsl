# Store Page Detail Details Reorder Desktop

### [License][1]

### Synopsis

Reorder store page product detail elements.

### Version

  * 0.4.0

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
  
  * **[store page detail details reorder desktop.html][6]** 
  
  Refer to [Per-page code injection][7] for details.
  
* Read the code for any instructions within.

## Example Reorderings

  * Add to Cart button after Price
  
    ```css
        --add-ons : unset;
        --add-to-cart-button : -1;
        --description : unset;
        --price : -1;
        --quantity : unset;
        --title : unset; /* full, half, wrap layout only */
        --variants : unset;
    ```
    
  * Price, Variants, Quantity, Add to Cart, and Description
  
    ```css
        --add-ons : unset;
        --add-to-cart-button : 4;
        --description : 5;
        --price : 1;
        --quantity : 3;
        --title : unset; /* full, half, wrap layout only */
        --variants : 2;
    ```
    
  * Price after Description
  
    ```css
        --add-ons : unset;
        --add-to-cart-button : unset;
        --description : -1;
        --price : unset;
        --quantity : unset;
        --title : -1; /* full, half, wrap layout only */
        --variants : unset;
    ```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2023-11-02**

  * add support for add ons
  * bumped version to 0.4.0
  
* **2023-10-23**

  * add support for title element of store layouts half, full, wrap
  * bumped version to 0.3.0
  
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
[6]: store%20page%20detail%20details%20reorder%20desktop.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
