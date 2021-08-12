# Change Text of Prices on Store Pages

### Version 0.2d1

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

Add code from file
**[change text of prices on store pages.html](change%20text%20of%20prices%20on%20store%20pages.html#L1)**
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

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-07-31**
<br><br>
  * added missing quick install text
  * bumped version to 0.2d1
  <br><br>
* **2021-05-15**
<br><br>
  * changed name from *Remove Word From, from Prices on Store Pages* to *Change
    Text of Prices on Store Pages*
  * changed code to be a text changer instead of simply removing the word from
  * bumped version to 0.2d0
  <br><br>
* **2021-05-14**
<br><br>
  * add support for Five template and Montauk template family
  * bumped version to 0.1d4
  <br><br>
* **2021-05-13**
<br><br>
  * fix MutationObserver guard
  * bumped version to 0.1d3
  <br><br>
* **2021-05-08**
<br><br>
  * verified code works on v7.0 using Brine template family
  * bumped version to 0.1d2
  <br><br>
* **2021-04-05**
<br><br>
  * initial version
