# Store Product Detail Price Variant Add

### [License][99]

### Version 0.1.0

#### SS Versions 7.1, 7.0 ([Brine template family][1], [Five][2], [Montauk template family][3])

#### v7.1 Fluid Engine Compatible : Not Applicable

---

## Install

* Install **[Store Price Change][4]**.
  
* In the store price change code after the searchReplaceText example lines add
  the following code.
  
  ```javascript
          '[enter search text here between single quotes replacing square brackets]' : spdpva, // store product detail price variant add
  ```
  
* Add code from **[store product detail price variant add.html][5]** to
  Store Settings > Advanced > Page Header Code Injection for the store page
  **before** the **store price change** code. Read the code for any instructions
  within.

## Note

The search text you enter needs to target the end of the price. For prices that
end with a currency symbol, it is easy. For example if the currency is Euros
then you enter **€** for search text. If the price ends with numbers then things
get a bit trickier. You need to use a regular expression. For example
**/(\\\d+(?:,\\\d{3})*)(\\\\.\\\d{2})?/**.

## Make a Donation

Please consider [making a donation][6].

## Changes

<!-- * **2021-06-15**

  * change code to work on v7.1 and v7.0 (Brine)
  * use twcsl
  * bumped version to 0.1d2
  -->
* **2022-10-02**

  * initial version

[1]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[2]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[3]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Store%20Price%20Change#store-price-change
[5]: store%20product%20detail%20price%20variant%20add.html#L1
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
