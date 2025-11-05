# Store Page Detail Footer Sections Move

### [License][1]

### Synopsis

Add footer boilerplate sections after product detail section.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store page detail footer sections move.css][6]** to
  Website > Pages > Custom Code > Custom CSS. Refer to [Using the CSS
  Editor][199] for details.
  
* Read the code for any instructions within.
  
* Add code from file **[store page detail footer sections move.html][7]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Refer to [Per-page code injection][8] for details.
  
* Add sections to the footer.

  * Add a code block to each section and set the content to the following.
    
    ```html
    <x-twc-spdfsm />
    ```
    
    If the section is a Classic Editor section put the code block as the first
    block of the section. Make sure it spans the entire width of the section.
    Below the code block build up your boilerplate content you want to be added
    to each product.
    
  * Save the page.

## Notes

The footer sections are moved after the product detail section. Product detail
sections contain details, additional info, and related products elements. If you
want to insert elements between any of the previous elements then you need
different code.

This effect is not active in SS Preview to test it use [private browsing][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2023-10-21**

  * make what gets moved from the footer to additional info broader
  * bumped version to 0.2.0
  -->
* **2023-12-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20detail%20footer%20sections%20move.css#L1
[7]: store%20page%20detail%20footer%20sections%20move.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[199]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
