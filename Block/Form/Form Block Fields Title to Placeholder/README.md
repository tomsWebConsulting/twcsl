# Form Block Fields Title to Placeholder

### [License][1]

### Synopsis

Change form block field titles to placeholders.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Wrapper Observe Changes][4]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install **[Form Block Wrapper Observe Changes][5]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    Use this option when you want only one Page to have this effect.
    
    * Add code from file **[form block fields title to placeholder.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the Page. Refer
      to [per-page code injection][7] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[form block fields title to placeholder.html][6]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][8] for details.
      
* In the **Form Block Wrapper Observe Changes** code add **twcFbfttp** to
  **added** per the **Form Block Wrapper Observe Changes** code install steps.

## Note

Not all fields can sensibly have their titles removed and made placeholders.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2025-04-05**

  * update to work with Form Block Wrapper Observe Changes v0.4.0
  * remove dependency on jQuery
  * bumped version to 0.2.0
  -->
* **2025-04-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[6]: form%20block%20fields%20title%20to%20placeholder.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://toms-web-consulting-demos.squarespace.com/form-block-fields-title-to-placeholder?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
