# Page Section Hide After Expiration Date

### [License][99]

### Version 0.1d0

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Quick Install

* Add the following to Settings > Advanced > Code Injection > HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  ```
  
* Add code from file
**[page section hide after expiration date.html](page%20section%20hide%20after%20expiration%20date.html#L1)**
to Page Settings > Advanced > Page Header Code Injection for the page. Read the
code for any instructions within.

## Notes

Lets say the time zone for your business is the pacific coast region of North
America. You want a page section to "expire" (be hidden) for an event or sale
that ends on and after November 19th 2021 12 AM. For the date the time zone is
in daylight savings time for most areas in the region so utcTimeOffset hour is
set to -7. For a date in standard time the value would be -8. Following is an
example of setting the value for the expiration variable. 

```javascript
    let expiration = {
    
      year : 2021,
      month : 11,
      day : 19,
      hour : 0,
      minute : 0,
      second : 0,
      
      utcTimeOffset : {
      
        hour : -7,
        minute : 0
        
        }
        
      };
```      

You can find a page section id by using Heather Tovey's
[Squarespace ID Finder](https://www.heathertovey.com/squarespace-id-finder/).

To use SIF go to your page and use SIF. You will see something like the
following.

![squarespace id finder example](read%20me%20assets/data%20section%20id.png)

## Make a Donation

Please consider
[making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

<!-- * **2021-11-15**

  * fix for description layout issue when categories are set to side for Brine
  * bumped version to 0.3d0
  
* **2021-07-25**

  * use twcsl
  * bumped version to 0.2d0
  -->
* **2021-11-18**

  * initial version
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
