# Add Buttons to Header

### Version 0.6d1

---

## Quick Install

Add the following to Settings > Advanced > Code Injection > HEADER.

`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`

Add code from file **add buttons to header.css** to Design > Custom CSS.

Add code from file **add buttons to header.html** to Settings > Advanced >
Code Injection > FOOTER.

## Changes

* **2021-07-22**
<br><br>
  * fix issue with orientation on mobile, force column at 575px and below
  * use a less heavy hand manipulating margins, keeping closer to SS settings
  * bumped version to 0.6d1
  <br><br -->
* **2021-05-23**
<br><br>
  * better support for mobile
  * fix an issue with desktop buttons continuing to display when in mobile
  * allow user to more easily change the direction and order of the buttons.
    using LESS mixins the choices are row or column direction and normal or
    reverse order
  * bumped version to 0.6d0
