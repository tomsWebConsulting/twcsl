# Payment Processor Icons

### Version 0.2d1

#### SS Versions 7.1, 7.0

---

## Quick Install

* Add code from file
  **[payment processor icons css.html](payment%20processor%20icons%20css.html#L1)**
  to Settings > Advanced > Code Injection > HEADER.
  
* Add code from file
  **[payment processor icons svg symbol.html](payment%20processor%20icons%20svg%20symbol.html#L1)**
  to Settings > Advanced > Code Injection > FOOTER.
  
* Add code from file
  **[payment processor icons.html](payment%20processor%20icons.html#L1)**
  to a code block in the footer of your site.

## Configuration

Upon initial install you will see all the icons available over a gray
background. The gray background can be turned off later. Initially it is there
to help you see all the icons.

### Hiding Icons

You will need to decide which icons you do not want to be shown. Let's keep the
first Afterpay icon as that is the one AP prefers you use and hide the rest.

In the **payment processor icons css** code installed in the first step you will
find a section of the code with the label **display/order icons**. Find the
following lines.

```html
            --afterpay--badge--bondi-mint-on-black--display : unset;
            --afterpay--badge--white-on-black--display : unset;
            --afterpay--badge--black-on-white--display : unset;
            --afterpay--lockup--black--display : unset;
            --afterpay--lockup--white--display : unset;
```

Change **unset** to **none** so the lines look like the following.

```html
            --afterpay--badge--bondi-mint-on-black--display : none;
            --afterpay--badge--white-on-black--display : none;
            --afterpay--badge--black-on-white--display : none;
            --afterpay--lockup--black--display : none;
            --afterpay--lockup--white--display : none;
```

The value **none** means do not display the icon and **unset** means use the
default, which shows the icon.

Be very careful editing the lines. Computers don't like it when things are not
just so.

It is the same process for the remaining icons. Decide which ones you want to
hide or show and set the appropriate value. I have arranged the code in a kind
of outline to help you know which icons you are changing.

You can of course change your mind later on which icons you want to hide or
show.

### Order Icons

Once you have narrowed down the icons you may want to change their order of
appearance. By default I have put them in company alphabetical order.

In the section of code labeled **display/order icons** there are also lines to
control the order the shown icons are presented. You may have noticed the lines
ending with **--order : 0;**. For the icon you want to show first you set the
order value to 1, the second icon to 2 and so on. You only need to do this for
the icons you chose to be shown.

### Gray Background

Once you are happy with the icons you want to show and the order you can change
the **gray** background color to **unset**.

Look for the following line.

```css
      background-color : gray;
      
```

Change it to the following.

```css
      background-color : unset;
      
```

## Demo

You can see a
[demo of this effect here](https://toms-web-consulting-demos.squarespace.com/payment-processor-icons?password=twcdemos).

## Note

This code is designed to be a site-wide effect. For example you'd want the icons
to show up in the footer for a site. However with some minor tweaks the code
could be restricted to a single page. It is also possible to have different sets
of icons shown on different pages, with some tweaks. If you need custom
installation help,
[contact me for paid consulting](http://www.tomsWeb.consulting/contact).

## Make a Donation

Please consider [making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

* **2022-01-29**

  * added support for --justify-content CSS variable, default is center
  * added support for PayPal
  * added support for Clearpay
  * added Afterpay mint lockup
  * removed unneeded class attributes
  * removed redundant id attributes
  * bumped version to 0.2d1
  
* **2021-09-17**

  * reworked how the user configures icon hide and order
  * bumped version to 0.2d0
  
* **2021-09-17**

  * initial version
