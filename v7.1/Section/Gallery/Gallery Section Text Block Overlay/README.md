# Gallery Section Text Block Overlay

### [License][1]

### Synopsis

Add styled text overlays to gallery section images.

### Version

  * 0.3.0

#### Squarespace Version

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
    
      Use this option when you want to have this effect on only one Page.
      
      * Add code from file **[gallery section text block overlay
        options.html][6]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Gallery Section Text Block Overlay -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@012e513c67e092e7878f1a74a0813624c2d0cec4/v7.1/Section/Gallery/Gallery%20Section%20Text%20Block%20Overlay/gallery%20section%20text%20block%20overlay.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@012e513c67e092e7878f1a74a0813624c2d0cec4/v7.1/Section/Gallery/Gallery%20Section%20Text%20Block%20Overlay/gallery%20section%20text%20block%20overlay.min.js" type="module"></script>
          
          <!-- end TWC Gallery Section Text Block Overlay -->
          
        ```
        
      * Refer to [Inject code to a specific page][7] for details.
      
    * Site-wide
    
      Use this option when you want to have this effect on all Pages.
      
      * Add code from file **[gallery section text block overlay
        options.html][6]** to Website > Pages > Custom Code > Code Injection >
        FOOTER. Read the code for instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Gallery Section Text Block Overlay -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <link href="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@012e513c67e092e7878f1a74a0813624c2d0cec4/v7.1/Section/Gallery/Gallery%20Section%20Text%20Block%20Overlay/gallery%20section%20text%20block%20overlay.min.css" rel="stylesheet" type="text/css">
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@012e513c67e092e7878f1a74a0813624c2d0cec4/v7.1/Section/Gallery/Gallery%20Section%20Text%20Block%20Overlay/gallery%20section%20text%20block%20overlay.min.js" type="module"></script>
          
          <!-- end TWC Gallery Section Text Block Overlay -->
          
        ```
        
        Refer to [Add code to the header and footer][17] for details.
        
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option when you want to have this effect on only one Page.
    
      * Add code from file **[gallery section text block overlay
        options.html][6]** to Page Settings > Advanced >
        Page Header Code Injection for the Page. Read the code for instructions
        within.
        
    * Add code from file **[gallery section text block overlay.html][8]** to
      Page Settings > Advanced > Page Header Code Injection for the Page.
      
      Refer to [Inject code to a specific page][7] for details.
      
  * Site-wide
  
    Use this option when you want to have this effect on all Pages.
    
    * Add code from file **[gallery section text block overlay
      options.html][6]** to Website > Pages > Custom Code > Code Injection >
      FOOTER. Read the code for instructions within.
      
    * Add code from file **[gallery section text block overlay.html][8]** to
      Website > Pages > Website Tools > Custom Code > Code Injection > FOOTER.
      
      Refer to [Add code to the header and footer][9] for details.

## How to Use

* Add a Gallery Section to the Page.

  * Turn Captions on.
  
  * In the first image Description add the following line.
    
    ```text
    twc-gstbo
    ```
    
* Optional

  This code supports using Text Blocks for Descriptions.
  
  * Add a section to the Page after the Gallery Section.
  
  * There is no need to spend time changing the design layout of this section as
    this code will hide this section.
    
  * Add Text Blocks that you want to use as the Gallery Section image text
    overlays. For [Classic Editor][10] only use Line Blocks to keep Text Blocks
    from collapsing together.
    
  * For each image you want to have a Text Block overlay set its Description to
    a Text Block ID. If you want an overlay for the first image add a line to
    the Description that is the Text Block ID.
    
    ![first image description][11]
    
    To find Text Block IDs you can use a tool like Heather Tovey's most
    excellent looking [Squarespace ID Finder][12].

## Demo

You can see a [demo of this effect here][13].

## Make a Donation

Please consider [making a donation][14].

## Changes

* **2026-08-29**

  * reworked code to not remove native captions
  * restructured the code
  * removed jQuery dependency
  * bumped version to 0.3.0
  
* **2023-08-28**

  * fix for opacity issue
  * bumped version to 0.2.1
  
* **2023-08-27**

  * add support for all Gallery Types
  * bumped version to 0.2.0
  
* **2023-08-27**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: gallery%20section%20text%20block%20overlay%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRV1T972AWVEYDK081M9
[17]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[8]: gallery%20section%20text%20block%20overlay.html#L1
[9]: https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection#h_01M2NCWRTZYTHPBF2AK5BDSRVP
[10]: https://support.squarespace.com/hc/en-us/articles/6421525446541#toc-classic-editor
[11]: read%20me%20assets/first%20image%20description.png
[12]: https://www.heathertovey.com/squarespace-id-finder/
[13]: https://toms-web-consulting-demos.squarespace.com/gallery-section-text-block-overlay?password=twcdemos
[14]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
