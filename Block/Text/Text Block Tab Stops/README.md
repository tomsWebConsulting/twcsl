# Text Block Tab Stops

### [License][1]

### Synopsis

Simulate tab stops in a text block.

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
      
    * Add code from file **[text block tab stops.html][4]** to Page Settings >
      Advanced > Page Header Code Injection for the page. Refer to [Per-page
      code injection][5] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[text block tab stops.html][6]** to Website > Pages >
      Custom Code > Code Injection > FOOTER. Refer to [Add code to code
      injection][6] for details.
      
* Read the code for any instructions within.

## How to Use

In your text block type **&nbsp;\t&nbsp;** where you want to create a tab stop
effect. You must have a space character before and after the \t text. Type
shift-return for a new line. If you have multiple lines like this they will be
gathered together in one table tag. Typing a return of course creates a new
paragraph. This means you can mix the tab stop effect with normal text as
needed.

For example.

```text
Lorem ipsum \t Odor amet, consectetuer adipiscing elit.
Augue justo \t Et consequat molestie, maximus habitant.
Primis facilisis \t Ligula volutpat nec bibendum faucibus?
Arcu per \t Venenatis nam efficitur viverra platea eleifend?
Iaculis malesuada \t Senectus vitae himenaeos ultrices sit.

Lorem ipsum odor amet, consectetuer adipiscing elit. Id proin luctus, sem ornare purus class facilisis orci. Hac potenti viverra sodales molestie massa sit. Morbi nibh ligula, lectus fringilla purus dui risus arcu mattis. Magna netus elementum amet arcu parturient facilisis fermentum. Convallis mus facilisi; nunc eleifend cubilia quis. Vehicula nibh molestie risus integer vehicula mattis imperdiet dis.
```

## Notes

To create the tab stop effect the code uses a table tag.

You have to manually keep track of how many tabs you are using on each line. The
code does not do this for you or fix things for you.

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2022-09-21**

  * fix forEach error on HTMLCollection
  * bumped version to 0.1.1
  -->
* **2025-01-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: text%20block%20tab%20stops.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://toms-web-consulting-demos.squarespace.com/text-block-tab-stops?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
