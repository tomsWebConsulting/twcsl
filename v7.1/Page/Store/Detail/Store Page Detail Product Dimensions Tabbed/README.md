# Store Page Detail Product Dimensions Tabbed

### [License][1]

### Synopsis

Modify product dimensions added to product description and additional info of
detail pages to use tabs.

### Version

  * 0.1.1

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes
  
#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Store Page Detail Product Dimensions][2]

---

## Install

* Install [Store Page Detail Product Dimensions][3]. After you install Store
  Page Detail Product Dimensions be sure to continue on with the rest of the
  steps.
  
* In the Store Page Detail Product Dimensions code set format to the following.
  You can of course change the format tags as desired.
  
  ```javascript
        format : `
        
          <div class="twc-spdpdt-tabs">
          
            <div class="twc-spdpdt-tab-labels">
            
              <div class="twc-spdpdt-tab-label active" data-dimension-tab="twc-spdpdt-imperial">
              
                Imperial
                
                </div>
                
              <div class="twc-spdpdt-tab-label" data-dimension-tab="twc-spdpdt-metric">
              
                Metric
                
                </div>
                
              </div>
              
            <div class="twc-spdpdt-tab-content twc-spdpdt-imperial active">
            
              %w0In"W %l1In"D %h2In"H - %p2Lb lb
              
              </div>
              
            <div class="twc-spdpdt-tab-content twc-spdpdt-metric">
            
              %w2Mm x %l2Mm x %h2Mm mm - %k2Kg kg
              
              </div>
              
            </div>
            
          `
          
  ```
  
* Add code from file **[store page detail product dimensions tabbed.html][4]**
  to Store Settings > Advanced > Page Header Code Injection for the Store Page
  below the Store Page Detail Product Dimensions code. Refer to [Per-page code
  injection][5] for details.

## Tabs Style Variations

Install these variations after the Store Page detail product dimensions tabbed
code.

  * Tabs on Bottom
  
    ```html
    <style>
    
      /* tabs on bottom */
      
      .twc-spdpdt-tabs {
      
        flex-direction : column-reverse;
        
        }
      
      .twc-spdpdt-tab-label.active {
      
        border-bottom : 1px solid #ccc;
        border-top : 1px solid #fff;
        
        }
        
      </style>
      
    ```
    
    [Example][6]

  * Tabs on Bottom Minimal
  
    ```html
    <style>
    
      /* tabs on bottom minimal */
      
      .twc-spdpdt-tabs {
      
        flex-direction : column-reverse;
        
        }
      
      .twc-spdpdt-tab-label.active {
      
        border-bottom : 1px solid #ccc;
        border-top : 1px solid #fff;
        
        }
        
      .twc-spdpdt-tab-content {
      
        border : unset;
        margin-bottom : 1em;
        padding : unset;
        
        }
      
      .twc-spdpdt-tab-label {
      
        border : unset;
        padding : 0px 1em;
        
        }
      
      .twc-spdpdt-tab-label.active {
      
        border : unset;
        
        }
        
      </style>
      
    ```
    
    [Example][7]

## Demo

You can see a [demo of this effect here][8].

## Make a Donation

Please consider [making a donation][9].

## Changes

* **2025-08-03**

  * updated to work with Products V2
  * remove dependency on jQuery
  * bumped version to 0.1.1
  
* **2025-02-01**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions
[3]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Page/Store/Detail/Store%20Page%20Detail%20Product%20Dimensions#store-page-detail-product-dimensions
[4]: store%20page%20detail%20product%20dimensions%20tabbed.html#L1
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[6]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions-tabbed/p/golden-mist-cup?password=twcdemos
[7]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions-tabbed/p/harvest-moon-cup?password=twcdemos
[8]: https://toms-web-consulting-demos.squarespace.com/store-page-detail-product-dimensions-tabbed/p/milk-dip-cup?password=twcdemos
[9]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
