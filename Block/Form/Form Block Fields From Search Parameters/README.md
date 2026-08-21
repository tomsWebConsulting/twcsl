# Form Block Fields From Search Parameters

### [License][1]

### Synopsis

Fill form fields from search query parameters of the Page URL.

### Version

  * 0.3.2

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [Form Block Form Element Add Watch][4]

---

## Install

* Install **[Form Block Form Element Add Watch][5]**. After you install the
  code be sure to continue on with the rest of the steps.
  
* Options

  * CDN Hosted
  
    Use this option for the quickest way to install this effect (files hosted
    externally on the [jsDelivr][6], a [CDN][7])
    
    * Options
    
      * Page Specific
      
        Use this option if you want to have this effect on only one Page.
        
        * Add the following code to Page Settings > Advanced >
          Page Header Code Injection for the Page.
          
          ```html
          <!-- begin TWC Form Block Fields From Search Parameters -->
          
            <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
            
            <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4e39832b89f6c72da4a540693395a2a7a83c5fc5/Block/Form/Form%20Block%20Fields%20From%20Search%20Parameters/form%20block%20fields%20from%20search%20parameters.min.js" type="module"></script>
            
            <!-- end TWC Form Block Fields From Search Parameters -->
            
          ```
          
        * Refer to [per-page code injection][8] for details.
        
      * Site-wide
      
        Use this option if you want to have this effect on all Pages.
        
        * v7.1
        
          * Add the following code to Website > Pages > Custom Code >
            Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Form Block Fields From Search Parameters -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4e39832b89f6c72da4a540693395a2a7a83c5fc5/Block/Form/Form%20Block%20Fields%20From%20Search%20Parameters/form%20block%20fields%20from%20search%20parameters.min.js" type="module"></script>
              
              <!-- end TWC Form Block Fields From Search Parameters -->
              
            ```
            
        * v7.0
        
          * Add the following code to Website > Pages > Website Tools >
            Custom Code > Code Injection > FOOTER.
            
            ```html
            <!-- begin TWC Form Block Fields From Search Parameters -->
            
              <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
              
              <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@4e39832b89f6c72da4a540693395a2a7a83c5fc5/Block/Form/Form%20Block%20Fields%20From%20Search%20Parameters/form%20block%20fields%20from%20search%20parameters.min.js" type="module"></script>
              
              <!-- end TWC Form Block Fields From Search Parameters -->
              
            ```
            
        * Refer to [Add code to code injection][9] for details.
        
  * On-site
  
    Use this option to install the full code of this effect (files hosted on
    your site).
    
    * Page Specific
    
      Use this option if you want to have this effect on only one Page.
      
      * Add code from file **[form block fields from search
        parameters.html][10]** to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
      * Refer to [per-page code injection][8] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * v7.1
      
        * Add code from file **[form block fields from search
          parameters.html][10]** to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
      * v7.0
      
        * Add code from file **[form block fields from search
          parameters.html][10]** to Website > Pages > Website Tools >
          Custom Code > Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][9].

## How to Use

* Add or edit a form block.

* Add **twcFbffsp** to **added** per the **Form Block Form Element Add Watch**
  code **How To Use** steps.

* For each form field that you want to map from a search query string parameter
  key and put the parameter value into the field, add a line of the following
  format to DESCRIPTION.
  
  ```text
  twc-fbffsp : text
  ```
  
  **text** is the search query string parameter key and would look like the
  following in a URL.
  
  ```text
  http://your-site.squarespace.com?text=your+text+here
  ```
  
  For a compound field like Address add a line of the following format.
  
  ```text
  twc-fbffsp : first=First Name, last=Last Name
  ```
  
  **first** and **last** are the search query string parameter keys and would
  look like the following in a URL.
  
  ```text
  http://your-site.squarespace.com?first=John&last=Doe
  ```

## Note

This effect does not work with checkbox, radio, or survey fields.

## Demo

You can see a [demo of this effect here][11].

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2026-08-20**

  * updated to work with, form block form element add watch
  * bumped version to 0.3.2 (commit 4e39832b89f6c72da4a540693395a2a7a83c5fc5)
 
* **2025-06-02**

  * fixed select fields not storing values, inputChangeTrigger
  * bumped version to 0.3.1
 
* **2025-03-03**

  * update to work with Form Block Wrapper Observe Changes v0.4.0
  * bumped version to 0.3.0
 
* **2024-04-28**

  * remove line field to trigger effect, adding the callback is the trigger
  * bumped version to 0.2.0
 
* **2024-04-27**

  * update to work with Form Block Wrapper Observe Changes v0.3.0
  * bumped version to 0.1.1
 
* **2022-07-28**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch
[5]: https://github.com/tomsWebConsulting/twcsl/tree/main/Block/Form/Form%20Block%20Form%20Element%20Add%20Watch#form-block-form-element-add-watch
[6]: https://www.jsdelivr.com/
[7]: https://en.wikipedia.org/wiki/Content_delivery_network
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[10]: form%20block%20fields%20from%20search%20parameters.html#L1
[11]: https://toms-web-consulting-demos.squarespace.com/form-block-fields-from-search-parameters?first=John&last=Doe&text=Text&textarea=Text+Area&password=twcdemos
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
