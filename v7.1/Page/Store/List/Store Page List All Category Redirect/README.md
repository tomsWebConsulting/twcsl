# Store Page List All Category Redirect

### [License][1]

### Synopsis

Redirect store page list all category to a URL.

### Version

 * 0.3.1

#### SS Version

  * 7.1

#### Products V2 Compatible 

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list all category redirect.html][4]** to
      Page Settings > Advanced > Page Header Code Injection. Refer to [Per-page
      code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list all category redirect.html][4]** to
      Website > Pages > Custom Code > Code Injection > HEADER. Refer to [Add
      code to code injection][6].
      
* Read the code for any instructions within.

## Example Callback

Following is an example callback. Your callback must return a URL and be
installed **before** the **store page list all category redirect** code. Note
the use of var.

```html
<script>

  var splacrLog = ( ) => {
  
    const url = '/twc';
    
    console.log ( 'splacrLog : ', url );
    
    return url;
    
    };
    
  </script>
```

## Note

This effect is not active in the Squarespace editor to test it use [private
browsing][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-07-07**

  * checked v7.1 Products V2 compatibility
  * bumped version to 0.3.1
  
* **2024-06-15**

  * use callback to return redirect URL
  * bumped version to 0.3.0
  
* **2024-06-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20list%20all%20category%20redirect.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
