# Store Product Detail Add To Cart Show After Date Time

### [License][1]

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [twcsl][2]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store product detail add to cart show after date
  time.html][3]** to Store Settings > Advanced > Page Header Code Injection for
  the page. Refer to [Per-page code injection][4] for details.
  
* Read the code for any instructions within.

* Add the following to a code block in [Additional Info][5].
  
  ```html
  <x-twc-pdatcsadt>2/24/23, 12:00:00 AM</x-twc-pdatcsadt>
  ```
  
  Be sure to use the date/time format as shown above. MM/DD/YY, HH:MM:SS AM or
  PM.

## Note

This effect is not time zone aware and therefore useful for local sales only.

## Make a Donation

Please consider [making a donation][6].

## Changes

<!-- * **2021-11-15**

  * fix for description layout issue when categories are set to side for Brine
  * bumped version to 0.3d0
  -->
* **2023-02-24**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl#install-options
[3]: store%20product%20detail%20add%20to%20cart%20show%20after%20date%20time.html#L1
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[5]: https://support.squarespace.com/hc/en-us/articles/206541037-Adding-additional-information-to-products
[6]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
