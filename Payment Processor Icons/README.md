# Payment Processor Icons

### Version 0.1d0

#### SS Versions 7.1, 7.0

---

## Quick Install

Add code from file
**[payment processor icons css.html](payment%20processor%20icons%20css.html#L1)**
to Settings > Advanced > Code Injection > HEADER.

Add code from file
**[payment processor icons svg symbol.html](payment%20processor%20icons%20svg%20symbol.html#L1)**
to Settings > Advanced > Code Injection > FOOTER.

Add code from file
**[payment processor icons.html](payment%20processor%20icons.html#L1)**
to a code block in the footer of your site.

## Configuration

### Hiding Icons

Upon initial install you will see all the icons available over a gray
background. The gray background can be turned off later. It is there to help you
see all the icons.

You will need to decide what icons you want to use and then hide the ones you
do not want to use. Lets keep the first Afterpay icon as that is the one AP
prefers you use and hide the rest.

In the **payment processor icons css** code installed in the first step find the
following lines.

```html
          /* #twc-payment-processors .afterpay.badge.bondi-mint-on-black.twc-pp-icon, */
          
          /* #twc-payment-processors .afterpay.badge.white-on-black.twc-pp-icon, */
          
          /* #twc-payment-processors .afterpay.badge.black-on-white.twc-pp-icon, */
          
```

```html
          /* #twc-payment-processors .afterpay.lockup.black.twc-pp-icon, */
          
          /* #twc-payment-processors .afterpay.lockup.white.twc-pp-icon, */
          
```

For each of those lines remove the **/\*** ( forward slash asterisk ) and
**\*/** ( asterisk forward slash ). Removing those characters tells the code
to hide those icons.

Be very careful editing the lines. Computers don't like it when things are not
just so.

By the way in CSS lines or blocks of text beginning with **/\*** and ending with
**\*/** are known as comments. Bits of text in the code that do not do anything
and the computer ignores but help us humans have a chance to know what is going
on in the code.

So the code will now look like the following.

```css
          #twc-payment-processors .afterpay.badge.bondi-mint-on-black.twc-pp-icon,
          
          #twc-payment-processors .afterpay.badge.white-on-black.twc-pp-icon,
          
          #twc-payment-processors .afterpay.badge.black-on-white.twc-pp-icon,
          
```

```css
          #twc-payment-processors .afterpay.lockup.black.twc-pp-icon,
          
          #twc-payment-processors .afterpay.lockup.white.twc-pp-icon,
          
```

It the same process for the rest of the icons. Decide which ones you want to
keep and leave them alone. For the ones you want to hide remove those comment
characters.

You can also reverse the process. If for example later you decide to change the
icons you want to use. Just remember, to hide uncomment the appropriate lines
and to show comment lines.

### Order Icons

Once you've narrowed down the icons you may want to change their order of
appearance. By default I've put them in company alphabetical order.

There is a section in the code below the hide icons section labeled **order
icons**. You just need to find the icons whose order you want to control and
change their order number. You only need to do this for the icons you chose to
keep visible. So for the icon you want to show first you set the order number to
1, the second icon to 2 and so on.

### Gray Background

Once you are happy with the icons you want to use and the order you can
comment the gray background color to get rid of it.

Look for the following line.

```css
      background-color : gray;
      
```

Change it to the following.

```css
      /* background-color : gray; */
      
```

## Note

This code is designed to be a site-wide effect. For example you'd want the icons
to show up in the footer for a site. However with some minor tweaks the code
could be restricted to a single page. It is also possible to have different sets
of icons shown on different pages, with some tweaks. If you need custom
installation help, [contact me for paid consulting](http://www.tomsWeb.consulting/contact).

## Make a Donation

Please consider [making a donation](https://github.com/tomsWebConsulting/twcsl#make-a-donation).

## Changes

<!-- * **2021-07-01**
<br><br>
  * added code to change read more link
  * use twcsl
  * bumped version to 0.1d2
  <br><br -->
* **2021-09-17**
<br><br>
  * initial version
