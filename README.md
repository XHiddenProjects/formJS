# formJS
FormJS is a easy JavaScript library that builds and devlops the HTML form.

## How to use
Use this script file
```html
<script src="https://cdn.jsdelivr.net/gh/XHiddenProjects/formJS@1.0.0/formJS.min.js"></script>
<script>
// You can use a file or this script placeholder to write the code
</script>
```

## Setup
To setup the _formJS_ you have to create the object first
```js
const form = new Form('body',{
  //Attributes go here
  method: 'post',
  action: ''
},[
//Stylesheets URL
],[
//Scripts URL
]);
```

## Actions
Here is the list of actions you can use. **Note:** _?_ = optional parameter
<table>
  <thead>
    <tr>
      <th>Function</th>
      <th>Parameters</th>
      <th>Parameters type</th>
      <th>Return</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>addText()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>text</b></td>
    </tr>
    <tr>
      <td>addPassword()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>password</b></td>
    </tr>
    <tr>
      <td>addNumber()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>Number|Number[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>number</b></td>
    </tr>
    <tr>
      <td>addCheckbox()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>Boolean|Boolean[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>checkbox</b></td>
    </tr>
    <tr>
      <td>addRadio()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>Boolean|Boolean[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>radio</b></td>
    </tr>
    <tr>
      <td>addButton()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Button=<b>button</b></td>
    </tr>
    <tr>
      <td>addSubmit()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Button=<b>submit</b></td>
    </tr>
    <tr>
      <td>addReset()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Button=<b>reset</b></td>
    </tr>
    <tr>
      <td>addColor()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>color</b></td>
    </tr>
    <tr>
      <td>addSearch()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>search</b></td>
    </tr>
    <tr>
      <td>addFile()</td>
      <td><em>InputName</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>radio</b></td>
    </tr>
    <tr>
      <td>addEmail()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>email</b></td>
    </tr>
    <tr>
      <td>addDate()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>date</b></td>
    </tr>
    <tr>
      <td>addDateTime()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>datetime-local</b></td>
    </tr>
    <tr>
      <td>addMonth()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>month</b></td>
    </tr>
    <tr>
      <td>addWeek()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>week</b></td>
    </tr>
    <tr>
      <td>addTime()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>time</b></td>
    </tr>
    <tr>
      <td>addHidden()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>hidden</b></td>
    </tr>
    <tr>
      <td>addImg()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>image</b></td>
    </tr>
    <tr>
      <td>addRange()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>Number|Number[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>range</b></td>
    </tr>
    <tr>
      <td>addTel()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>tel</b></td>
    </tr>
    <tr>
      <td>addURL()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Input=<b>url</b></td>
    </tr>
    <tr>
      <td>addLabel()</td>
      <td><em>InputName</em>, <em>LabelsText?</em>, <em>LabelsAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Label</td>
    </tr>
    <tr>
      <td>addSelect()</td>
      <td><em>SelectName</em>, <em>SelectOptions</em>, <em>SelectAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Select</td>
    </tr>
    <tr>
      <td>addOption()</td>
      <td><em>OptionNames</em>, <em>OptionValues</em>, <em>OptionSelected?</em>, <em>optionGroup?</em>, <em>reverseOrder?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Boolean|Boolean[]</em>, <em>String|String[]</em>, <em>Boolean</em></td>
      <td>Option=<b>[...Options]</b></td>
    </tr>
    <tr>
      <td>addTextarea()</td>
      <td><em>InputName</em>, <em>InputValue?</em>, <em>InputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Textarea</td>
    </tr>
    <tr>
      <td>addFieldset()</td>
      <td><em>FieldsetID</em>, <em>fieldsetAttribute?</em></td>
      <td><em>String|String[]</em>, <em>Object|Object[]</em></td>
      <td>Fieldset</td>
    </tr>
    <tr>
      <td>addLegend()</td>
      <td><em>FieldsetID</em>, <em>LegendsText?</em>, <em>LegendsAttributes?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em></td>
      <td>Legend</td>
    </tr>
    <tr>
      <td>addDatalist()</td>
      <td><em>DatalistID</em>, <em>DatalistOptions?</em>, <em>DatalistAttributes?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em></td>
      <td>Datalist</td>
    </tr>
    <tr>
      <td>addOutput()</td>
      <td><em>OutputID</em>, <em>OutputsVars?</em>, <em>OutputAttributes?</em>, <em>FieldsetID?</em></td>
      <td><em>String|String[]</em>, <em>String|String[]</em>, <em>Object|Object[]</em>, <em>String|String[]</em></td>
      <td>Output</td>
    </tr>
    <tr>
      <td>addBreak()</td>
      <td><em>Element</em>, <em>breakAttributes?</em>, <em>repeat?</em></td>
      <td><em>String|String[]</em>, <em>Object|Object[]</em>, <em>Number</em></td>
      <td>BR</td>
    </tr>
    <tr>
      <td>addSpace()</td>
      <td><em>Element Target</em>, <em>spaceAttributes?</em>, <em>repeat?</em></td>
      <td><em>String|String[]</em>, <em>Object|Object[]</em>, <em>Number</em></td>
      <td> </td>
    </tr>
  </tbody>
</table>

## Options attributes
`addOptions` will return as an "Option-object" so use this to help for any _option_ prameter

Example:
```js
const opt = form.addOptions(['Option 1','Option 2'],['option1','option2']);// Options
form.addSelect('test',opt);// Creates select
```

## Load form
Use the `load` method to load the form
```js
form.load(); //Loads the form
```
