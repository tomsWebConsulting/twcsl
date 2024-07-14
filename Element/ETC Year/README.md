# ETC Year

### [License][1]

### Synopsis

Return current year.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Element Text Change][4]

---

## Install

* Install **[Element Text Change][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* In the store price change code after the selectorTextSearchReplaceMap example
  data structures add the following example code.
  
  ```javascript
        '#block-12345678901234567890 .sqs-html-content' : {
        
          searchText : '[year]',
          
          replaceText : twcEtcYear
          
          },
          
  ```
  
* Add code from **[etc year.html][6]** to Website > Pages > Website Tools >
  Code Injection > FOOTER **before** the **ELEMENT TEXT CHANGE** code. Please
  see [Add code to code injection][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2022-10-10**

  * check text includes instead of ==
  * bumped version to 0.1.1
  -->
* **2024-06-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Element%20Text%20Change
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Element%20Text%20Change#element-text-change
[6]: etc%20year.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
