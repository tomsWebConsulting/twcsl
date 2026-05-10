# Section Date Hide

### [License][1]

### Synopsis

Hide page sections using dates.

### Version

  * 0.4.0

#### SS Version

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
    
      Use this option if you want to have this effect on only one Page.
      
      * Optional. Add code from file **[section date hide options.html][6]** to
        Page Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add the following code to Page Settings > Advanced >
        Page Header Code Injection for the Page.
        
        ```html
        <!-- begin TWC Section Date Hide -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@96e8dc387753ee13adc372ebc34d2adeed55f29f/v7.1/Section/Section%20Date%20Hide/section%20date%20hide.min.js" type="module"></script>
          
          <!-- end TWC Section Date Hide -->
          
        ```
        
      * Refer to [per-page code injection][7] for details.
      
    * Site-wide
    
      Use this option if you want to have this effect on all Pages.
      
      * Optional. Add code from file **[section date hide options.html][6]** to
        Website > Pages > Custom Code > Code Injection > FOOTER. Read the
        code for any instructions within.
        
      * Add the following code to Website > Pages > Custom Code >
        Code Injection > FOOTER.
        
        ```html
        <!-- begin TWC Section Date Hide -->
        
          <!-- License < https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1 > -->
          
          <script src="https://cdn.jsdelivr.net/gh/tomsWebConsulting/twcsl@96e8dc387753ee13adc372ebc34d2adeed55f29f/v7.1/Section/Section%20Date%20Hide/section%20date%20hide.min.js" type="module"></script>
          
          <!-- end TWC Section Date Hide -->
          
        ```
            
        * Refer to [Add code to code injection][8] for details.
        
* On-site

  Use this option to install the full code of this effect (files hosted on your
  site).
  
  * Page Specific
  
    Use this option if you want to have this effect on only one Page.
    
    * Add code from file **[section date hide options.html][6]** to Page
      Settings > Advanced > Page Header Code Injection for the Page. Read
      the code for any instructions within.
      
    * Add code from file **[section date hide.html][9]** to Page Settings >
      Advanced > Page Header Code Injection for the Page.
      
    * Refer to [per-page code injection][7] for details.
    
  * Site-wide
  
    Use this option if you want to have this effect on all Pages.
    
      * Add code from file **[section date hide options.html][6]** to Page
        Settings > Advanced > Page Header Code Injection for the Page. Read
        the code for any instructions within.
        
      * Add code from file **[section date hide.html][9]** to Website >
        Pages > Custom Code > Code Injection > FOOTER.
          
      * Refer to [Add code to code injection][8] for details.
      
## Examples

This effect hides Squarespace sections based on simple date and time rules.  
Sections are **visible by default** — your rules only determine **when they
should be hidden**.

The syntax is intentionally lightweight. It’s not a date engine. It won’t do
leap‑year math or rollover calculations. But it *will* cover the many common
scheduling needs with a compact, flexible format.

You can also apply **multiple rules to the same section**, which allows more
complex behavior within the syntax’s limits.

These examples show the basic shape of the syntax. You can copy/paste them
immediately for use in Code Blocks.

### **Fully specified date range**
```html
<x-twc-sdh data-date-start="1970-01-01 00:00:00" data-date-stop="1970-01-01 01:00:00" />
```

### **Today only**
```html
<x-twc-sdh data-date-start="YYYY-MM-DD 00:00:00" data-date-stop="YYYY-MM-DD 01:00:00" />
```

### **Stop date optional**
```html
<x-twc-sdh data-date-start="1970-01-01 00:00:00" />
```

### **Time optional**
```html
<x-twc-sdh data-date-start="1970-01-01" />
```

### **Stop date +1 year**
```html
<x-twc-sdh data-date-start="1970-01-01 00:00:00" data-date-stop="+1-MM-DD 00:00:00" />
```

### **Stop date +1 month**
```html
<x-twc-sdh data-date-start="1970-01-01 00:00:00" data-date-stop="YYYY-+1-DD 00:00:00" />
```

### **Stop date +1 day**
```html
<x-twc-sdh data-date-start="1970-01-01 00:00:00" data-date-stop="YYYY-MM-+1 00:00:00" />
```

### **Day‑of‑week trigger (Sunday)**
```html
<x-twc-sdh data-date-start="YYYY-MM-1 00:00:00" data-date-stop="YYYY-MM-DD 01:00:00" />
```

## Syntax Overview

The general format is:

```
YYYY-MM-DD hh:mm:ss
```

Time is optional. Stop date is optional. Everything else follows from a few
simple rules.

### 1. Date Components

Each date has three parts:

```
year-month-day
```

Each part can be:

#### **Literal values**

```
1970-01-01
```

#### **Placeholders**

- `YYYY` → current year
- `MM` → current month
- `DD` → current day

#### **Relative offsets (Stop Date only)**

- `+1` → add to Start Date’s value
- `+7` → add 7 days
- `+2` → add 2 months
- etc.

Offsets always reference the **resolved Start Date**, not placeholders.

#### Important

Offsets do **not** roll over. If the result is an invalid date, the rule is
ignored.

### 2. Time Component

Time is optional.

