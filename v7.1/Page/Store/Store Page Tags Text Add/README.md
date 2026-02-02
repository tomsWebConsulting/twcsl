# Store Page Tags Text Add

### [License][1]

### Synopsis

Add text to products.

### Version

  * 0.2.1

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Quick Install

* Options

  * Page Specific
  
    Use this option when you want only one Page to have this effect.
    
    * Add code from file **[store page tags text add.html][4]** to Store
      Settings > Advanced > Page Header Code Injection for the Store Page.
      Refer to [Per-page code injection][5] for details.
      
  * Site-wide
  
    Use this option when you want multiple Pages to have this effect.
    
    * Add code from file **[store page tags text add.html][4]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][6] for details.
      
* Read the code for any instructions within.

## How To Use

Lets say your site sells products. You want to display tags on each product that
show the value alignments of those products so your customers can choose the
products that best align with their own values. For example, women owned, carbon
neutral, plastic free, and etc. Of course value alignments isn't the only use of
these tags. You can use them for anything of which you can think.

Edit the product and add the following tags. **twc-sptta Women Owned ld**,
**twc-sptta Carbon Neutral ld**, and **twc-sptta Plastic Free ld**. The
**twc-sptta** prefix will be stripped from the tags and they will be added to
the product details.

## Tag Syntax

  * twc-sptta
  
  * text
  
  * page show : list & detail, list, or detail
  
    * use **ld**, **l**, or **d**
    
```text
twc-sptta [ text replacing square brackets ] [ page show replacing square brackets ]
```

The tags are a simple unordered list displayed with flexbox. There is a
**twc-sptta** class you can use for your own custom CSS for further styling.

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-08-03**

  * updated to work with v7.1 Products V2
  * bumped version to 0.2.1
  
* **2025-06-05**

  * removed twcsl dependency
  * removed jQuery dependency
  * bumped version to 0.2.0
  
* **2024-01-25**

  * fix for tags being misapplied
  * bumped version to 0.1.2
  
* **2023-12-22**

  * fix for tags not being retrieved from api
  * bumped version to 0.1.1
  
* **2023-10-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: store%20page%20tags%20text%20add.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: https://toms-web-consulting-demos.squarespace.com/store-page-tags-text-add?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
