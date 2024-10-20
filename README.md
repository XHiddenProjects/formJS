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
  </tbody>
</table>
