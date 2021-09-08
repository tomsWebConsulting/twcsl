# Event Content End Buttons Move to Meta

### Version 0.2d0

#### SS Version 7.1

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
  
  ![two buttons layout example](read%20me%20assets/two%20button%20layout.png)
  
  ![one buttons layout example](read%20me%20assets/one%20button%20layout.png)
  
* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  ```
  
* Add code from file
  **[event content end buttons move to meta.html](event%20content%20end%20buttons%20move%20to%20meta.html#L1)**
  to Event List Settings > Advanced > Page Header Code Injection for the Event
  page.

## Make a Donation

Please consider [making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2021-09-08**
  
  * generalized code to work for more users
  * bumped version to 0.2d0
  
* **2021-02-25**
  
  * initial version
