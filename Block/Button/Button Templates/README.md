# Button Templates

### [License][1]

### Synopsis

Create Button templates and use them in other locations.

### Version

  * 0.3.0

#### SS Versions

  * 7.1
  
  * 7.0

#### Dependencies

  * [Squarespace plan][2] that supports [JavaScript][3].

---

## Install Options

* CDN Hosted

  Use this option for the quickest way to install this effect (files hosted
  externally on the [jsDelivr][4], a [CDN][5])
  
  * Add the following code to Website > Pages > Custom Code > Code Injection >
    FOOTER.
    
    ```html
    <!-- begin TWC Button Templates -->
    
      <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
      
      <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@d37f7e27969054249882ceef625f1ab102014685/v7.0/Block/Button/Button%20Templates/button%20templates.min.js" type="module"></script>
      
      <!-- end TWC Button Templates -->
      
    ```
    
    Refer to [Add code to code injection][6] for details.
    
* On-site

  Use this option to install the full code of this effect (files hosted on
  your site).
  
  * Add code from file **[button templates.html][7]** to Website > Pages >
    Custom Code > Code Injection > FOOTER.
    
  * Refer to [Add code to code injection][6] for details.

## How To Use

* Add a **Blank Page** in **NOT LINKED**. Type `TWC Button Templates` and
  return.

* Hover over the new **TWC Button Templates** **Page**. Click on the
  **Settings** icon.
  
* Set **URL SLUG** to `twc-bt`.

* Click on **Advanced** and add the following to **PAGE HEADER CODE INJECTION**.

  ```html
  <meta name="robots" content="noindex">
  ```
  
* Click **SAVE**.

* Edit the **Page**.

* Add a **Button Block**, set it up as desired, and add the following text to
the **Text** field.

  ```text
   - twc-bt [ enter id here replacing square brackets ]
  ```
  
The added text will be removed when the button template is used elsewhere in the
site. Note the id you enter as it will be used shortly. For clarity the format
of that added text is the following.

space character

dash

space character

twc-bt

space character

id

You can create as many button templates as you want on the **TWC Button
Templates** **Page**.

Wherever you want to use a button template add a **Code Block** and set
**Content** to the following.

```html
<x-twc-bt data-id="[ enter id here replacing square brackets ]"></x-twc-bt>
```

## Make a Donation

Please consider [making a donation][8].

## Changes

* **2026-04-17**

  * added support for v7.1
  * added feature to alter user when editing if an id can't be found
  * bumped version to 0.3.0
  
* **2026-04-08**

  * updated code to use DOM nodes per insertion to comply with browser
    best‑practices
  * reworked code to be a bit more generous about white space, where possible in
    user entered text
  * bumped version to 0.2.0
  
* **2026-04-03**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[7]: button%20templates.html#L1
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
