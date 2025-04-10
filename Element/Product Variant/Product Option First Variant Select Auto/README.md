# Product Option First Variant Select Auto

### [License][1]

### Synopsis

Auto select the first variant of product options.

### Version

  * 0.4.0

#### SS Versions

  * 7.1
  
  * 7.0 ([Brine template family][2])

#### Fluid Engine Compatible

  * Not Applicable

#### Dependencies

  * [Squarespace plan][3] that supports [JavaScript][4].
  
  * [Tom's Web Consulting Squarespace Library][5]

---

## Install

* Install [twcsl][6]. After you install twcsl be sure to continue on with the
  rest of the steps.
  
* Add code from file **[product option first variant select auto.html][7]** to
  Website > Pages > Website Tools > Code Injection > FOOTER. Refer to [Add code
  to code injection][8] for details.
  
* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add the following code to Store Settings > Advanced > Page Header Code
      Injection for the store page. Refer to [Per-page code injection][9] for
      details.
      
      ```html
      <script type="application/vnd.twc.pofvsa">
      
        /*
        
          product option first variant select auto
          
          License         : < https://tinyurl.com/s872fb68 >
          
          Version         : 0.4.0
          
          SS Versions     : 7.1, 7.0
          
          v7.1
          Fluid
          Engine
          Compatible      : Yes
          
          v7.0 Templates  : Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                            Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                            Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                            Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                            Pedro, Pursuit, Rally, Rover, Royce, Sofia, Sonora,
                            Stella, Thorne, Vow, Wav, West )
                            
                            your template is not listed? then it is not currently
                            supported
          
          Copyright       : 2023-2024 Thomas Creedon
                            
                            Tom's Web Consulting < http://www.tomsWeb.consulting/ >
          
          */
          
        {
        
          "productOptions" : [
          
            /*
            
              the format of each line is a product variant option as entered in the
              product editor. following is an example line. copy the example line
              below and paste after the example line. remove '// ' at the beginning of
              the pasted line. this has been done once initially
              
              */
            
            // "[ enter option here between double quotes replacing square brackets ]",
            
            "[ enter option here between double quotes replacing square brackets ]",
            
            ]
            
          }
          
        </script>
      ```
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add the following code to Website > Pages > Website Tools >
      Code Injection > FOOTER. Refer to [Add code to code injection][8] for
      details.
      
      ```html
      <script type="application/vnd.twc.pofvsa">
      
        /*
        
          product option first variant select auto
          
          License         : < https://tinyurl.com/s872fb68 >
          
          Version         : 0.4.0
          
          SS Versions     : 7.1, 7.0
          
          v7.1
          Fluid
          Engine
          Compatible      : Yes
          
          v7.0 Templates  : Brine ( Aria, Blend, Burke, Cacao, Clay, Fairfield, Feed,
                            Foster, Greenwich, Hatch, Heights, Hunter, Hyde, Impact,
                            Jaunt, Juke, Keene, Kin, Lincoln, Maple, Margot, Marta,
                            Mentor, Mercer, Miller, Mojave, Moksha, Motto, Nueva,
                            Pedro, Pursuit, Rally, Rover, Royce, Sofia, Sonora,
                            Stella, Thorne, Vow, Wav, West )
                            
                            your template is not listed? then it is not currently
                            supported
          
          Copyright       : 2023-2024 Thomas Creedon
                            
                            Tom's Web Consulting < http://www.tomsWeb.consulting/ >
          
          */
          
        {
        
          "productOptions" : [
          
            /*
            
              the format of each line is a product variant option as entered in the
              product editor. following is an example line. copy the example line
              below and paste after the example line. remove '// ' at the beginning of
              the pasted line. this has been done once initially
              
              */
            
            // "[ enter option here between double quotes replacing square brackets ]",
            
            "[ enter option here between double quotes replacing square brackets ]",
            
            ]
            
          }
          
        </script>
      ```
      
* Read the code for any instructions within.

## Note

This code currently does not support quick views.

## Make a Donation

Please consider [making a donation][10].

## Changes

* **2024-12-07**

  * move the user settings outside of the main code
  * fix for first items not being selected
  * bumped version to 0.4.0
  
* **2023-11-05**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[3]: https://www.squarespace.com/pricing
[4]: https://en.wikipedia.org/wiki/JavaScript
[5]: https://github.com/tomsWebConsulting/twcsl
[6]: https://github.com/tomsWebConsulting/twcsl#install-options
[7]: product%20option%20first%20variant%20select%20auto.html#L1
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[10]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
