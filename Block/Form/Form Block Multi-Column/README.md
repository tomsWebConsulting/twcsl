# Form Block Multi-Column

### [License][1]

### Version 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Form Block Wrapper Observe Changes][2]

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install **[Form Block Wrapper Observe Changes][2]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[form block multi-column.html][3]** to Page
      Settings > Advanced > Page Header Code Injection for the page **before**
      the **Form Block Wrapper Observe Changes code**. Please see [per-page code
      injection][4].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple pages where
      you want to have this effect.
      
    * Add code from file **[form block multi-column.html][3]** to Website >
      Pages > Website Tools > Code Injection > FOOTER **before** the **Form
      Block Wrapper Observe Changes code**. Please see [Add code to code
      injection][5].
      
* Add or edit a form block.

* In the **Form Block Wrapper Observe Changes** code add
  **twcFormBlockMultiColumn** to **added** per the **Form Block Wrapper Observe
  Changes** code install steps.

* For the second field add a line field with a label of **twc-fbm** and a
  description of **columns : n**. Replace **n** with the number of columns you
  want for the form.
  
* For groups of fields that you want to have a column effect add a line field
  with a label of **twc-fbm-begin** before the first field of the column group.
  To end the column effect, after the last field of the column group add a line
  field with a title of **twc-fbm-end**.

## Notes

This effect is not active in Squarespace Preview to test it use [private
browsing][6].

The grid styling is very basic. You will need to write your own CSS if you want
to change it.

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-04-03**

  * update to work with followup questions
  * update to work with Form Block Wrapper Observe Changes v0.4.0
  * remove dependency on jQuery
  * bumped version to 0.3.0
  
* **2024-04-27**

  * update to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.2.1
  
* **2023-07-14**

  * convert to callback for use with form block wrapper observe changes after SS
    form internationalization update
  * bumped version to 0.2.0
  
* **2022-06-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[3]: form%20block%20multi-column.html#L1
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[7]: https://toms-web-consulting-demos.squarespace.com/form-block-multi-column?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
