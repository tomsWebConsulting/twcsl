# Store Product Detail Add to Cart Button Change to Url Redirect

### Version 0.3.0

#### SS Versions 7.1, 7.0 ([Brine template family][1], [Pacific template family][2])

---

## Install

* Install [twcsl][3].
  
* Add code from file **[store product detail add to cart button change to url
  redirect.html][4]** to Store Settings > Advanced > Page Header Code Injection
  for the store page. Read the code for any instructions within.

## Note

With a few changes of the settings in the code it can be made to make all add to
cart buttons redirect to a single URL.

* Remove the following line from the **skuUrlMap** constant.
  
  ```
      '[enter sku here between single quotes]' : '[enter url here between single quotes]',
      
  ```
  
* Enter a URL for the **defaultUrl** constant.
  
* Set the **bailIfNoSkusInMap** constant to **false**.

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2022-07-11**

  * add v7.0 Ajax support
  * bumped version to 0.3.0
  
* **2022-03-10**

  * fix for $this undefined
  * bumped version to 0.2d1
  
* **2022-02-28**

  * checked for v7.0 Brine template family compatibility
  * updated to work with v7.1 product detail layouts
  * bumped version to 0.2d0
  
* **2021-12-17**

  * added bailIfNoSkusInMap flag to control if that check is done or not
  * restrict button selector to product detail area
  * bumped version to 0.1d6
  
* **2021-12-10**

  * freshen read me and other minor tweaks, no functional changes
  * tested v7.0 Pacific template family compatibility
  * bumped version to 0.1d5
  
* **2021-06-04**

  * initial version

[1]: https://support.squarespace.com/hc/en-us/articles/212512738-Brine-template-family
[2]: https://support.squarespace.com/hc/en-us/articles/206545347
[3]: https://github.com/tomsWebConsulting/twcsl#install-options
[4]: store%20product%20detail%20add%20to%20cart%20button%20change%20to%20url%20redirect.html#L1
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
