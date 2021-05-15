# Change Text of Prices on Store Pages

### Version 0.2d0

---

## Quick Install

Add code from file **change text of prices on store pages.html** to
Store Settings > Advanced > Page Header Code Injection for the store page.

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

## Changes

<ul>
  <li>
    <strong>
      2021-05-15
      </strong>
    <ul>
      <li>
        changed name from <em>Remove Word From, from Prices on Store Pages</em>
        to <em>Change Text of Prices on Store Pages</em>
        </li>
      <li>
        changed code to be a text changer instead of simply removing the word
        from
        </li>
      <li>
        bumped version to 0.2d0
        </li>
      </ul>
    <br>
    </li>
  <li>
    <strong>
      2021-05-14
      </strong>
    <ul>
      <li>
        add support for Five template and Montauk template family
        </li>
      <li>
        bumped version to 0.1d4
        </li>
      </ul>
    <br>
    </li>
  <li>
    <strong>
      2021-05-13
      </strong>
    <ul>
      <li>
        fix MutationObserver guard
        </li>
      <li>
        bumped version to 0.1d3
        </li>
      </ul>
    <br>
    </li>
  <li>
    <strong>
      2021-05-08
      </strong>
    <ul>
      <li>
        verified code works on v7.0 using Brine template family
        </li>
      <li>
        bumped version to 0.1d2
        </li>
      </ul>
    <br>
    </li>
  <li>
    <strong>
      2021-04-05
      </strong>
    <ul>
      <li>
        initial version
        </li>
      </ul>
    </li>
  </ul>
