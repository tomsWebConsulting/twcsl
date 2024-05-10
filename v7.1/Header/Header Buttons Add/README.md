# Header Buttons Add

### [License][1]

### Synopsis

Add buttons to the site header.

### Version

  * 0.8.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Quick Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[header buttons add.less][5]** to Website > Pages >
  Website Tools > Custom CSS. Read the code for any instructions within.
  
* Add code from file **[header buttons add.html][6]** to Website > Pages >
  Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][7]. Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2023-08-02**

  * add support for secondary and tertiary button classes
  * bumped version to 0.8.0
  
* **2022-03-01**

  * fix for button text not centered when in column on desktop
  * bumped version to 0.7d1
  
* **2022-01-11**

  * added code for adding target attribute to buttons
  * bumped version to 0.7d0
  
* **2021-07-22**

  * fix issue with orientation on mobile, force column at 575px and below
  * use a less heavy hand manipulating margins, keeping closer to SS settings
  * bumped version to 0.6d1
  
* **2021-05-23**

  * better support for mobile
  * fix an issue with desktop buttons continuing to display when in mobile
  * allow user to more easily change the direction and order of the buttons.
    using LESS mixins the choices are row or column direction and normal or
    reverse order
  * bumped version to 0.6d0

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: header%20buttons%20add.less#L1
[6]: header%20buttons%20add.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
