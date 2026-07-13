# Store Page Savings Percentage

### [License][1]

### Synopsis

Add savings percent to products on sale.

### Version

  * 0.2.0

#### SS Version

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Store Page Price Change][4]

---

## Install

* Install [Store Page Price Change][5]. After you install the code be sure to
  continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Store page.
        
        * Add code from file **[store page savings percentage options.html][8]**
          to Page Settings > Advanced > Page Header Code Injection for the Store
          Page. Read the code for any instructions within.
          
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Store Page.
          
          ```html
          <!-- begin TWC Store Page Savings Percentage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@bbdc1ca1b7ab2836d9ea26b6afb307e32fffdbe6/Page/Store/Store%20Page%20Savings%20Percentage/store%20page%20savings%20percentage.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@bbdc1ca1b7ab2836d9ea26b6afb307e32fffdbe6/Page/Store/Store%20Page%20Savings%20Percentage/store%20page%20savings%20percentage.min.js" type="module"></script>
            
            <!-- end TWC Store Page Savings Percentage -->
            
          ```
          
        * Refer to [per-page code injection][9] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Store Pages.
        
        * Add code from file **[store page savings percentage options.html][8]**
          to Website > Pages > Custom Code > Code Injection > FOOTER for the
          Store Page. Read the code for any instructions within.
          
        * Add the following code to Website > Pages > Custom Code >
          Code Injection > FOOTER.
          
          ```html
          <!-- begin TWC Store Page Savings Percentage -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@bbdc1ca1b7ab2836d9ea26b6afb307e32fffdbe6/Page/Store/Store%20Page%20Savings%20Percentage/store%20page%20savings%20percentage.min.css" rel="stylesheet" type="text/css">
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@bbdc1ca1b7ab2836d9ea26b6afb307e32fffdbe6/Page/Store/Store%20Page%20Savings%20Percentage/store%20page%20savings%20percentage.min.js" type="module"></script>
            
            <!-- end TWC Store Page Savings Percentage -->
            
          ```
          
        * Refer to [Add code to code injection][10] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Store Page.
      
      * Add code from file **[store page savings percentage options.html][8]**
        to Page Settings > Advanced > Page Header Code Injection for the Store
        Page. Read the code for any instructions within.
        
      * Add code from file **[store page savings percentage.html][11]** to
        Page Settings > Advanced > Page Header Code Injection for the Store Page.
        
      * Refer to [per-page code injection][9] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Store pages.
      
      * Add code from file **[store page savings percentage options.html][8]**
        to Website > Pages > Custom Code > Code Injection > FOOTER. Read the
        code for any instructions within.
        
      * Add code from file **[store page savings percentage.html][11]** to
        Website > Pages > Custom Code > Code Injection > FOOTER.
        
      * Refer to [Add code to code injection][10] for details.
      
* In the **store page price change script** code, installed earlier, add the
following to searchReplaceText, per that codes instructions.

```JavasSript
          'savings percentage' : 'twcSpsp',
          
```

## Demo

You can see a [demo of this effect here][12].

## Make a Donation

Please consider [making a donation][13].

## Changes

* **2026-07-13**

  * added support for from prices to show savings percent
  * moved options out of main code
  * updated to work with Store Page Savings Percentage v0.10.0
  * bumped version to 0.2.0
  
* **2025-07-04**

  * updated to work with v7.1 Products V2
  * bumped version to 0.1.1
  
* **2025-05-09**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Page/Store/Store%20Page%20Price%20Change#store-page-price-change
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[8]: store%20page%20savings%20percentage%20options.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: store%20page%20savings%20percentage.html#L1
[12]: https://toms-web-consulting-demos.squarespace.com/store-page-savings-percentage?password=twcdemos
[13]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
