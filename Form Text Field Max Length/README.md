# Form Text Field Max Length

### Version 0.3d0

#### SS Versions 7.1, 7.0

---

## Quick Install

* Add code from file
**[form text field max length.css](form%20text%20field%20max%20length.css#L1)**
to Design > Custom CSS.

* Add the following to Settings > Advanced > Code Injection > HEADER.

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://d1j8mu9lowy9zf.cloudfront.net/twcsl/0.1d15/twcsl.js"></script>
  ```
  
* Add code from file
**[form text field max length.html](form%20text%20field%20max%20length.html#L1)**
to Settings > Advanced > Code Injection > FOOTER.

* Add a form block to your page and set up as desired.

  For each text or text area field where you want a max character limit do the
  following.
  
  On a line by itself enter **ftfml : [enter max length number here]**. Here is
  an example.
  
  ```
  ftfml : 10
  ```
  
  If you want to have a description for the field be sure to keep the **ftfml**
  line, on a line by itself. I suggest keeping the **ftfml** line near the top of
  the description to remind you that the field is being handled specially by the
  code.

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-09-23**

  * reworked the code to be much more generalized
  * changed name from Set Store Product Detail Named Form Labeled Text Field
    Character Max Length to Form Text Field Max Length
  * bumped version to 0.3d0
  
* **2021-07-30**

  * added missing quick install text
  * bumped version to 0.2d1
  
* **2021-07-28**

  * generalized a bit to handle text and text area fields
  * bumped version to 0.2d0
  
* **2020-11-21**

  * initial version
