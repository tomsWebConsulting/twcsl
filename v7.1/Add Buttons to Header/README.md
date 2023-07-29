# Add Buttons to Header

### [License][1]

### Version 0.7d1

#### SS Version 7.1

#### Fluid Engine Compatible : Not Applicable

---

## Quick Install

* Add the following to Settings > Developer Tools > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  ```
  
* Add code from file **[add buttons to header.css][2]** to Design > Custom CSS.
  
* Add code from file **[add buttons to header.html][3]** to Settings >
  Developer Tools > Code Injection > FOOTER. Read the code for any instructions within.

## Make a Donation

Please consider [making a donation][4].

## Changes

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
[2]: add%20buttons%20to%20header.css#L1
[3]: add%20buttons%20to%20header.html#L1
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
