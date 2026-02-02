# Button Block Replace Random

### [License][1]

### Synopsis

Display random buttons in a section.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Quick Install

* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[button block replace random.html][5]** to
  Page Settings > Advanced > Page Header Code Injection for the Page. Please see
  [Per-page code injection][6].
  
* Buttons

  * Destination
    
    The destination buttons are the buttons that will be replaced by randomly
    selected source buttons.
    
    * Add button blocks to a section. There is no need to customize the buttons,
      other than their placement, as they will be replaced with source buttons.
      
    * Add a code block with the following code to the same section.
      
      ```html
      <twc-bbrr data-destination/>
      ```
      
  * Source
    
    The source buttons are the buttons that will be selected randomly to replace
    the destination buttons.
    
    * Add a section at the bottom of the Page.
    
    * Add a code block with the following code.
      
      ```html
      <twc-bbrr data-source/>
      ```
      
    * Add your button blocks.

## Note

This effect is not active in SS Preview to test it use [private browsing][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2021-07-22**

  * fix issue with orientation on mobile, force column at 575px and below
  * use a less heavy hand manipulating margins, keeping closer to SS settings
  * bumped version to 0.6d1
  -->
* **2023-09-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: button%20block%20replace%20random.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/207099587-Using-private-browsing-or-incognito-mode
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
