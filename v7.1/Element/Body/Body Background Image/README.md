# Body Background Image

### [License][1]

### Synopsis

Add a background image for the body element.

### Version

  * 1.1.0

#### SS Version

  * 7.1

#### Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

* Add code from file **[body background image.css][2]** to Website > Pages >
  Website Tools > Custom CSS. Read the code for any instructions within.
  
* Add code from file **[body background image.html][3]** to Website > Pages >
  Website Tools > Code Injection > HEADER. Please see [Add code to code
  injection][4].
  
* Create custom CSS to allow the image to be seen. It is beyond the scope of
  these steps to cover CSS and where in your site to install it. However
  following is a starter example.

## Example

To make a particular page section transparent you might add something like the
following to Page Settings > Advanced > Page Header Code Injection for the page.

```html
<style>

  #page .page-section:first-child .section-border,
  #page .page-section:first-child:not( .has-background ) .section-background
  
    {
    
      background-color : transparent;
      
      }
      
  </style>
```

## Notes

This code is a base effect for other effects.

The code is for presenting a fixed body background image on iOS, which iOS
doesn't support.

## Make a Donation

Please consider [making a donation][5].

## Changes

* **2025-01-15**

  * remove jQuery dependency
  * remove CSS that creates the transparency effect, that is for the user to do
  * bumped version to 1.1.0
  
* **2022-04-06**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: body%20background%20image.css#L1
[3]: body%20background%20image.html#L1
[4]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#toc-add-code-to-code-injection
[5]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
