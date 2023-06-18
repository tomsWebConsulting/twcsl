# Store Tag Rating

### [License][1]

### Synopsis

Add ratings to products.

### Version

  * 0.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Tom's Web Consulting Squarespace Library][2]

---

## Install

* Install [twcsl][3]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Options

  * Store Page Specific
  
    * This option will be the one most will want to use if you have only a
      single store page you want to have this effect.
      
    * Add code from file **[store tag rating.html][4]** to Store Settings >
      Advanced > Page Header Code Injection for the store page. Please see
      [Per-page code injection][6]. Read the code for any instructions within.
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple store pages
      where you want to have this effect.
      
    * Add code from file **[store tag rating.html][4]** to Settings > Developer
      Tools > Code Injection > FOOTER. Please see [Add code to code
      injection][5]. Read the code for any instructions within.

## How To Use

Lets say you have site that sells bottles of wine. The bottles of wine have
been rated by entities like Wine Spectator. A bottle of wine you sell
received a rating of 4 out of 5 stars and you want to display that rating to
your site visitors to encourage sales.

* Edit the product and add a tag of **twc-str Wine Spectator 4**. The twc-str
  indicates to the code that this is a rating. The number at the end is the
  rating. The text in the middle is the label.

## Classes

Some classes are provided for styling.

* twc-str

* label

* rating

  * true ( filled stars )
  
  * false ( unfilled stars )

## Notes

This is not an site visitor rating system. There are no half points. For example
you can not have 3 1/2 stars.

## Make a Donation

Please consider [making a donation][7].

## Changes

<!-- * **2021-05-19**

  * added a choice of paragraph styles
  * user can set store url slug
  * bumped version to 0.2d0
  -->
* **2023-06-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl
[3]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: store%20tag%20rating.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[7]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
