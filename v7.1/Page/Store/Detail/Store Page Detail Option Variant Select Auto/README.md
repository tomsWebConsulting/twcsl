# Store Page Detail Option Variant Select Auto

### [License][1]

### Synopsis

Auto select variants.

### Version

  * 0.1.1

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Options
  
    * Page Specific
    
      * Use this option if you want to have this effect on only one Page.
        
      * Add code from file **[store page detail option variant select auto
        options.html][6]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for any
        instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Store Page Detail Option Variant Select Auto -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@38131be379b6b1e8c762a040759865c1d26b2241/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Option%20Variant%20Select%20Auto/store%20page%20detail%20option%20variant%20select%20auto.min.js" type="module"></script>
          
          <!-- end TWC Store Page Detail Option Variant Select Auto -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      * Add code from file **[store page detail option variant select auto
        options.html][6]** to Website > Pages > Custom Code > Code Injection >
        FOOTER. Read the code for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Store Page Detail Option Variant Select Auto -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@38131be379b6b1e8c762a040759865c1d26b2241/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Option%20Variant%20Select%20Auto/store%20page%20detail%20option%20variant%20select%20auto.min.js" type="module"></script>
          
          <!-- end TWC Store Page Detail Option Variant Select Auto -->
          
        ```
        
      * Refer to [Add code to code injection][8] for details.
      
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    * Use this option if you want to have this effect on only one Page.
      
    * Add code from file **[store page detail option variant select auto
      options.html][6]** to Page Settings > Advanced >
      Page Header Code Injection for the Page. Read the code for any
      instructions within.
      
    * Add code from file **[store page detail option variant select
      auto.html][9]** to Page Settings > Advanced >
      Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
      
  * Site-wide
  
    * Add code from file **[store page detail option variant select auto
      options.html][6]** to Website > Pages > Custom Code > Code Injection >
      FOOTER. Read the code for any instructions within.
      
    * Add code from file **[store page detail option variant select
      auto.html][9]** to Website > Pages > Custom Code > Code Injection >
      FOOTER.
      
    * Refer to [Add code to code injection][8] for details.

## Notes

This code will take URL query parameters and assign them to optionVariantMap,
overriding any existing values.

A query parameter should match exactly what is entered in the Squarespace
product editor. For example if you have an **Option** Size with **Variants**
Small, Medium, and Large. You would have a URL like the following.

```text
https://my.site/store/p/myproduct?Size=Small
```

If you have more complicated **Variants** text like "Small (12 oz)" I suggest
properly encoding the query parameter value like the following.

```text
https://my.site/store/p/myproduct?Size=Small%20(12%20oz)
```

You can [use this tool][10] to help you encode your URLs. Select the
**encodeURI** encoder/decoder. The nice thing with this tool is you can type in
your text normally and it will do the encoding for you. Then you just copy and
paste the encoded text where needed.

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-04-20**

  * fixed issue with Y not defined
  * bumped version to 0.1.1
  
* **2026-04-19**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: store%20page%20detail%20option%20variant%20select%20auto%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: store%20page%20detail%20option%20variant%20select%20auto.html#L1
[10]: https://urlencode.co/
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
