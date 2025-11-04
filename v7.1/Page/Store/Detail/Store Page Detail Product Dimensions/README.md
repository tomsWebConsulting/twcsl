# Store Page Detail Product Dimensions

### [License][1]

### Synopsis

Add product dimensions to product description and additional info of detail
pages.

### Version

  * 0.5.1

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

* Add code from file **[store page detail product dimensions options.html][4]**
  to Store Settings > Advanced > Page Header Code Injection for the store page.
  Refer to [Per-page code injection][5] for details.
  
* Add code from file **[store page detail product dimensions.html][6]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Refer to [Per-page code injection][5] for details.
  
* Read the code for any instructions within.
  
* Add **[twc-spdpd]** to the product description and/or text blocks in
  additional info. [twc-spdpd] will be replaced with the product dimensions. You
  can use [twc-spdpd] in multiple places.

## Notes

This effect only considers the first variants dimensions. In other words it
doesn't work with products that have more than one variant.

The dimensions entered in the Squarespace editor are shipping dimensions, not
product dimensions. If you don't need to use shipping dimensions for shipping
you can use it for product dimensions. If you need product dimensions as well as
shipping then add the following to a code block in Additional Info.

```html
<!-- begin TWC Store Page Detail Product Dimensions Options -->

  <script>
  
    /*
    
      store page detail product dimensions options
      
      License       : < https://tinyurl.com/s872fb68 >
      
      Version       : 0.5.1
      
      SS Version    : 7.1
      
      Copyright     : 2022-2025 Thomas Creedon
                      
                      Tom's Web Consulting < http://www.tomsWeb.consulting/ >
      
      */
      
    // initialize twc module
    
    window.twc = ( ( self ) => self ) ( window.twc || { } );
    
    // initialize twc spdpd sub-module
    
    twc.spdpd = ( ( self ) => {
    
      const options = {
      
        dimensions : {
        
          length : 1,
          
          width : 2,
          
          height : 3,
          
          weight : 4
          
          }
          
        };
        
      Object
      
        .assign (
        
          self,
          
          options
          
          );
          
      return self;
      
      } ) ( twc.spdpd || { } );
      
    </script>
    
  <!-- end TWC Store Page Detail Product Dimensions Options -->
```

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-08-03**

  * fixed issue with twc.spdpd dimensions and format not merging
  * bumped version to 0.5.1
  
* **2025-07-31**

  * moved options out of main code
  * updated to work with Products V2
  * remove dependency on jQuery
  * bumped version to 0.5.0
  
* **2025-02-01**

  * less processing on format string for better support of entering HTML
  * remove dependency on twcsl
  * bumped version to 0.4.0
  
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
[4]: store%20page%20detail%20product%20dimensions%20options.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: store%20page%20detail%20product%20dimensions.html#L1
[7]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions/p/milk-dip-cup?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
