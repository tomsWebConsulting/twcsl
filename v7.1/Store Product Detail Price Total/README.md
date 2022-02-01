# Store Product Detail Price Total

### Version 0.2d2

#### SS Version 7.1

---

## Quick Install

* Install code from
  **[Store Price Change](https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Price%20Change#store%20price%20change)**.
  
* Install code from
  **[Store Product Detail Price Add Sqs-Money-Native for Variants](https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Product%20Detail%20Price%20Add%20Sqs-Money-Native%20for%20Variants)**.
  
* Install code from
  **[Store Product Detail Price Force Mutation on Quantity Change](https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Store%20Product%20Detail%20Price%20Force%20Mutation%20on%20Quantity%20Change)**.
  
* In the store price change code after the searchReplaceText example lines add
  the following code.
  
  ```javascript
          '/\\d+(?:,\\d{3})*(?:\\.\\d{2})?/' : febc23ef, // store product detail price total
          
          '/\\d(?=(?:\\d{3})+(?!\\d))/g' : '$&,', // add thousands separator
    ```
    
* Add code from file
  **[store product detail price total.html](store%20product%20detail%20price%20total.html#L1)**
  to Store Settings > Advanced > Page Header Code Injection for the store page
  **before** the **store price change** code.

## Demo

You can see a
[demo of this effect here](https://toms-web-consulting-demos.squarespace.com/store/p/spring-pickle-mix?password=twcdemos).

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2022-01-31**

  * updated for compatibility with Store Price Change v0.3d8
  * bumped version to 0.2d2
  
* **2022-01-29**

  * do not total on out of stock items
  * bumped version to 0.2d1
  
* **2021-09-29**

  * updated to work with newer version of store price change
  * bumped version to 0.2d0
  
* **2021-08-30**

  * updated references to code which this code depends on
  * bumped version to 0.1d1
  
* **2021-08-22**

  * initial version
