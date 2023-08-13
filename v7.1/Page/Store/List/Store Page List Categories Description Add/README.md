# Store Page List Categories Description Add

### [License][1]

### Synopsis

Add simple category descriptions to store category pages.

### Version

  * 0.7.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Store Settings > Advanced > Page Header Code Injection
      for the store page. Please see [Per-page code injection][7].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Settings > Developer Tools > Code Injection > FOOTER.
      Please see [Add code to code injection][8].
      
* Add a section to the store page list as the last section.

* Add a code block to the section and set the content to the following. Read the
  code for any instructions within.
  
  ```html
  <x-twc-splcda>
  
    <!--
    
      the format of each line is a category list and a description for
      the category list
      
      for category list use values from Store Settings > Categories >
      [category name] > Edit > NAME field for the store page. you need all
      the text from the field. if you want to add a description to the
      Store page ( i.e. grid/listing ) leave the category empty, i.e. ''.
      for a top level category you would enter something like
      'Top Category'. For a nested category you enter something like
      'Top Category > Sub Category'
      
      following is an example line. copy the example line below and paste
      after the example line. remove the less than exclamation double dash space
      from the beginning of the pasted line and space double dash greater than
      from the end. repeat for as many categories as you want to add a
      description. this has been done once initially
      
      -->
      
    <!-- [enter category list here between single quotes replacing square brackets] : [enter category description here between single quotes replacing square brackets] -->
    
    [enter category list here between single quotes replacing square brackets] : [enter category description here between single quotes replacing square brackets]
    
    <!--
    
      x-twc-splcda Optional Attribtues
      
      there are three optional attributes that can be added to the x-twc-splcda
      tag.
      
        data-paragraph-style
        
          value is one of the following. the default is Heading 3
          
            Heading 1
            Heading 2
            Heading 3
            Heading 4
            Paragraph 1
            Paragraph 2
            Paragraph 3
            Monospace
            
        data-selector-destination
        
          value is any valid selector value. the default is
          .nested-category-title
          
        data-action
        
          value is one of the following. the default is after
          
            after
            append
            before
            prepend
            
      Example of Adding an Attribute
      
        <x-twc-splcda data-paragraph-style="Heading 1">
        
      -->
      
    </x-twc-splcda>
  ```
  
* Remove the default text block from the section.

* Save the section.
  
## Notes

The code contains default settings to place the description on the top of the
page. If you want to place the description in another location you will need to
create your own settings to do so.

The last page section is only visible while editing the site.

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-08-13**

  * move configuration out of code and into code block
  * bumped version to 0.7.0
  
* **2023-08-08**

  * support nested categories
  * bumped version to 0.6.0
  
* **2023-06-16**

  * make code more flexible in where the description can be placed
  * bumped version to 0.5.0
  
* **2023-05-31**

  * make code for urlSlugs work the way the text describes to enter them. also
    be flexible with either starting with a forward slash or not
  * bumped version to 0.4.1
  
* **2023-02-16**

  * revert back to using category slugs instead of name, better support for
    nested categories
  * bumped version to 0.4.0
  
* **2021-08-12**

  * support for HTML in descriptions
  * use category instead of category slugs
  * bumped version to 0.3d0
  
* **2021-06-27**

  * added window.twc
  * remove debugger statement
  * bumped version to 0.2d3
  
* **2021-06-15**

  * fix issue with not being able to add category description to store page
    grid/listing
  * bumped version to 0.2d2
  
* **2021-06-11**

  * use twcsl
  * bumped version to 0.2d1
  
* **2021-05-19**

  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  
* **2021-01-14**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20list%20categories%20description%20add.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
