# Header CTA Buttons Each Word Span Tag Add

### [License][1]

### Synopsis

Add span tags around the words of CTA buttons in the header.

### Version

  * 0.1.0

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

  * [jQuery][4]
  
---

## Quick Install

* Add code from file **[header cta buttons each word span tag add.css][5]** to
  Website > Pages > Custom Code > Custom CSS. Refer to [Add CSS code][6] fo
  details.
  
* Add the following to Website > Pages > Custom Code > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[header cta buttons each word span tag add.html][7]** to
  Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
  the header and footer][8] for details.

## How to Use

Add a query string parameter of **twc-hcbewsta** to each header CTA button link.

Some examples...

  * site top level link
  
    ```
    /?twc-hcbewsta
    ```
    
  * site page link
  
    ```
    /link?twc-hcbewsta
    ```
    
  * site page link that already has existing query string parameter
  
    ```
    /link?parameter=1&twc-hcbewsta
    ```
    
  * site page link with a hash
  
    ```
    /link?twc-hcbewsta#hash
    ```
    
  * external site link
  
    ```
    http://www.tomsWeb.consulting/?twc-hcbewsta#hash
    ```
  
    

## Notes

This effect is not active in Squarespace Preview to test it use [private
browsing][9].

This code is a base effect for other effects. To take advantage of it you need
to write CSS.

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2022-05-DD**

  * change twc-tbtca-tab-label to twc-tbtca-label
  * add class to label column to differentiate it from other columns
  * bumped version to 0.2.0
  -->
* **2024-04-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: header%20cta%20buttons%20each%20word%20span%20tag%20add.css#L1
[6]: https://support.squarespace.com/hc/en-us/articles/206545567-Add-custom-CSS-to-your-site#h_01JNK62X86KV65WDJ9D9HY1J8C
[7]: header%20cta%20buttons%20each%20word%20span%20tag%20add.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[9]: https://tinyurl.com/ynessvsf
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
