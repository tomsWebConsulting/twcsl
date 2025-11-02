# Store Page List Category Theme Change

### [License][1]

### Synopsis

Change products section theme per category.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Page List Categories Cache][4]

---

## Install

* Install [Store Page List Categories Cache][4]. After you install Store Page
  List Categories Cache be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list category theme change.html][5]**
      to Store Settings > Advanced > Page Header Code Injection for the store
      page. Refer to [Per-page code injection][6] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list category theme change.html][5]** to
      Website > Pages > Custom Code > Code Injection > FOOTER. Refer to [Add
      code to code injection][7] for details.
      
* For each theme that you want to apply to a category page you need to add a
  section to the store with a code block and particular text. For example lets
  say you want to have a category called red that has a red background. First
  you set up a section with color theme. There is Squarespace documentation that
  covers that topic, so we won't go into it here.
  
  Edit the Store page. Create a new section. I suggest adding it below the store
  section. Select a color theme. Add a code block. In the code block add the
  following.
  
  ```html
  <x-twc-splctc>
  
    red
    
    </x-twc-splctc>
  
  ```
  
  I suggest removing the default text block. Repeat the previous steps to have
  different categories have different themes. Save the page. For each
  x-twc-splctc tag you can have multiple categories. For example.
  
  ```html
  <x-twc-splctc>
  
    red, green, blue
    
    </x-twc-splctc>
  
  ```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-11-02**

  * checked v7.1 Products V2 compatibility
  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.3.0
  
* **2022-02-14**
  
  * fix for code not working when not in Preview
  * bumped version to 0.2d0
  
* **2021-10-06**
  
  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Cache#store-page-list-categories-cache
[5]: store%20page%20list%20category%20theme%20change.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
