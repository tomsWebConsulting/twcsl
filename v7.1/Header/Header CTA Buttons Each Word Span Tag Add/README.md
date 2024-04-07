# Header CTA Buttons Each Word Span Tag Add

### [License][1]

### Synopsis

Add span tags around the words of CTA buttons in the header.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Add code from file **[header cta buttons each word span tag add.css][4]** to Website >
  Website Tools > Custom CSS.
  
* Add the following to Website > Website Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[header cta buttons each word span tag add.html][5]** to
  Website > Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][6].

## How to Use

Add a query string parameter of **twc-hcbewsta** to each header CTA button link.

Some examples...

  * /?twc-hcbewsta
  
    site top level link
    
  * /link?twc-hcbewsta
  
    site page link
    
  * /link?parameter=1&twc-hcbewsta
  
    site page link that already has existing query string parameter
    
  * /link?twc-hcbewsta#hash
  
    site page link with a hash
    
  * http&#58;&#47;&#47;www&period;tomsWeb&period;consulting/?twc-hcbewsta#hash
  
    external site link

## Notes

This effect is not active in SS Preview to test it use [private browsing][7].

This code is a base effect for other effects. To take advantage of it you need
to write CSS.

## Make a Donation

Please consider [making a donation][8].

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
[4]: header%20cta%20buttons%20each%20word%20span%20tag%20add.css#L1
[5]: header%20cta%20buttons%20each%20word%20span%20tag%20add.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://tinyurl.com/ynessvsf
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
