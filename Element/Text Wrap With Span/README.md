# Text Wrap With Span

### [License][1]

### Synopsis

Find and replace text with the text wrapped in a span tag.

### Version

  * 0.1.0

#### Squarespace Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    Use this option when you want to have this effect on only one Page.
    
    * Add code from file **[text wrap with span.html][4]** to Page Settings >
      Advanced > Page Header Code Injection for the Page. Read the code for any
      instructions within. Refer to [Inject code to a specific page][5] for
      details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Pages.
    
    * Add code from file **[text wrap with span.html][4]** to Website > Pages >
      Custom Code > Code Injection > FOOTER. Read the code for any instructions
      within. Refer to [Add code to the header and footer][6].

## Notes

This code is a base for other effects. On its own there is not much in the way
of on page visual change.

The code will wrap your text in a span tag, add a **twc-twws** class name, and
add a **data-twc-twws-text** attribute. With those additions it should provide
some opportunities to style the span tags with your own custom CSS.

## Make a Donation

Please consider [making a donation][7].

## Changes

<!-- * **2023-07-28**

  * support calling multiple callbacks
  * bumped version to 0.2.0
  -->
* **2025-03-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: text%20wrap%20with%20span.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
