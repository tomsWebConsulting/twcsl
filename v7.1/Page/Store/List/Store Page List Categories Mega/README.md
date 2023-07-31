# Store Page List Categories Mega

### [License][1]

### Synopsis

Store page list categories mega menu.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Categories Cache][4]

---

## Install

* Install [Store Categories Cache][4]. After you install Store Categories Cache
  be sure to continue on with the rest of the steps.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store page list categories mega.html][5]** to Store
      Settings > Advanced > Page Header Code Injection for the store page.
      Please see [Per-page code injection][6]. Read the code for any
      instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store page list categories mega.html][5]** to
      Settings > Developer Tools > Code Injection > FOOTER. Please see [Add code
      to code injection][7]. Read the code for any instructions within.

* In the **store categories cache** code set the callback.
  
  Change the following line...
  
  ```text
      callback : undefined
  ```
  
  ...to...
  
  ```text
      callback : twcSplcm
  ```

## Note

In the editor when you change the CATEGORIES TYPE (Sidebar/Top) you will need to
refresh the page for the code to pickup on the change.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

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
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Store%20Categories%20Cache#store-categories-cache
[5]: store%20page%20list%20categories%20mega.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-list-categories-mega?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
