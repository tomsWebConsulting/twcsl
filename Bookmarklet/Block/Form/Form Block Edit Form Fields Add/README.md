# Form Block Edit Form Fields Add

### [License][1]

### Synopsis

More easily add fields to an Edit Form Fields panel.

### Version

  * 0.1.0

#### SS Versions

  * 7.1
  
  * 7.0

#### v7.1 Fluid Engine Compatible

  * Not Applicable

---

## Quick Install

Add code from file **[form block edit form fields add.bookmarklet][2]** as the
URL for a bookmark in your browser named **TWC Form Block Edit Form Fields
Add**.

## How to Use

* Prepare a JSON file using the **Fields Add JSON File Format**.

* Add or edit a Form block.

* Click on Edit Form Fields.

* Use the bookmarklet.

* Wait for the bookmarklet to alert you that it is done.

## Fields Add JSON File Format

The format is a JSON structured file. The best way to begin to get familiar with
the format are some examples.

  * [Fields All Default][3]
  
    Creates one of each field type with no changes to the Squarepace defaults.
    
  * [Dropdown Field US States][4]
  
    Creates a Dropdown field with the label States and OPTIONS set to the US
    States.
    
  * [File Upload Field File Details All][5]
  
    Creates a File Upload field with all the FILE DETAILS toggled on and
    checked, with the Max Number of Files set to 5.
    
  * [Follow Up Boss Email Parser Advanced Format Fields][6]
  
    Creates as close to FUB Email Parser Advanced format as Squarespace can get
    when using the email storage option.
    
It is beyond the scope of this README to teach JSON.

## Notes

The code does not currently support Follow-up Questions.

The code is not particularly robust. It is like a timed macro player, clicking
and inputting values. I chose this less advanced method to reduce the size and
complexity of the code.

I suggest taking some precautions. For example if working on an existing form,
make a copy and work on the copy.

## What is a bookmarklet?

Wikipedia has a nice entry on [bookmarklet][7].

## Make a Donation

Please consider [making a donation][8].

## Changes

<!-- * **2021-05-12**

  * add support for guard processor
  * bumped version to 0.2d0
  -->
* **2025-03-17**

  * initial version

[1]: https://github.com/tomsWebConsulting/twcsl/blob/main/LICENSE.txt#L1
[2]: form%20block%20edit%20form%20fields%20add.bookmarklet#L1
[3]: fields%20add%20examples/Fields%20All%20Default.json
[4]: fields%20add%20examples/Dropdown%20Field%20US%20States.json
[5]: fields%20add%20examples/File%20Upload%20Field%20File%20Details%20All.json
[6]: fields%20add%20examples/Follow%20Up%20Boss%20Email%20Parser%20Advanced%20Format%20Fields.json
[7]: https://en.wikipedia.org/wiki/Bookmarklet
[8]: https://github.com/tomsWebConsulting/twcsl#make-a-donation
