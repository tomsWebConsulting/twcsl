# Store Page Tag Rating

### [License][1]

### Synopsis

Add ratings to Store page products.

### Version

  * 0.2.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][4]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store tag rating.html][5]** to Store Settings >
      Advanced > Page Header Code Injection for the store page. Please see
      [Per-page code injection][6]. Read the code for any insptructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store tag rating.html][5]** to Settings > Developer
      Tools > Code Injection > FOOTER. Please see [Add code to code
      injection][7]. Read the code for any insptructions within.

## How To Use

Lets say you have site that sells bottles of wine. The bottles of wine have
been rated by entities like Wine Spectator. A bottle of wine you sell
received a rating of 4 out of 5 stars and you want to display that rating to
your site visitors to encourage sales.

* Edit the product and add a tag of **twc-sptr Wine Spectator 4**. The twc-sptr
  indicates to the code that this is a rating. The number at the end is the
  rating. The text in the middle is the label.

## Classes

Some classes are provided for styling.

* twc-sptr

* label

* rating

  * true ( filled stars )
  
  * false ( unfilled stars )

## Notes

This is not an site visitor rating system. There are no half points. For example
you can not have 3 1/2 stars.

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2023-07-28**

  * sort tags, simple alpha
  * bumped version to 0.2.0
  
* **2023-06-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl#install-options
[5]: store%20page%20tag%20rating.html#L1
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-tag-rating?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
