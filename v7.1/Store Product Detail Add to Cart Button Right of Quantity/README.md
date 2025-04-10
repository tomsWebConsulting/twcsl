# Store Product Detail Add to Cart Button Right of Quantity

### [License][99]

### Version

  * 0.3d1

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Unknown

---

## Quick Install

* Install the code from
  **[Store Product Details Natural Order Desktop](https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Store%20Product%20Details%20Natural%20Order%20Desktop#store-product-details-natural-order-desktop)**.
  
* Install the code from
  **[Store Product Detail One Left Class Add](https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Product%20Detail%20One%20Left%20Class%20Add#store-product-detail-one-left-class-add)**.
  
* Add code from file
  **[store product detail add to cart button right of quantity.html](store%20product%20detail%20add%20to%20cart%20button%20right%20of%20quantity.html#L1)**
  to Store Settings > Advanced > Page Header Code Injection for the store page.

## Note

Displaying the atcb to the right of quantity creates some complexities not
present with the SS default CSS. I have tried to take care of the broad strokes
but you may find for your particular use case some display issues. Things not
being aligned the way one would hope. Some of the issues might be addressed with
more CSS. I think some may not be easily addressed.

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-09-20**

  * try to better cover user text alignment choices
  * drop jQuery code
  * roll back to using a grid
  * bumped version to 0.3d1
  
* **2021-09-18**

  * major reworking of the code, dump the grid and put quantity and atcb within
    div
  * bumped version to 0.3d0
  
* **2021-05-18**

  * added code for reset order for .ProductItem-details-checkout child elements
  * bumped version to 0.2d1
  
* **2021-05-17**

  * added code to work with add one left class to product detail page code
  * added check for not .one-left class
  * use a less heavy hand when changing margins, better looking spacing overall
  * align add to cart button to end
  * bumped version to 0.2d0
  
* **2021-03-23**

  * initial version

[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
