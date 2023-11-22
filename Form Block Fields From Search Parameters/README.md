# Form Block Fields From Search Parameters

### [License][1]

### Synopsis

Fill form fields from search query parameters of the page URL.

### Version 0.1.0

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

* Install **[Form Block Wrapper Observe Changes][4]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[form block fields from search parameters.html][5]**
      to Page Settings > Advanced > Page Header Code Injection for the page
      **before** the **Form Block Wrapper Observe Changes** code. Please see
      [per-page code injection][6].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple pages where
      you want to have this effect.
      
    * Add code from file **[form block fields from search parameters.html][5]**
      to Website > Pages ( v7.0 only ) > Website Tools > Code Injection > FOOTER
      **before** the **Form Block Wrapper Observe Changes** code. Please see
      [Add code to code injection][7].

* In the **Form Block Wrapper Observe Changes** code set the **added** callback
  to **twcFbffsp** per the **Form Block Wrapper Observe Changes** code install
  steps.

* Add or edit a form block.

* Add a Line field with a LABEL of **twc-fbffsp**.

* For each form field that you want to map from a search query string parameter
  key and put the parameter value into the field, add a line of the following
  format to DESCRIPTION.
  
  ```text
  twc-fbffsp : text
  ```
  
  **text** is the search query string parameter key and would look like the
  following in a URL.
  
  ```text
  http://your-site.squarespace.com?text=your+text+here
  ```
  
  For a compound field like Address add a line of the following format.
  
  ```text
  twc-fbffsp : first=First Name, last=Last Name
  ```
  
  **first** and **last** are the search query string parameter keys and would
  look like the following in a URL.
  
  ```text
  http://your-site.squarespace.com?first=John&last=Doe
  ```

## Notes

This effect is not active in SS Preview to test it use [private browsing][8].

This effect does not work with checkbox, radio, or survey fields.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2023-07-14**

  * convert to callback for use with form block wrapper observe changes after SS
    form internationalization update
  * bumped version to 0.2.0
  -->
* **2022-07-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[5]: form%20block%20fields%20from%20search%20parameters.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://toms-web-consulting-demos.squarespace.com/form-block-fields-from-search-parameters?first=John&last=Doe&text=Text&textarea=Text+Area&password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
