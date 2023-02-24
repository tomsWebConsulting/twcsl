# Store Tag Page Description Add

### [License][1]

### Version 0.1.0

#### SS Version 7.1

#### Fluid Engine Compatible : Not Applicable

---

## Install

* Install [twcsl][2]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store tag page description add.html][3]** to Store
  Settings > Advanced > Page Header Code Injection for the store page. Read the
  code for any instructions within.
  
* In the Store page add a page section as the last section of the store page.
  Add a code block with the following example code.
  
  ```html
  <x-twc-stpda>
  
      [enter tag here replacing square brackets]
      [enter description here replacing square brackets]
      [enter tag here replacing square brackets]
      [enter description here replacing square brackets]
      [enter tag here replacing square brackets]
      [enter description here replacing square brackets]
      [enter tag here replacing square brackets]
      [enter description here replacing square brackets]
      
    </x-twc-stpda>
  ```
  
  Add tag and description pairs on lines by themselves. Each tag must match
  exactly what you entered for each tag in the SS interface. Each description
  must be on a single line. Keep in mind that word wrap 
  
  You can add a data-paragraph-style attribute to the x-twc-stpda tag to select
  a paragraph style. If the attribute is not added then Heading 3 will be used.
  
  ```html
  <x-twc-stpda data-paragraph-style="Heading 3">
  
      [enter tag here replacing square brackets]
      [enter description here replacing square brackets]
      
    </x-twc-stpda>
  ```
  
  Use one of the following paragraph styles.
  
  Heading 1

  Heading 2

  Heading 3

  Heading 4

  Paragraph 1

  Paragraph 2

  Paragraph 3

  Monospace

## Make a Donation

Please consider [making a donation][4].

## Changes

<!-- * **2021-05-19**

  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  -->
* **2023-02-23**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl#install-options
[3]: store%20tag%20page%20description%20add.html#L1
[4]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
