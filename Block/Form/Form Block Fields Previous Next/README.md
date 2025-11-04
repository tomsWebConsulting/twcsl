# Form Block Fields Previous Next

### [License][1]

### Synopsis

Divide the fields of a long Form block into sections and add navigation elements
to move through sections.

### Version

 * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Wrapper Observe Changes][4]
  
  * [jQuery][5]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install **[Form Block Wrapper Observe Changes][6]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[form block fields previous next.html][7]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [per-page code injection][8] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[form block fields previous next.html][7]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][9].
      
* Read the code for any instructions within.

* Add or edit a Form block on your page and set up as desired.
  
* In the **Form Block Wrapper Observe Changes** code add **twcFbfpn** to
  **added** per the **Form Block Wrapper Observe Changes** code install steps.
  
* Add a **Line** block after the twc-fbwoc Line block and set the **LABEL** to
  **twc-fbfpn**.
  
* Wherever you want to create a section add a **Line** block and set the
  **LABEL** to **twc-fbfpn**.
  
  The Line field(s) you have added with the twcFbfpn LABEL will have the step
  and total steps added to each section.
  
  If you want your own label you can set the field like the following.
  **twc-fbfpn : my label**
  
  You can of course use the DESCRIPTION field and the Underline toggle.
  
* Add the four following Button blocks in the same section as the Form block.

  * LABEL : First
  
    * Link URL : #twc-fbfpn-first
  
  * LABEL : Previous
  
    * Link URL : #twc-fbfpn-previous
  
  * LABEL : Next
  
    * Link URL : #twc-fbfpn-next
  
  * LABEL : Last
  
    * Link URL : #twc-fbfpn-last
    
  For a Classic Editor section you can simply stack the blocks in rows. For a
  Fluid Engine section you will probably want to put the buttons behind the Form
  block so they won't leave empty space in your design.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

<!-- * **2024-04-28**

  * update to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.3.0
  -->
* **2025-03-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[5]: https://jquery.com/
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[7]: form%20block%20fields%20previous%20next.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: https://toms-web-consulting-demos.squarespace.com/form-block-fields-previous-next?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
