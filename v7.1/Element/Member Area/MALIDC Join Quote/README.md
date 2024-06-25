# MALIDC Join Quote

### [License][1]
    
### Version 0.1.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Member Area Log In Dialog Change][4]

#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [Member Area Log In Dialog Change][5]. After you install the code be
  sure to continue on with the rest of the steps.
  
* In the **member area log in dialog change** code set accountFrameCallback to
  twcMalidcJoinQuote.
  
  ```javascript
      accountFrameCallback : twcMalidcJoinQuote
  ```
  
* Add the code from file **[malidc join quote.html][6]** to Website > Pages >
  Website Tools > Code Injection > FOOTER **before** the **member area log in
  dialog change** code. Please see [Add code to code injection][7].

## Note

This effect is not compatible with use of the signUp setting of the Member Area
Log In Dialog Change code. The issue is that the current version of MALIDC can
not distinguish between a plain sign up and join dialog.

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2022-12-06**

  * add variable for CSS customization
  * fix for changes SS made that broke the code
  * bumped version to 0.2.0
  -->
* **2024-06-25**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Member%20Area%20Log%20In%20Dialog%20Change
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Member%20Area%20Log%20In%20Dialog%20Change#member-area-log-in-dialog-change
[6]: malidc%20join%20quote.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
