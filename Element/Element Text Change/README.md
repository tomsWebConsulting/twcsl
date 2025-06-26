# Element Text Change

### [License][1]

### Synopsis

Search and replace text in elements.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
---

## Install

* Add code from file **[element text change.html][4]** to Website > Pages >
  Custom Code > Code Injection > FOOTER. Refer to [Per-page code
  injection][5] for details.
  
* Read the code for any instructions within.

## selectorTextSearchReplaceMap Example Data Structures

* Replace [year] with result of a callback

  ```javascript
        '#block-12345678901234567890 .sqs-html-content' : {
        
          searchText : '[year]',
          
          replaceText : twcEtcYear
          
          },
          
  ```

## Callbacks

Following is a very generalized example of a callback. The callback(s) must be
defined before the code of this effect. Note the use of var.

```html
<script>

  var etcReplaceText = ( ) => {
  
    console.log ( 'etcReplaceText' );
    
    const r = 'replace text';
    
    return ( r );
    
    };
    
  </script>
```

## Note

If the element returned by a selector has event listeners this code may break
the functionality of the element. Modifying something relativley simple like a
text block is not likely to be an issue. Something like a gallery block or
gallery section may.

## Make a Donation

Please consider [making a donation][6].

## Changes

<!-- * **2022-09-02**

  * add option to change afterpay price
  * bumped version to 0.5.0
  -->
  
* **2024-06-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: element%20text%20change.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
