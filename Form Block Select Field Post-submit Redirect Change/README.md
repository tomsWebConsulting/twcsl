# Form Block Select Field Post-submit Redirect Change

*This **code is currently broken** because of the recent (04/23) Squarespace
redesigned form blocks. The specific issue is that SS removed support for the
data-success-redirect attribute which allowed code to programmatically change
the redirect URL on the fly and then SS would handle the actual redirect. Please
contact SS [customer support][1] to encourage them to restore this functionality
that existed in the prevoius version of the form block before the update.*

*I hope to make this code function again in the future.*

### [License][2]
    
### Version 0.2.2

#### SS Versions 7.1, 7.0

#### v7.1 Fluid Engine Compatible : Yes

---

## Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[form block select field post-submit redirect
  change.html][3]** to Page Settings > Advanced > Page Header Code Injection for
  the page. Please see [per-page code injection][4]. Read the code for any
  instructions within.
  
* Add a form block to your page and set up as desired.
  
* For the form [add a post-submit redirect][5]. In the REDIRECT URL field enter
  **#**.
  
* For the select field description on a line by itself enter **fbsfpsrc**. This
  indicates to the code that you want the code to act upon this select field and
  form.
  
  Below the **fbsfpsrc** line add select field option and redirect URL pairs on
  lines by themselves. Each option must match exactly what you entered for each
  select option in the SS interface. The URLs can be any valid URL. They can be
  full (external to your site) ones like < http://www.tomsWeb.consulting/ > or
  partial (internal to your site) ones like '/contact'.
  
  Following is a common partial example.
  
  ```
  fbsfpsrc
  Alabama
  http://www.tomsWeb.consulting/Alabama
  Alaska
  http://www.tomsWeb.consulting/Alaska
  Arizona
  http://www.tomsWeb.consulting/Arizona
  Arkansas
  http://www.tomsWeb.consulting/Arkansas
  ```
  
  If you want to have a description for the select field add it above the
  **fbsfpsrc** line.

## Demo

You can see a [demo of this effect here][6].

## Note

This code does not work for form blocks with lightbox toggled on.

## Make a Donation

Please consider [making a donation][7].

## Changes

* **2023-01-24**

  * fix for description being set
  * bumped version to 0.2.2
  
* **2021-12-02**

  * no functional changes, fixed some formatting issues in code and read me
  * bumped version to 0.2d1
  
* **2021-09-07**

  * major reworking of the code moving the user configuration into the SS
    interface
  * remove twcsl dependency, form accessed in way it doesn't support
  * bumped version to 0.2d0
  
* **2021-06-13**

  * use twcsl
  * bumped version to 0.1d2
  
* **2021-03-28**

  * initial version

[1]: https://support.squarespace.com/hc/en-us/requests/new
[2]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[3]: form%20block%20select%20field%20post-submit%20redirect%20change.html#L1
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[5]: https://support.squarespace.com/hc/en-us/articles/206566737-Form-Blocks#toc-add-a-post-submit-message-or-redirect
[6]: https://toms-web-consulting-demos.squarespace.com/form-block-select-field-postsubmit-redirect-change/form?password=twcdemos
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
