# Change Store Product Detail Price Text

### Version 0.3d1

#### SS Versions 7.1, 7.0

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d13/twcsl.js"></script>
```

Add code from file
**[change store product detail price text.html](change%20store%20product%20detail%20price%20text.html#L1)**
to Store Settings > Advanced > Page Header Code Injection for the store page.

## searchReplaceText Example Lines

```javascript
      'from' : '', // remove word from
  ```

```javascript
      'from' : 'fra', // change language of word from, from english to swedish
  ```

```javascript
      '/(\\d+).00/' : '$1', /* remove decimal from price, using regular
                               expression, backslash must be escaped with \, the
                               replacement text can use special replacement
                               patterns */
  ```

```javascript
      '/.*?\\d+.\\d+/' : ffee6bf1, /* replacement text function name */
  ```

*Note : Changing prices on a Store page does not effect the cart, checkout, or
other SS pages/backend storage. This is purely a cosmetic change.*

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-08-20**

  * disconnect observer before text changes and "reconnect" after changes,
    more efficient
  * bumped version to 0.3d1
  
* **2021-08-19**

  * changed name from *Change Text of Prices on Store Pages* to *Change Store
    Product Detail Price Text*
  * added ability to call replacment text function
  * use twcsl
  * bumped version to 0.3d0
  
* **2021-07-31**

  * added missing quick install text
  * bumped version to 0.2d1
  
* **2021-05-15**

  * changed name from *Remove Word From, from Prices on Store Pages* to *Change
    Text of Prices on Store Pages*
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
