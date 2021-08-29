# Cart Prices Sqs-Money-Native Add

### Version 0.1d1

#### SS Versions 7.1, 7.0

---

## Quick Install

* Install the code from
  **[Cart Prices Change](https://github.com/tomsWebConsulting/twcsl/tree/main/Cart%20Prices%20Change#cart-prices-change)**.
  
* In the above code after the searchReplaceText example lines add the following
  code.
  ```javascript
      '/.*?\\d+(?:,\\d{3})*(?:\\.\\d{2})?/' : x828dc1d3, // cart prices sqs-money-native add
    ```
    
* Add code from file
  **[cart prices sqs-money-native add.html](cart%20prices%20sqs-money-native%20add.html#L1)**
  to Settings > Advanced > Code Injection > FOOTER before the **cart prices
  sqs-money-native add** code.
  
## Note

The regular expression used is this code is not meant to cover all variations of
currency number formatting. It is a starting point. You must verify that it will
work for your use case and  if needed change it to meet your needs.

## Make a Donation

Please consider [making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-08-29**
  
  * changed the regular expression to capture more variations of currency number
    format
  * bumped version to 0.1d1
  
* **2021-08-27**
  
  * initial version
