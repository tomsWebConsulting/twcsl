# Store Page List Category Section Reveal

### [License][1]

### Synopsis

Store category page custom headers.

### Version

 * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]
  
  * [Page Section First Blank Hide][5]

---

## Install

* Install [twcsl][6]. After you install the code be sure to continue on with the
  rest of the steps.
  
* Install [Page Section First Blank Hide][7]. After you install Page Section
  First Blank Hide be sure to continue on with the rest of the steps.
  
* Add code from file **[store page list category section reveal.html][8]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  
* In the store page add a page section. Set the section up as desired. Add a 
  code block at the top of the section with the following code.
  
  ```html
  <x-twc-splcsr>
  
    <!--
    
      the format of each line is a category list
      
      for category list use values from Store Settings > Categories >
      [category name] > Edit > NAME field for the store page. you need all
      the text from the field
      
      for a top level category you would enter something like...
      
        Top Category
        
      For a nested category you enter something like...
      
        Top Category > Sub Category
        
      the category list can not contain a colon character
      
      following is an example line. copy the example line below and paste
      after the example line. remove the less than exclamation double dash space
      from the beginning of the pasted line and space double dash greater than
      from the end. repeat for as many category list as you want to reveal a
      section. this has been done once initially
      
      -->
      
    <!-- [enter category list here replacing square brackets] -->
    
    [enter category list here replacing square brackets]
    
    </x-twc-splcsr>
  ```
  
  Repeat this pattern for as many categories as desired. Category list is a
  delimted ( > ) list of categories. An example. Let's say you have the
  following store categories set up.
  
  * red
  
  * green
  
    * cyan
  
  * blue
  
  To reveal a page section for the cyan category, the data-categories value
  above would be **green > cyan**.
  
  You can have a default section revealed when no section with a category is
  defined. This default section will show on category pages with no
  corresponding page section defined. To have a default section add a code block
  at the top of the section with the following code.
  
  ```html
  <x-twc-splcsr>
  
    default
    
    </x-twc-splcsr>
  ```

## Note

This code has a downside in that it is loading page sections that will not be
displayed.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-09-14**

  * support for multiple categories using a single section
  * bumped version to 0.3.0
  
* **2023-06-24**

  * support for nested categories
  * bumped version to 0.2.0
  
* **2022-09-18**

  * replace twcsl getFirstPageSection method with getPageSectionNth
  * bumped version to 0.1.1
  
* **2021-08-31**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Page%20Section%20First%20Blank%20Hide
[7]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Section/Page%20Section%20First%20Blank%20Hide#page-section-first-blank-hide
[6]: https://github.com/tomsWebConsulting/twcsl#install-options
[8]: store%20page%20list%20category%20section%20reveal.html#L1
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
