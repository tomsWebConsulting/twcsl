# Store Page Detail Meta Reorder

### [License][1]

### Synopsis

Reorder store page product detail elements.

### Version

  * 0.5.0

#### SS Version

  * 7.1

#### Products V2 Compatible

  * Yes
  
#### Fluid Engine Compatible

  * Not Applicable

---

## Install

* Add code from file **[store page detail meta reorder options.html][2]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.
  Refer to [Per-page code injection][3] for details. Read the code for any
  instructions within.
  
* Add code from file **[store page detail meta reorder.html][4]** to
  Store Settings > Advanced > Page Header Code Injection for the store page.

## Example Reorderings

  * Add to Cart after Price for Desktop
  
    ```css
        --twc-spdmr-desktop-add-ons : unset;
        --twc-spdmr-desktop-add-to-cart : -1;
        --twc-spdmr-desktop-description : unset;
        --twc-spdmr-desktop-price : -1;
        --twc-spdmr-desktop-title : -1;
        --twc-spdmr-desktop-variants : unset;
    ```
    
  * Price, Variants, Add to Cart, and Description for Desktop
  
    ```css
        --twc-spdmr-desktop-add-ons : unset;
        --twc-spdmr-desktop-add-to-cart : -2;
        --twc-spdmr-desktop-description : -1;
        --twc-spdmr-desktop-price : -2;
        --twc-spdmr-desktop-title : unset;
        --twc-spdmr-desktop-variants : -2;
    ```
    
  * Price after Description for Desktop
  
    ```css
        --twc-spdmr-desktop-add-ons : unset;
        --twc-spdmr-desktop-add-to-cart : unset;
        --twc-spdmr-desktop-description : -2;
        --twc-spdmr-desktop-price : unset;
        --twc-spdmr-desktop-title : -2;
        --twc-spdmr-desktop-variants : unset;
    ```

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2025-08-12**

  * moved options out of main code
  * updated to work with Products V2
  * bumped version to 0.5.0
  
* **2023-11-02**

  * add support for add ons
  * bumped version to 0.4.0
  
* **2023-10-23**

  * add support for title element of store layouts half, full, wrap
  * bumped version to 0.3.0
  
* **2022-02-11**

  * add support for store detail page layouts
  * bumped version to 0.2.0
  
* **2021-10-07**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: store%20page%20detail%20meta%20reorder%20options.html#L1
[3]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[4]: store%20page%20detail%20meta%20reorder.html#L1
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
