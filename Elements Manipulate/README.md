# Elements Manipulate

### [License][1]

### Synopsis

Move or copy a selector source to a selector destination with the action of
append, prepend, or replace.

### Version

  * 0.5.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2], [Bedford template family][12])

#### v7.1 Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [jQuery][5]

---

## Install

* Add code from file **[elements manipulate.less][6]** to Website > Pages >
  Website Tools > Custom CSS. Read the code for any instructions within.
  
* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Add code from file **[elements manipulate.html][7]** to Website > Pages >
  Website Tools > Code Injection > FOOTER. Please see [Add code to code
  injection][8]. Read the code for any instructions within.
  
* Options

  When you want have a common element that is available across a number of pages
  they need to be stored in a commonly accessable area like the footer of the
  site.

  * v7.1
  
    * Add a section to the site footer as the last section. Add your source
      blocks there.
      
  * v7.0
  
    * Brine template family
    
      * Put your blocks in the Footer Bottom Blocks and in the **elements
        manipulate.less** file and set **.v7-0-brine** to **true**.
        
    * Bedford template family
    
      * This template only has one footer so you need to create your own CSS to
        hide the common elements.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2024-05-10**

  * add after and before options
  * support Bedford template family
  * bumped version to 0.5.0
  
* **2023-06-10**

  * add source selector copy feature
  * bumped version to 0.4.0
  
* **2023-06-08**

  * fix syntax errors
  * bumped version to 0.3.1
  
* **2023-06-06**

  * add a selector parent destination
  * bumped version to 0.3.0
  
* **2023-05-31**

  * add ability to append and prepend to selector destination
  * bumped version to 0.2.0
  
* **2022-05-04**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[12]: https://support.squarespace.com/hc/en-us/articles/205825968-Bedford-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://jquery.com/
[6]: elements%20manipulate.less#L1
[7]: elements%20manipulate.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
