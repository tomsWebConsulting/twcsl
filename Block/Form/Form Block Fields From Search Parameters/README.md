# Form Block Fields From Search Parameters

### [License][1]

### Synopsis

Fill form fields from search query parameters of the page URL.

### Version

  * 0.3.1

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

* Install **[Form Block Wrapper Observe Changes][14]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[form block fields from search parameters.html][5]**
      to Page Settings > Advanced > Page Header Code Injection for the page.
      Refer to [per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[form block fields from search parameters.html][5]**
      to Website > Pages > Custom Code > Code Injection > FOOTER. Refer to
      [Add code to code injection][7] for details.
      
* Add or edit a form block.

* In the **Form Block Wrapper Observe Changes** code add **twcFbffsp** to
  **added** per the **Form Block Wrapper Observe Changes** code install steps.

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

## Note

This effect does not work with checkbox, radio, or survey fields.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-06-02**

  * fixed select fields not storing values, inputChangeTrigger
  * bumped version to 0.3.1
 
* **2025-03-03**

  * update to work with Form Block Wrapper Observe Changes v0.4.0
  * bumped version to 0.3.0
 
* **2024-04-28**

  * remove line field to trigger effect, adding the callback is the trigger
  * bumped version to 0.2.0
 
* **2024-04-27**

  * update to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.1.1
 
* **2022-07-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes
[14]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Wrapper%20Observe%20Changes#form-block-wrapper-observe-changes
[5]: form%20block%20fields%20from%20search%20parameters.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[9]: https://toms-web-consulting-demos.squarespace.com/form-block-fields-from-search-parameters?first=John&last=Doe&text=Text&textarea=Text+Area&password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
