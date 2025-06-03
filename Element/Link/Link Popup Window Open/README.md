# Link Popup Window Open

### [License][1]

### Synopsis

Open link in a popup window.

### Version

  * 0.2.0

#### SS Versions

  * 7.1
  
  * 7.0

#### 7.1 Fluid Engine Compatible

  * Yes

---

## Quick Install

* Options

  * Page Specific
  
    * Use this option if you have only a single page you want to have this
      effect.
      
    * Add code from file **[link popup window open.html][2]** to
      Page Settings > Advanced > Page Header Code Injection for the store page.
      Refer to [Per-page code injection][3] for details.
      
  * Site-wide
  
    * Use this option if you have multiple pages where you want to have this
      effect.
      
    * Add code from file **[link popup window open.html][2]** to Website >
      Pages > Custom Code > Code Injection > FOOTER. Refer to [Add code to
      code injection][4] for details.

* Edit a link and add the following to the end of your URL.

  ```url
  #twc-lpwo={ "windowFeatures" : "left=500, top=200, height=480, width=640", "url" : "[ optional, enter encoded URL here between double quotes replacing square brackets ]" }
  ```
  
  You can optionally use the following features.
  
    * [windowFeatures][5] : options to control the appearance of the popup
      window.
    
    * url : the popup window will open this URL and your browser window/tab will
      open the URL minus the text you previously added. Be sure to [encode][6]
      the URL. An example.
      
      ```url
      /abc#twc-lpwo={ "windowFeatures" : "left=500, top=200, height=480, width=640", "url" : "https%3A%2F%2Fwww.example.com%2F%3Fparam%3Dvalue%26param2%3Dvalue2%23twc-x" }
      ```
      
      The popup window will open the URL
      &lt; https://www.example.com/?param=value&param2=value2#twc-x &gt; and the
      browser window/tab will open the URL < /abc >.

## Note

Please note that this code can not force popup windows to open. The user and the
browser have significant control over how popup windows behave. A notable
example would be an ad blocker. You should design your site accordingly.

## Demo

You can see a [demo of this effect here][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2025-06-03**

  * added url for popup window can be different than the url clicked
  * bumped version to 0.2.0
  
* **2025-05-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: link%20popup%20window%20open.html#L1
[3]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-per-page-code-injection
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#windowfeatures
[6]: https://www.urlencoder.org/
[7]: https://toms-web-consulting-demos.squarespace.com/link-popup-window-open?password=twcdemos
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
