# Events Page List Day Index

### [License][1]

### Synopsis

Create a button index section for the [Events Page List Day Wrapper][2] effect.

### Version

 * 0.2.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Events Page List Day Wrapper][5].

#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Install [Events Page List Day Wrapper][2]. After you install the code be sure
  to continue on with the rest of the steps.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single Events page you want to have
      this effect.
      
    * Add code from file **[events page list day index.html][6]** to
      Page Settings > Advanced > Page Header Code Injection for the page. Refer
      to [per-page code injection][7] for details.
      
  * Site-wide
  
    * Use this option if you have multiple Events pages where you want to have
      this effect.
      
    * Add code from file **[events page list day index.html][6]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][8].
      
* Add a Classic Editor section before the events section. Add a Button
  block and set the link to **#twc-epldi { day : numeric, month : short }**. You
  can control the format by using [Date-time component options][9]. Add a
  Spacer block on the same row as the Button block and size the Button block as
  desired. This button will be used as a template for all other buttons. Remove
  the Text block.

## Note

If the effect is not showing up as expected, when editing your site, reload the
page.

## Demo

You can see a [demo of this effect here][10].

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2025-05-24**

  * added CSS to handle mobile styling buttons 2 column
  * bumped version to 0.2.0
  
* **2025-05-24**

  * fixed left padding on some buttons on mobile
  * bumped version to 0.1.1
  
* **2025-05-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Events/List/Events%20Page%20List%20Day%20Wrapper#events-page-list-day-wrapper
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Events/List/Events%20Page%20List%20Day%20Wrapper
[6]: events%20page%20list%20day%20index.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#date-time_component_options
[10]: https://toms-web-consulting-demos.squarespace.com/events-page-list-day-index?password=twcdemos
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
