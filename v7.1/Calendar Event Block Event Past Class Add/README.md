# Calendar Event Block Event Past Class Add

### [License][99]

### Version 0.1.0

#### SS Version 7.1

#### Fluid Engine Compatible : Unknown

---

## Install

* Install code from **[Calendar Block Event Change][1]**.
  
* Add code from
  **[calendar event block event past class add.html][2]** to Page Settings >
  Advanced > Page Header Code Injection for the page **before** the **calendar
  block event change** code. Read the code for any instructions within.
  
* In the calendar block event change code change the following line...

  ```
      const itemCallback = undefined;
  ```
  
  ...to...
  
  ```
      const itemCallback = cbepca;
  ```

## Note

This is meant as a base for other effects. It adds an **twc-is-past** class to
each past event which you can then use for your own CSS to manipulate past
events.

## Make a Donation

Please consider [making a donation][3].

## Changes

* **2022-04-29**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/tree/main/v7.1/Calendar%20Block%20Event%20Change#calendar-block-event-change
[2]: calendar%20event%20block%20event%20past%20class%20add.html#L1
[3]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
[99]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
