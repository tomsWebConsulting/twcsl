# Summary Block Events Meta Add

### [License][1]

### Synopsis

Add more than two meta items to a Summary block Events page type.

### Version

  * 0.3.0

#### SS Version

  * 7.1

#### v7.1 Fluid Engine Compatibility

  * Yes

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].
  
  * [jQuery][4]

---

## Install

* Add the following to Website > Pages > Website Tools > Code Injection >
  HEADER.
  
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  ```
  
* Options

  * Page Specific
  
    * This option will be the one most will want to use if you have only a
      single page you want to have this effect.
      
    * Add the following code to Website > Pages > Website Tools >
      Code Injection > HEADER. Please see [Add code to code injection][5].
      
      ```html
      <script type="application/vnd.twc.sbema">
      
        {
        
          /*
          
            the format of each data structure is a summary block id and meta data
            settings
            
            following is an example data structure. copy the example data structure
            below and paste after the example data structure. remove the forward
            slash asterisk and asterisk forward slash lines from before and after the
            example data structure. repeat for as many as many summary blocks as you
            want to manipulate. this has been done once initially
            
            you can enter one block id or multiple by seperating the ids by a comma.
            if you leave the block id empty that data structure will be used for all
            summary block ids that are not specifically defined
            
            */
            
          /* "[ enter block id(s) selector(s) here between single quotes replacing square brackets ]" : {
          
            "metaData" : {
            
              /*
              
                values are category, event date, event date dow, event time,
                location or tags
                
                event date dow : shows the day of week name
                
                */
                
              "tertiary" : "[ add value here between single quotes replacing square brackets ]",
              
              "quaternary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "quinary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "senary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "septenary" : "[ optional, add value here between single quotes replacing square brackets ]"
              
              }
              
            }, */
            
          "[ enter block id(s) selector(s) here between single quotes replacing square brackets ]" : {
          
            "metaData" : {
            
              /*
              
                values are category, event date, event date dow, event time,
                location or tags
                
                event date dow : shows the day of week name
                
                */
                
              "tertiary" : "[ add value here between single quotes replacing square brackets ]",
              
              "quaternary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "quinary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "senary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "septenary" : "[ optional, add value here between single quotes replacing square brackets ]"
              
              }
              
            },
            
          }
          
        </script>
      ```
      
    * Add code from file **[summary block events meta add.html][6]** to Page
      Settings > Advanced > Page Header Code Injection for the page. Please see
      [Per-page code injection][5].
      
  * Site-wide
  
    * This option is the one you want to use if you have multiple pages where
      you want to have this effect.
      
    * Add the following code to Website > Pages > Website Tools >
      Code Injection > HEADER. Please see [Add code to code injection][7].
      
      ```html
      <script type="application/vnd.twc.sbema">
      
        {
        
          /*
          
            the format of each data structure is a summary block id and meta data
            settings
            
            following is an example data structure. copy the example data structure
            below and paste after the example data structure. remove the forward
            slash asterisk and asterisk forward slash lines from before and after the
            example data structure. repeat for as many as many summary blocks as you
            want to manipulate. this has been done once initially
            
            you can enter one block id or multiple by seperating the ids by a comma.
            if you leave the block id empty that data structure will be used for all
            summary block ids that are not specifically defined
            
            */
            
          /* "[ enter block id(s) selector(s) here between single quotes replacing square brackets ]" : {
          
            "metaData" : {
            
              /*
              
                values are category, event date, event date dow, event time,
                location or tags
                
                event date dow : shows the day of week name
                
                */
                
              "tertiary" : "[ add value here between single quotes replacing square brackets ]",
              
              "quaternary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "quinary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "senary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "septenary" : "[ optional, add value here between single quotes replacing square brackets ]"
              
              }
              
            }, */
            
          "[ enter block id(s) selector(s) here between single quotes replacing square brackets ]" : {
          
            "metaData" : {
            
              /*
              
                values are category, event date, event date dow, event time,
                location or tags
                
                event date dow : shows the day of week name
                
                */
                
              "tertiary" : "[ add value here between single quotes replacing square brackets ]",
              
              "quaternary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "quinary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "senary" : "[ optional, add value here between single quotes replacing square brackets ]",
              
              "septenary" : "[ optional, add value here between single quotes replacing square brackets ]"
              
              }
              
            },
            
          }
          
        </script>
      ```
      
    * Add code from file **[summary block events meta add.html][6]** to
      Website > Pages > Website Tools > Code Injection > FOOTER. Please see [Add
      code to code injection][7].
      
  * Read the code for any instructions within.

## Note

You can add the script tag to both the the site-wide code injection and per page
code injection. The code will combine your settings together. First the
site-wide settings will be used, then the per page.

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-01-15**

  * add ability to select which summary blocks to apply code
  * bumped version to 0.3.0
  
* **2024-11-11**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://jquery.com/
[5]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[6]: summary%20block%20events%20meta%20add.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
