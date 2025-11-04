# Blocks Tabbed

### [License][1]

### Synopsis

Create rudimentary tabbed effect with button and other blocks.

### Version

 * 0.3.0

#### SS Version

  * 7.1
  
#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

  * [jQuery][4]

---

## Install

* Add the following to Website > Pages > Custom Code > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[blocks tabbed.html][5]** to Page Settings >
      Advanced > Page Header Code Injection for the page. Refer to [Per-page
      code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[blocks tabbed.html][5]** to Website > Pages >
      Custom Code > Code Injection > FOOTER. Refer to [Add code to code
      injection][7] for details.
      
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
    
      * Use this option if you have only a single page you want to have this
        effect.
        
      * Add the following to Page Settings > Advanced >
        Page Header Code Injection for the page. Refer to [Per-page code
        injection][6] for details.
        
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
    
      * Use this option if you have multiple pages where you want to have this
        effect.
        
      * Add the following to Website > Pages > Custom Code > Custom CSS.
      
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
  #twc-bt-[ enter group here replacing square brackets ]-[ enter a content block id here replacing square brackets ]
  ```
  
  The **group** helps the code keep track of tab and content blocks as groups.
  You can use characters a - z, A - Z, and 0 - 9. Do not use the dash character.
  
  Some examples...
  
    * #twc-bt-1-#block-123456789012345678901234
    
    * #twc-bt-abc-#block-123456789012345678901234
    
  Please note that groups must be unique when a page loads. Otherwise you will
  get strange results. This comes into play when you have multiple groups on a
  page.
  
  Repeat for as many tab/content block pairs as you have.

## Demo

You can see a [demo of this effect here][9].

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-11-30**

  * more efficient code, no functional changes
  * bumped version to 0.3.0
  
* **2024-05-30**

  * remove href from tab button
  * remove errant console.log statement
  * bumped version to 0.2.1
  
* **2024-05-29**

  * remove one effect per page section restriction
  * bumped version to 0.2.0
  
* **2024-05-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: blocks%20tabbed.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: https://toms-web-consulting-demos.squarespace.com/blocks-tabbed?password=twcdemos
[8]: https://www.heathertovey.com/squarespace-id-finder/
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
