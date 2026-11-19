# Effects

### [License][1]

### Synopsis

Add various effect to your site.

### Version

  * 0.1.0-development.4

#### Squarespace Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Add code from file **[effects.html][4]** to Website > Pages > Custom Code >
  Code Injection > HEADER. Refer to [Add code to the header and footer][5] for
  details.

## How to Use

* When editing your site click the **TWC** icon in the top-right corner.

* In the TWC Effects dialog select the effects you want to use.

* Click the Site Reload button.

The site will reload and your selected effects will load.

## Effects

* [Asset Library Move to Dialog Sort][6]

* [Section Info][7]

## Notes

**DO NOT INSTALL this code at this time**. I'm in process of bootstrapping this
code.

**DO NOT** edit the installed code.

This code only loads the code for each effect you chose.

If a site is open in multiple windows or tabs, your changes to this codes
settings in the current window or tab will not automatically appear in the
others. Reload the other windows or tabs when you want to use your updated
settings.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2026-11-19**

  * reworked initial load code to be CDN based
  * bumped version to 0.1.0-development.4 (commit 236bf48973a20358e783f681abc53474a73614b6)
  
* **2026-11-19**

  * removed @main
  * added Section Info effect
  * bumped version to 0.1.0-development.3 (commit 96ff958184cfcb92ccaeda4706938786a0676eba)
  
* **2026-11-17**

  * changed @latest to @main for jsDelivr URLs
  * bumped version to 0.1.0-development.2 (commit c68088925e293f4f1a2196da37ee8ed168204671)
  
* **2026-11-17**

  * restructured site reload to reload the editor and site frame
  * added check to disable effects button and not show dialog if code injection
    is dirty
  * fixed issue with effects button being disabled when this code first loads
  * bumped version to 0.1.0-development.1 (commit b35cef02987e201d28d0b71df7fd8eda9a681f74)
  
* **2026-11-16**

  * initial version (commit 0e147e5c4cd3f93543248c5134957ec31a302747)

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: effects.min.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[6]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Element/Asset%20Library/Asset%20Library%20Move%20to%20Dialog%20Sort#asset-library-move-to-dialog-sort
[7]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Section%20Info#section-info
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
