# Blocks Tabbed

### [License][1]

### Synopsis

Create rudimentary tabbed blocks with button blocks and other blocks.

### Version

 * 0.1.0

#### SS Version

  * 7.1
  
#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

  * [jQuery][4]

---

## Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add code from file **[blocks tabbed.html][5]** to Page Settings >
      Advanced > Page Header Code Injection for the page. Please see [per-page
      code injection][6].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple pages where
      you want to have this effect.
      
    * Add code from file **[blocks tabbed.html][5]** to Website > Pages >
      Website Tools > Code Injection > FOOTER. Please see [Add code to code
      injection][7].

* In a section add at least two button blocks. I suggest a horizontal
  orientation for the buttons as that is the easiest layout. You can do other
  layouts but this effects default CSS isn't designed to accomodate all designs.
  You would need to add your own custom CSS.
  
  Hence forth I will refer to these blocks as tab blocks.

* Add a corresponding number of blocks to match the number of tab blocks. I
  suggest stacking the blocks vertically for the Classic Editor and overlay them
  for Fluid Engine. Other layouts are possbile but this effects default CSS
  is not designed to accomodate all designs. You would need to add your own
  custom CSS. Hence forth I will refer to these blocks as content blocks.
  
  Text blocks in the Classic Editor when aligned vertically on top of each other
  have a tendency to collapse together. Use line blocks in between to keep them
  separate. To hide line blocks use the following example code. Replace the
  example block ids with your own. You can find block ids by using Heather
  Tovey's [Squarespace ID Finder][8].
  
  In Fluid Engine sections you will probably want to select the no grid gap
  option so that your tab buttons can abut each other.
  
  * Options
  
    * Page Specific
    
      Add the following to Page Settings > Advanced > Page Header Code Injection
      for the page. Please see [per-page code injection][6].
    
      ```html
      <style>
      
        /* twc-bt line block hide */
        
        body:not( .sqs-edit-mode-active ) #block-123456789012345678901234,
        body:not( .sqs-edit-mode-active ) #block-098765432109876543210987,
        x-twc-bt-selector /* dummy selector so that each selector line above can end
                             with a comma */
          {
          
            display : none;
            
            }
            
        </style>
      ```
      
    * Site-wide
    
      Add the following to Website > Pages > Website Tools > Custom CSS.
      
      ```css
      /* twc-bt line block hide */
      
      body:not( .sqs-edit-mode-active ) #block-123456789012345678901234,
      body:not( .sqs-edit-mode-active ) #block-098765432109876543210987,
      x-twc-bt-selector /* dummy selector so that each selector line above can
                           end with a comma */
        {
        
          display : none;
          
          }
      ```

* For each content block you will want to note its block id. You can find block
  ids by using Heather Tovey's [Squarespace ID Finder][8].
  
* To link a tab block to a content block set the tab block's link to the
  following format.
  
  ```text
  #twc-bt-[ enter a content block id here replacing square brackets ]
  ```
  
  An example **#twc-bt-#block-123456789012345678901234**.
  
  Repeat for as many tab/content block pairs as you have.

## Note

This effect can only be applied once per section.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

<!-- * **2022-09-18**

  * replace twcsl getFirstPageSection method with getPageSectionNth
  * bumped version to 0.1.1
  -->
* **2024-05-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: blocks%20tabbed.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://toms-web-consulting-demos.squarespace.com/blocks-tabbed?password=twcdemos
[8]: https://www.heathertovey.com/squarespace-id-finder/
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
