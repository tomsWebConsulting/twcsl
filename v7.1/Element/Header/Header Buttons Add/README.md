# Header Buttons Add

### [License][1]

### Synopsis

Add buttons to the site header.

### Version

  * 0.10.0

#### SS Version

  * 7.1

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Add code from file **[header buttons add options.less][6]** to Website >
    Pages > Custom Code > Code Injection > FOOTER. Read the code for any
    instructions within.
    
  * Add code from file **[header buttons add.less][7]** to Website > Pages >
    Custom Code > Custom CSS.
    
  * Refer to [Using the CSS Editor][8] for details.
    
  * Add code from file **[header buttons add options.html][9]** to Website >
    Pages > Custom Code > Code Injection > FOOTER. Read the code for any
    instructions within.
    
  * Add the following code to Website > Pages > Custom Code > Code Injection >
    FOOTER.
    
    ```html
    <!-- begin TWC Header Buttons Add -->
    
      <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
      
      <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@3da1ecd6a66a90be1b80443aab847044500a218c/v7.1/Element/Header/Header%20Buttons%20Add/header%20buttons%20add.min.js" type="module"></script>
      
      <!-- end TWC Header Buttons Add -->
      
    ```
    
  * Refer to [Add code to code injection][10] for details.

* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Add code from file **[header buttons add options.less][6]** to Website >
    Pages > Custom Code > Code Injection > FOOTER. Read the code for any
    instructions within.
    
  * Add code from file **[header buttons add.less][7]** to Website > Pages >
    Custom Code > Custom CSS.
    
  * Refer to [Using the CSS Editor][8] for details.
    
  * Add code from file **[header buttons add options.html][9]** to Website >
    Pages > Custom Code > Code Injection > FOOTER. Read the code for any
    instructions within.
    
  * Add code from file **[header buttons add.html][11]** to Website > Pages >
    Custom Code > Code Injection > FOOTER.
    
  * Refer to [Add code to code injection][10] for details.

## Make a Donation

Please consider [making a donation][12].

## Changes

* **2026-03-26**

  * added CSS to adjust secondary and tertiary font size to match primary
  * bumped version to 0.10.0
  
* **2025-04-19**

  * remove dependency on jQuery
  * bumped version to 0.9.0
  
* **2023-08-02**

  * add support for secondary and tertiary button classes
  * bumped version to 0.8.0
  
* **2022-03-01**

  * fix for button text not centered when in column on desktop
  * bumped version to 0.7d1
  
* **2022-01-11**

  * added code for adding target attribute to buttons
  * bumped version to 0.7d0
  
* **2021-07-22**

  * fix issue with orientation on mobile, force column at 575px and below
  * use a less heavy hand manipulating margins, keeping closer to SS settings
  * bumped version to 0.6d1
  
* **2021-05-23**

  * better support for mobile
  * fix an issue with desktop buttons continuing to display when in mobile
  * allow user to more easily change the direction and order of the buttons.
    using LESS mixins the choices are row or column direction and normal or
    reverse order
  * bumped version to 0.6d0

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: header%20buttons%20add%20options.less#L1
[7]: header%20buttons%20add.less#L1
[8]: https://support.squarespace.com/hc/en-us/articles/206545567-Using-the-CSS-Editor
[9]: header%20buttons%20add%20options.html#L1
[10]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[11]: header%20buttons%20add.html#L1
[12]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
