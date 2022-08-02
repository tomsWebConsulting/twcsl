# Store Product Price Remove Decimal for Prices Greater Than or Equal to N

### Version 0.1d1

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Quick Install

* Install the code from
  **[Store Price Change](https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Price%20Change#store%20price%20change)**.
  
* In the above code after the searchReplaceText example lines add the following
  code.
  
  ```javascript
          '/(\\d+(?:,\\d{3})*)(?:\\.\\d{2})?/' : x5d75122a, // store product price remove decimal for prices greater than or equal to n
  ```
  
* Add code from file
  **[store product price remove decimal for prices greater than or equal to n.html](store%20product%20price%20remove%20decimal%20for%20prices%20greater%20than%20or%20equal%20to%20n.html#L1)**
  to Store Settings > Advanced > Page Header Code Injection for the store page
  **before** the **store price change** code.
  
## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2022-01-31**
  
  * updated for compatibility with Store Price Change v0.3d8
  * bumped version to 0.1d1
  
* **2021-09-28**
  
  * initial version
