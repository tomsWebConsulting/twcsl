# Store Page List Categories Mega

### [License][1]

### Synopsis

Store page list categories mega menu.

### Version

  * 0.4.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Page List Categories Cache][4]
  
  * [Tom's Web Consulting Squarespace Library][5]

---

## Install

* Install [twcsl][6]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Install [Store Page List Categories Cache][4]. After you install Store
  Categories Cache be sure to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[store page list categories mega.html][7]** to Store
      Settings > Advanced > Page Header Code Injection for the store page
      **before** the **store page list categories cache** code. Refer to
      [Per-page code injection][8] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[store page list categories mega.html][7]** to
      Website > Pages > Custom Code > Code Injection > FOOTER **before** the
      **store page list categories cache** code. Refer to [Add code to code
      injection][9] for details.
      
* Read the code for any instructions or options within.

## Note

In the editor when you change the CATEGORIES TYPE (Sidebar/Top) you will see
Squarespace's default style of categories until you save the page. If for some
reason the categories don't update after saving the page, refresh the page.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-01-14**

  * update to work with Store Page List Categories Cache v0.2.0
  * bumped version to 0.4.0
  
* **2024-12-22**

  * more minor tweaks to spacing
  * bumped version to 0.3.2
  
* **2024-04-30**

  * fix for hide icons spacing issue
  * bumped version to 0.3.1
  
* **2024-04-30**

  * add option to hide icons
  * add option to expand all categories on page load
  * bumped version to 0.3.0
  
* **2023-07-31**

  * fix for levels that have no children not lining up with those that do for
    type top
  * fix for mega not not being added at farthest branches of tree
  * add CSS to hide more elements not needed for effect
  * bumped version to 0.2.1
  
* **2023-07-31**

  * support for mobile
  * bumped version to 0.2.0
  
* **2023-07-03**

  * make font and markers larger on mobile
  * fix some spacing issues on mobile
  * bumped version to 0.1.1
  
* **2023-06-30**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/List/Store%20Page%20List%20Categories%20Cache#store-page-list-categories-cache
[5]: https://github.com/tomsWebConsulting/twcsl
[6]: https://github.com/tomsWebConsulting/twcsl#install-options
[7]: store%20page%20list%20categories%20mega.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[10]: https://toms-web-consulting-demos.squarespace.com/store-page-list-categories-mega?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
