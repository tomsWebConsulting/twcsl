# Store Page List Categories Description Add

### [License][1]

### Synopsis

Add simple category descriptions to store category pages.

### Version

  * 0.10.1

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

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Page Settings > Advanced > Page Header Code Injection
      for the page. Refer to [per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list categories description
      add.html][6]** to Website > Pages > Website Tools > Code Injection >
      FOOTER. Refer to [Add code to code injection][8] for details.
      
* Add a section to the store page list as the last section.

* Add a code block to the section and set the content to the following. Read the
  code for any instructions within.
  
  ```html
  <script data-twc-splcda type="application/json">
  
    /*
    
      the format of each entry is a category list and a description for the
      category list
      
      for category list use values from Store Settings > Categories >
      [category name] > Edit > NAME field for the store page. you need all
      the text from the field. if you want to add a description to the
      main store page use All for the category list
      
      for a top level category you would enter something like...
      
        Top Category
        
      For a nested category you enter something like...
      
        Top Category > Sub Category
        
      following is an example entry. copy the example entry below and paste
      after the example entry, removing the double forward slash space lines
      from the beginning of each line. repeat for as many categories as you want
      to add a description. this has been done once initially
      
      if your description contains double quote characters they will need to be
      escaped. " becomes \"
      
      */
      
    {
    
      // "[ enter category list here between double quotes replacing square brackets ]" : "
      
      //   [ enter category description here between double quotes replacing square brackets ]
        
      //   ",
        
      "[ enter category list here between double quotes replacing square brackets ]" : "
      
        [ enter category description here between double quotes replacing square brackets ]
        
        ",
        
      }
      
    /*
    
      Optional Attribtues
      
      there are three optional attributes that can be added to the script tag
      
        data-format
        
          value is one of the following. the default is Heading 3. HTML is for
          when you want total control over the description
          
            Heading 1
            Heading 2
            Heading 3
            Heading 4
            Paragraph 1
            Paragraph 2
            Paragraph 3
            Monospace
            HTML
            
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
      
        <script data-twc-splcda data-format="Heading 1" type="application/ld+json">
        
      */
      
    </script>
  ```
  
* If the section is new and Classic Editor, remove the default text block from
  the section, unless you need text text block.

* Save the section.
  
## Notes

The code contains default settings to place the description on the top of the
page. If you want to place the description in another location you will need to
use the **Optional Attributes** to do so.

If you use the format HTML you will need to create your own CSS to style it.

The last page section is only visible while editing the Store page.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2025-03-10**

  * fix for flexbox issue, remove from twc-splcda-description element
  * bumped version to 0.10.1
  
* **2025-03-09**

  * add HTML format option
  * bumped version to 0.10.0
  
* **2024-11-27**

  * fix for last page section not being hidden for site visitors
  * bumped version to 0.9.1
  
* **2024-11-27**

  * hide last page section while not in edit mode
  * bumped version to 0.9.0
  
* **2024-06-16**

  * potential fix for script ld+json consumers syntax error
  * bumped version to 0.8.0
  
* **2023-11-17**

  * second fix for description html not coming through
  * bumped version to 0.7.4
  
* **2023-08-28**

  * fix parsing errors including description html not coming through
  * bumped version to 0.7.3
  
* **2023-08-25**

  * fix for code hiding product detail page contents
  * bumped version to 0.7.2
  
* **2023-08-24**

  * reworked the parsing code to be a bit more flexible
  * fix disparity between how the read me said to configure category list and
    how the code works
  * bumped version to 0.7.1
  
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
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://toms-web-consulting-demos.squarespace.com/store-page-list-categories-description-add?password=twcdemos
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
