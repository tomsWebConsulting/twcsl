# Store Page Price Change

### [License][1]

### Synopsis

Change store page prices.

### Version

  * 0.6.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Five][3], [Montauk template family][4])

#### v7.1 Fluid Engine Compatibility

  * Not Applicable

---

## Install

* Install [twcsl][5]. After you install the code be sure to continue on with the
  rest of the steps.
  
* Options

  * Page Specific
  
    * Add, in order, code from files **[store page price change
      script.html][6]** and **[store page price change.html][7]** to
      Store Settings > Advanced > Page Header Code Injection for the store page.
      Please see [per-page code injection][8]. Read the code files for any
      instructions within.
      
  * Site-wide
  
    * Add code from file **[store page price change script.html][6]** to
      Website > Pages > Website Tools > Code Injection > HEADER.
      
    * Add code from file **[store page price change.html][7]** to Website >
      Pages > Website Tools > Code Injection > FOOTER.
      
    Please see [Add code to code injection][9]. Read the codes for any
    instructions within.

## searchReplaceText Example Lines

```
      // remove word from
      
      "from" : "",
  ```

```
      // change language of word from, from english to swedish
      
      "from" : "fra",
  ```

```
      // remove zero decimal from price
      
      ".00" : "",
  ```

```
      /*
      
        remove decimal from price, using regular expression, backslash must
        be escaped with \, the replacement text uses special replacement
        patterns
        
        */
        
      "/(\\d+(?:,\\d{3})*)(?:\\.\\d{2})?/" : "$1",
  ```

```
      // add thousands separator
      
      "/\\d(?=(?:\\d{3})+(?!\\d))/g" : "$&,",
  ```

```
      // replacement text callback name
      
      "/.*?\\d+(?:,\\d{3})*(?:\\.\\d{2})?/" : "twcSppcl",
  ```

## Callback Example

For an example of how to write a callback please see [Store Page Price Change
Log][10].

## Note

Changing prices on a Store page does not effect the cart, checkout, or other SS
pages/backend storage. This is purely a cosmetic change. No code can change the
checkout page or SS backend. It is a SS security feature.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2024-10-04**

  * rework code to use JSON for settings via a script tag
  * rework code to use JavaScript Module Patterns for twc, twc.sppc, and
    twc.sppc.callbacks. makes the initialization code a bit more dense but
    removes the need for the user to dive into this code to set callbacks. they
    just need to add a callback per that codes instructions
  * bumped version to 0.6.0
  
* **2022-09-02**

  * add option to change afterpay price
  * bumped version to 0.5.0
  
* **2022-08-13**

  * remove an errant line of code, no functional change
  * bumped version to 0.4.1
  
* **2022-04-20**

  * add support for store detail layouts
  * fix for 0.3d8 regression on being able to change store list prices
  * bumped version to 0.4.0
  
* **2022-02-03**

  * wrap some code in a Immediately-Invoked Function Expression to isolate
    initialize function
  * bumped version to 0.3d9
  
* **2022-01-31**

  * rework how code responds to function results, it is now possible to stop
    further processing of remaining search/replace pairs
  * bumped version to 0.3d8
  
* **2022-01-29**

  * fix for initialization code break for v7.1
  * bumped version to 0.3d7
  
* **2022-01-21**

  * make ajax compatible for v7.0
  * bumped version to 0.3d6
  
* **2022-01-20**

  * fix variable without const keyword
  * bumped version to 0.3d5
  
* **2021-09-30**

  * pass more parameters to functions so they can do more
  * bumped version to 0.3d4
  
* **2021-09-28**

  * change where searchReplaceText is stored to reduce varible already defined
    error
  * functions now always run instead of just for variant changes
  * use class to show price instead of setting style on elements
  * bumped version to 0.3d3
  
* **2021-08-29**

  * changed name from Change Store Product Detail Price Text to Store Price
    Change, previous name was a misnomer
  * bumped version to 0.3d2
  
* **2021-08-20**

  * disconnect observer before text changes and "reconnect" after changes,
    more efficient
  * bumped version to 0.3d1
  
* **2021-08-19**

  * changed name from Change Text of Prices on Store Pages to Change Store
    Product Detail Price Text
  * added ability to call replacment text function
  * use twcsl
  * bumped version to 0.3d0
  
* **2021-07-31**

  * added missing quick install text
  * bumped version to 0.2d1
  
* **2021-05-15**

  * changed name from Remove Word From, from Prices on Store Pages to Change
    Text of Prices on Store Pages
  * changed code to be a text changer instead of simply removing the word from
  * bumped version to 0.2d0
  
* **2021-05-14**

  * add support for Five template and Montauk template family
  * bumped version to 0.1d4
  
* **2021-05-13**

  * fix MutationObserver guard
  * bumped version to 0.1d3
  
* **2021-05-08**

  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  
* **2021-04-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://support.squarespace.com/hc/en-us/articles/206544937-Five-template
[4]: https://support.squarespace.com/hc/en-us/articles/205815568-Montauk-template-family
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20price%20change%20script.html#L1
[7]: store%20page%20price%20change.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change%20Log#store-page-price-change-log
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
