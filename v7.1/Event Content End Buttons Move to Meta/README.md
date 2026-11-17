# Event Content End Buttons Move to Meta

### [License][1]

### Version

  * 0.2d0

#### Squarespace Version

  * 7.1

---

## Quick Install

* For each event item content at the very end add a line block and the buttons
  you want. **The arrangement of these blocks is critical to the code working.**
  The line block must span the whole twelve column layout. In other words the
  line block must be on a line by itself. Add button blocks below the line
  block, arranged in a row. Only one row of buttons will work. Any more than
  that and the code will not work properly. If you need only one button then
  add the button block and a spacer block in a row. Following are some layout
  examples.
  
  ![two buttons layout example][2]
  
  ![one buttons layout example][3]
  
* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[event content end buttons move to meta.html][4]** to
  Event List Settings > Advanced > Page Header Code Injection for the Event Page.

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2021-09-08**
  
  * generalized code to work for more users
  * bumped version to 0.2d0
  
* **2021-02-25**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: read%20me%20assets/two%20button%20layout.png
[3]: read%20me%20assets/one%20button%20layout.png
[4]: event%20content%20end%20buttons%20move%20to%20meta.html#L1
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
