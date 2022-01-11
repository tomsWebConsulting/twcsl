# Add Buttons to Header

### Version 0.7d0

#### SS Version 7.1

---

## Quick Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`
    ```
  
* Add code from file
  **[add buttons to header.css](add%20buttons%20to%20header.css#L1)**
  to Design > Custom CSS.
  
* Add code from file
  **[add buttons to header.html](add%20buttons%20to%20header.html#L1)**
  to Settings > Advanced > Code Injection > FOOTER. Read the code for any
  instructions within.

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

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
