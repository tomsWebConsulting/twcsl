# Header Navigation Mindbody Login or Register Links Add

### [License][1]

### Synopsis

Add Mindbody login or register links to header navigation. 

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Add the following to Website > Website Tools > Code Injection > HEADER.
  
  ```hmtl
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[header navigation mindbody login or register links
  add.html][4]** to Website > Website Tools > Code Injection > FOOTER.

## Notes

Before you install the code check your Mindbody generated code against the code
snippet below. If the two codes look substantially different this code may need
to be updated to work properly.

```html
<script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript">

  </script>
      
<healcode-widget data-version="0.2" data-link-class="loginRegister" data-site-id="[data site id]" data-mb-site-id="[data mb site id]" data-type="account-link" data-inner-html="Login | Register" />
```
    
## Make a Donation

Please consider [making a donation][5].

## Changes

* **2024-04-10**

  * only load script once and only if needed
  * fix for code messing up the layout of other mb widgets
  * bumped version to 0.2.0
  
* **2021-04-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: header%20navigation%20mindbody%20login%20or%20register%20links%20add.html#L1
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
