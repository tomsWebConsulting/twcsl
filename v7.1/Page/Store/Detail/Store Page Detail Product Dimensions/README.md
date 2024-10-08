# Store Page Detail Product Dimensions

### [License][1]

### Synopsis

Add product dimensions to product description and additional info of detail
pages.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Tom's Web Consulting Squarespace Library][4]

---

## Install

* Install [twcsl][5]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[store page detail product dimensions.html][6]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Please see [per-page code injection][7]. Read the code for any instructions
  within. **There are some caveats to using this effect.**
  
* Add **[twc-spdpd]** to the product description and/or text blocks in
  additional info. [twc-spdpd] will be replaced with the product dimensions. You
  can use [twc-spdpd] in multiple places.

## Notes

This effect only considers the first variants dimensions. In other words it
doesn't work with products that have more than one variant.

The dimensions entered in the squarespace editor are shipping dimensions, not
product dimensions. If you don't need to use shipping dimensions for shipping
you can use it for product dimensions. If you need product dimensions as well as
shipping then add the following to a code block in Additional Info.

```html
<script type="application/vnd.twc.spdpd">

  {
  
    "dimensions" : {
    
      "length" : 1,
      
      "width" : 2,
      
      "height" : 3,
      
      "weight" : 4
      
      }
      
    }
    
  </script>
```

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2024-09-07**

  * support being able to use shipping dimension for shipping and product
    dimensions
  * add weight to format
  * remove trigger text from meta description and
    script[type="application/ld+json"] elements
  * use TreeWalker in search for trigger text and replace
  * bumped version to 0.3.0
  
* **2024-08-21**

  * fix for text blocks being hidden on category pages ( all and etc. )
  * bumped version to 0.2.2
  
* **2024-08-19**

  * fix for text blocks being hidden in footer
  * bumped version to 0.2.1
  
* **2024-08-16**

  * control decimal places in format instead of a single setting
  * use site measurement standard setting for conversions
  * bumped version to 0.2.0
  
* **2022-05-12**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl
[5]: https://github.com/tomsWebConsulting/twcsl#install-options
[6]: store%20page%20detail%20product%20dimensions.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions/p/milk-dip-cup?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
