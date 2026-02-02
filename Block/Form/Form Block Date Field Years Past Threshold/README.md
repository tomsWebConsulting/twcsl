# Form Block Date Field Years Past Threshold

### [License][1]

### Synopsis

Add a years past threshold to Form block Date fields.

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
    
    * Add code from file **[form block date field years past
      threshold.html][6]** to Page Settings > Advanced > Page Header Code
      Injection for the Page. Refer to [Per-page code injection][7] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[form block date field years past
      threshold.html][6]** to Website > Pages > Custom Code > Code Injection >
      FOOTER. Refer to [Add code to code injection][8]
      
* Add or edit a form block on your Page and set up as desired.
  
* In the **Form Block Wrapper Observe Changes** code add the callback name
  **twcFbdfypt** to **added** per the **Form Block Wrapper Observe Changes**
  code install steps.
  
* For each date field where you want a years past threshold.
  
  * Edit the field.
    
  * At the beginning of the description field enter **twc-fbdfypt : [ enter
    years here replacing square brackets ]**. An example.
    
    ```text
    twc-fbdfypt : 21
    ```
    
    If you want to have description text for the field that the user will see
    enter it after the twc-fbtfml tag. An example.
    
    ```text
    twc-fbdfypt : 21
    My description text that helps the user.
    ```

## Note

This code is client side and it is possible to bypass it. In other words you
still need to be checking manually the forms data to verify it. Consider this
code more of an aid not a solid gate. This is a limitation of Squarespace. They
don't allow access to the back end to alter form validation routines. 

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2025-04-09**

  * updated to work with Form Block Wrapper Observe Changes v0.4.0
  * remove dependency on jQuery
  * bumped version to 0.4.0
  -->
* **2025-07-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[6]: form%20block%20date%20field%20years%20past%20threshold.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://toms-web-consulting-demos.squarespace.com/form-block-date-field-years-past-threshold?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
