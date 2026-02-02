# Store Page Detail Footer Section Append

### [License][1]

### Synopsis

Append footer boilerplate sections after product detail section.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes
  
#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Elements Manipulate][4]

---

## Install

* Install **[Elements Manipulate][5]**. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you want to have this effect on only one Store page.
      
    * Add code from file **[store page detail footer section append.html][6]**
      to Store Page Settings > Advanced > Page Header Code Injection for the
      page. Refer to [per-page code injection][7] for details.
      
    * Add code from file **[store page detail footer section append.js][8]** to
      the **elements manipulate options** code.
      
  * Site-wide
  
    * Use this option if you want to have this effect on all Store pages.
      
    * Add code from file **[store page detail footer section append.less][9]**
      to Website > Pages > Custom Code > Custom CSS. Refer to [Using the CSS
      Editor][10] for details.
      
    * Add code from file **[store page detail footer section append.js][8]** to
      the **elements manipulate options** code.
      
* Add sections to the footer.

  * Add a Code block to each section and set the content to the following.
    
    ```html
    <x-twc-spdfsa />
    ```
    
    If the section is a Classic Editor section put the code block as the first
    block of the section. Below the Code block build up your boilerplate content
    you want to be added to each product.
    
  * Save the Page.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-12-09**

  * updated to use elements manipulate
  * bumped version to 0.2.0
  
* **2023-12-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Element/Elements%20Manipulate#elements-manipulate
[6]: store%20page%20detail%20footer%20section%20append.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: store%20page%20detail%20footer%20section%20append.js#L1
[9]: store%20page%20detail%20footer%20section%20append.less#L1
[10]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