- If included:

  `hh:mm:ss` (all 2‑digit fields)

- If omitted:

  defaults to `00:00:00`

Examples:

```
1970-01-01 12:00:00
1970-01-01
```

### 3. Stop Date

Stop Date is optional.

If omitted, the section hides starting at the Start Date and stays hidden.

---

### 4. Relative Offsets (+N)

Offsets only apply to Stop Date.

Examples:

```
+1-MM-DD → Start year + 1
YYYY-+1-DD → Start month + 1
YYYY-MM-+1 → Start day + 1
```

Offsets always reference the **Start Date**, not placeholders.

---

### 5. Day‑of‑Week Mode

If the **day** field is a **single digit (1–7)**, the Start Date switches into
weekday mode:

| Number | Day |
|--------|------|
| 1 | Sunday |
| 2 | Monday |
| 3 | Tuesday |
| 4 | Wednesday |
| 5 | Thursday |
| 6 | Friday |
| 7 | Saturday |

#### Rules:

* Year is ignored
* Month is ignored
* Time still applies
* Only Start Date supports weekday mode
* Stop Date does **not** support weekday mode

Example:

```
YYYY-MM-1 00:00:00 → triggers on Sunday at midnight
```

## Where You Can Use This Syntax

The date syntax shown above works in **two different places**:

### 1. HTML Tag Mode (most common)

You can place rules directly in your page using the custom tag:

```html
<x-twc-sdh data-date-start="YYYY-MM-DD" data-date-stop="YYYY-MM-+1" />
```

This is the simplest way to hide a section based on date and/or time.

### 2. Section Date Hide Options (advanced)

You can use the **section date hide options** file mentioned previously.

Each entry is:

```
[ 'section-id', 'start-date', 'optional stop-date' ]
```

### Both modes use the **exact same datetime syntax**

Everything described in the Syntax Overview applies equally to:

* `data-date-start="…"`
* `data-date-stop="…"`
* the values inside `sectionidDateMap`

There is **no difference** in how dates are interpreted.

### When to use which

* **HTML tag mode**

  * Best for hiding a single section
  
  * Easy to read
  
  * Easy to copy/paste
  
  * No JavaScript editing required
  
* **Custom code mode**

  * Best when hiding many sections
  
  * Keeps all rules in one place
  
  * Works even if you can’t edit the section’s HTML
  
  * Allows more complex combinations of rules
  
You can mix both approaches on the same site.

## Notes & Limitations

This system is intentionally simple. It is **not** a date engine.

* No rollover math

  * `+1` month from January 31 does not become February 29
  
* Invalid dates are ignored

* Day‑of‑week mode ignores year and month

* Placeholders always mean “current date parts”

* The system only **hides** sections — Squarespace shows everything by default

* Time defaults to midnight if omitted

* **You can apply multiple rules to the same section**

  * This allows more complex behavior within the system’s limits
  
  * Example: hide on Fridays *and* hide after a certain date

## Common Mistakes

### **1. Using a single digit when they meant a date**

```
YYYY-MM-3   → Tuesday
YYYY-MM-03  → the 3rd day of the month
```

### **2. Expecting rollover**

```
YYYY-+1-DD  → Start month + 1, no rollover
```

### **3. Thinking placeholders reference Start Date**

They always reference **today**, not Start Date.

### **4. Forgetting time defaults to midnight**

```
1970-01-01  → 1970-01-01 00:00:00
```

## Notes

This code runs when the Page loads. It will not hide a section if the visitor
loads the Page and the Page sits there as the various dates come and go.

The time zone calculations may not be perfect. The state of the art of
JavaScript date time zone calculations are a bit of a mess at present.

You can find a data-section-id by using Heather Tovey's [Squarespace ID
Finder][10].

To use SIF go to your Page and use SIF. You will see something like the
following. You only need the data-section-id value which is the number within
the quotes to use in the code.

![squarespace id finder example](read%20me%20assets/data%20section%20id.png)

## Make a Donation

Please consider [making a donation][11].

## Changes

* **2026-05-03**

  * added more complex syntax for handling dates
  * bumped version to 0.4.0
  
* **2024-09-29**

  * workaround for SS page picker hiding issue
  * bumped version to 0.3.1
  
* **2024-09-25**

  * remove jQuery dependency
  * check local date against the site regional time zone setting date
  * make work when in the editor but not editing a page
  * bumped version to 0.3.0
  
* **2024-04-11**

  * support date ranges
  * make work with more than one section
  * bumped version to 0.2.0
  
* **2021-11-18**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: https://www.squarespace.com/pricing
[3]: https://en.wikipedia.org/wiki/JavaScript
[4]: https://www.jsdelivr.com/
[5]: https://en.wikipedia.org/wiki/Content_delivery_network
[6]: section%20date%20hide%20options.html#L1
[7]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K6435FJV3FQSBAE7X
[8]: https://support.squarespace.com/hc/en-us/articles/205815908-Using-code-injection#h_01JGPDM34K9B0J2SNGJE936M7K
[9]: section%20date%20hide.html#L1
[10]: https://www.heathertovey.com/squarespace-id-finder/
[11]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
