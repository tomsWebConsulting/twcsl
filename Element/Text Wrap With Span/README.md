# Text Wrap With Span

### [License][1]

### Synopsis

Find and replace text with the text wrapped in a span tag.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[text wrap with span.html][4]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [per-page code injection][5] for details. Read the code for any
      instructions within.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[text wrap with span.html][4]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][6]. Read the code for any instructions within.

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
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
