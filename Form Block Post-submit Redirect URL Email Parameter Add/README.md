# Form Block Post-submit Redirect URL Email Parameter Add

*This **code is currently broken** because of the recent (04/23) Squarespace
redesigned form blocks. The specific issue is that SS removed support for the
data-success-redirect attribute which allowed code to programmatically change
the redirect URL on the fly and then SS would handle the actual redirect. Please
contact SS [customer support][1] to encourage them to restore this functionality
that existed in the prevoius version of the form block before the update.*

*I hope to make this code function again in the future.*

### [License][2]

### Version

  * 0.3.1

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Yes

---

## Install

* Install [twcsl][3].
  
* Add code from file **[form block post-submit redirect url email parameter
  add.html][4]** to Page Settings > Advanced > Page Header Code Injection for
  the page. Refer to [Per-page code injection][5] for details.
  
* Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][6].

## Changes

* **2022-12-07**

  * replace hard coded string with attribute constant, no functional change
  * bumped version to 0.3.1
  
* **2022-04-19**

  * add setting for nth form on page
  * add setting to override default query string search parameter key
  * bumped version to 0.3.0
  
* **2022-03-23**

  * add encode flag to control if email address is encoded per url spec
  * bumped version to 0.2d0
  
* **2021-11-17**

  * initial version

**All trademarks are the property of their respective owners.**

[1]: https://support.squarespace.com/hc/en-us/requests/new
[2]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[3]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: form%20block%20post-submit%20redirect%20url%20email%20parameter%20add.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
