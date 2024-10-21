/**
 * Creates a new form object
 */
const DISABLED = {disabled: true},
READONLY = {readonly: true},
CHECKED = {checked: true},
REQUIRED = {required: true},
SELECTED = {selected: true},
/**
 * Merges objects into one
 *
 * @param {...Object} objs List of objects
 * @returns {Object} Singular object
 */
MERGE = (...objs)=>{
    const merge={};
    objs.forEach(e=>{
        Object.keys(e).forEach(k=>{
            merge[k] = e[k];
        });
    });
    return merge;
};
/**
 * FormJS class
 */
class Form{
    /**
     * Loads the form class
     * @param {String} e Target element
     * @param {{}} [a={}] Attributes of the form
     * @param {String[]} [t=[]] Form stylesheets
     * @param {any[]} [s=[]] Form scripts
     */
    constructor(e,a={},t=[],s=[]){
        this.e = document.querySelector(e);
        this.form = document.createElement('form');
        Object.keys(a).forEach((k)=>{
            this.form.setAttribute(k,a[k]);
        });
        if(this.e.querySelector('form')){
            this.e.querySelectorAll('form').forEach(fm=>{
                fm.insertAdjacentElement('afterend',this.form);
            });
        }else this.e.insertAdjacentElement('afterbegin',this.form);
        t.forEach((temp)=>{
            const l = document.createElement('link');
            l.src = temp;
            l.rel = 'stylesheet';
            document.head.appendChild(l);
        });
        s.forEach((temp)=>{
            const l = document.createElement('script');
            l.src = temp;
            document.body.appendChild(l);
        });
        this.structure = [];
    }
    /**
     * Converts BBCode to HTML
     * @param {String} str String to convert
     * @return {String} Formatted BBCode
     */
    #BBcode(str){
        str = str.replaceAll('<','&lt;').replaceAll('>','&gt;');
        //bold
        str = str.replace(/\[b\](.*?)\[\/b\]/,'<b>$1</b>');
        //italic
        str = str.replace(/\[i\](.*?)\[\/i\]/,'<em>$1</em>');
        //underline
        str = str.replace(/\[u\](.*?)\[\/u\]/,'<u>$1</u>');
        //color
        str = str.replace(/\[color=(.*?)\](.*?)\[\/color\]/g,'<font color="$1">$2</font>');
        //size
        str = str.replace(/\[size=([\d]+)\](.*?)\[\/size\]/g,'<font style="font-size:$1px">$2</font>');
        //url2
        str = str.replace(/\[url=(.*?)\](.*?)\[\/url\]/g,'<a href="$1">$2</a>');
        //url1
        str = str.replace(/\[url\](.*?)\[\/url\]/g,'<a href="$1">$1</a>');
        //email
        str = str.replace(/\[email\](.*?)\[\/email\]/g,'<a href="mailto:$1">$1</a>');
        //img2
        str = str.replace(/\[img=(.*?)\](.*?)\[\/img\]/g,'<img src="$2" alt="$1"/>');
        //img1
        str = str.replace(/\[img\](.*?)\[\/img\]/g,'<img src="$1" alt=""/>');
        //code
        str = str.replace(/\[code\](.*?)\[\/code\]/g,'<code>$1</code>');
        //listing
        str = str.replace(/\[\*\](.*?)/g,'<li>$1</li>');
        //unordered list
        str = str.replace(/\[list\](.*?)\[\/list\]/g,'<ul>$1</ul>');
        //ordered list
        str = str.replace(/\[list=1\](.*?)\[\/list\]/g,'<ol>$1</ol>');
        //unordered list(lower-alpha)
        str = str.replace(/\[list=a\](.*?)\[\/list\]/g,'<ul style="list-style:lower-alpha;">$1</ul>');
        //unordered list(upper-alpha)
        str = str.replace(/\[list=A\](.*?)\[\/list\]/g,'<ul style="list-style:upper-alpha;">$1</ul>');
        //unordered list(lower-roman)
        str = str.replace(/\[list=i\](.*?)\[\/list\]/g,'<ul style="list-style:lower-roman;">$1</ul>');
        //unordered list(upper-roman)
        str = str.replace(/\[list=I\](.*?)\[\/list\]/g,'<ul style="list-style:upper-roman;">$1</ul>');
        return str;
    }
    
    /**
     * Adds a text input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addText(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input: 'text', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input: 'text', name:n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a password input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addPassword(n,v='',a={}, f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input: 'password', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input: 'password', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a number input
     * @param {String|String[]} n Inputs name
     * @param {Number|Number[]} [v=0] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addNumber(n,v=0,a={}){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input: 'number', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input: 'number', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a checkbox
     * @param {String|String[]} n Inputs name
     * @param {Boolean|Boolean[]} [v=false] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addCheckbox(n,v=false,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input: 'checkbox', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input: 'checkbox', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a radio
     * @param {String|String[]} n Inputs name
     * @param {Boolean|Boolean[]} [v=false] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addRadio(n,v=false,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input: 'radio', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input: 'radio', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a button
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addButton(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'button',input:'button', name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'button',input:'button', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a Submit button
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addSubmit(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'button',input:'submit',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'button',input:'submit', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a reset button
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addReset(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'button',input:'reset',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'button',input:'reset', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a color input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addColor(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'color',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'color', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a search input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addSearch(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'search',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'search', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a File input
     * @param {String|String[]} n Inputs name
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addFile(n,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'file',name: n[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'file', name: n, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Adds a email input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addEmail(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'email',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'email', name: n, value: v, attributes:a,fieldset: `fieldset#${f[i] ? f[i] : ''}`});
    }
    
    /**
     * Adds a date input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addDate(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'date',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'date', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a DateTime input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addDateTime(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'datetime-local',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'datetime-local', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a month input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addMonth(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'month',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'month', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a week input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addWeek(n,v='',a={}){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'week',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'week', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a time input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addTime(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'time',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'time', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a hidden input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addHidden(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'hidden',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'hidden', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a image input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addImg(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'image',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'image', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }
    
    /**
     * Adds a range input
     * @param {String|String[]} n Inputs name
     * @param {Number|Number[]} [v=0] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addRange(n,v=0,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'range',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'range', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a telephone input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addTel(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'tel',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'tel', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Adds a URL input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} [v=''] Inputs value
     * @param {{}|[{}]} [a={}] Inputs Attributes 
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addURL(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build:'input',input:'url',name: n[i], value: v[i], attributes:a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build:'input',input:'url', name: n, value: v, attributes:a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Creates a label for input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} v Labels message
     * @param {{}|[{}]} a Labels attributes
     */
    addLabel(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'label',location: n[i],value: `${v[i]} `, attributes: a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build: 'label',location: n,value: `${v} `, attributes: a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Creates a label for input
     * @param {String|String[]} n Selects name
     * @param {[{}]} o Selects Options
     * @param {{}|[{}]} a Select attributes
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addSelect(n,o,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'select',options: o[i], attributes: a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build: 'select',options: o, attributes: a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * @param {String|String[]} n names of the option
     * @param {String|String[]} v Values of the option
     * @param {Boolean|Boolean[]} [s=false] Sets the selected option
     * @param {String|String[]} [g=''] Group name
     * @param {Boolean} [r=false] Reverses the values/names(Used for Datalist)
     * @returns 
     */
    addOption(n,v='',s=false,g='',r=false){
        const opt=[];
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++){
                if(r)
                    opt.push({option:v[i],value:n[i],selected:(s[i] ? s[i] : false),group:g[i]});
                else
                    opt.push({option:n[i],value:v[i],selected:(s[i] ? s[i] : false),group:g[i]});
            }
        }else{
            if(r)
                opt.push({option:v,value:n,selected:(s ? s : false),group:g});
            else
                opt.push({option:n,value:v,selected:(s ? s : false),group:g});
        }
        return opt;
    }
    /**
     * Creates a label for input
     * @param {String|String[]} n Inputs name
     * @param {String|String[]} v Labels message
     * @param {{}|[{}]} a Labels attributes
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addTextarea(n,v='',a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'textarea',name:n[i], value: `${v[i]} `, attributes: a[i],fieldset: `fieldset#${f[i] ? f[i] : ''}`});
        }else
            this.structure.push({build: 'textarea',name: n,value: `${v} `, attributes: a,fieldset: `fieldset#${f ? f : ''}`});
    }
    /**
     * Creates a fieldset
     * @param {String|String[]} n Fieldset ID
     * @param {{}|[{}]} a Fieldset attributes
     */
    addFieldset(n,a={}){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'fieldset',id:n[i], attributes: a[i]});
        }else
            this.structure.push({build: 'fieldset',id: n, attributes: a});
    }
    /**
     * 
     * @param {String|String[]} n Fieldset ID
     * @param {String|String[]} [v=''] Legends message 
     * @param {{}|[{}]} [a={}] Legends Attributes
     */
    addLegend(n,v='',a={}){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'legend',fieldset: `fieldset#${n[i]}`, value:v[i], attributes: a[i]});
        }else
            this.structure.push({build: 'legend',value: v, fieldset: `fieldset#${n}`, attributes: a});
    }
    /**
     * Adds a datalist
     * @param {String|String[]} n Datalist ID
     * @param {{}|[{}]} o Option list
     * @param {{}|[{}]} a Datalist Attributes
     */
    addDatalist(n,o,a={}){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'datalist', id: n[i], options:o[i], attributes: a[i]});
        }else
            this.structure.push({build: 'datalist',id: n, options: o, attributes: a});
    }
    /**
     * Adds an output
     * @param {String|String[]} n Outputs name
     * @param {String|String[]} v Outputs Variables
     * @param {{}|[{}]} a Outputs attributes
     * @param {String|String[]} [f=''] Fieldset ID
     */
    addOutput(n,v,a={},f=''){
        if(Array.isArray(n)){
            for(let i=0;i<n.length;i++)
                this.structure.push({build: 'output', name: n[i], for:v[i], attributes: a[i],fieldset: `fieldset#${f ? f : ''}`});
        }else
            this.structure.push({build: 'output',name: n, for: v, attributes: a,fieldset: `fieldset#${f ? f : ''}`});
    }

    /**
     * Creates a line break
     * @param {String} l Element name
     * @param {{}} [a={}] Breaks attributes
     * @param {Number} [r=1] [Optional] - How many times to repeat.
     */
    addBreak(l,a={},r=1){
        if(arguments.length==2){
            if(Array.isArray(l)){
                for(let k=0;k<l.length;k++){
                    for(let i=0;i<a;i++){
                        this.structure.push({build:'break',location: l[k], attributes: undefined});
                    }
                }
            }else{
                for(let i=0;i<a;i++){
                    this.structure.push({build:'break',location: l[k], attributes: undefined});
                }
            }
        }else{
            if(Array.isArray(l)){
                for(let k=0;k<l.length;k++){
                    for(let i=0;i<r;i++){
                        this.structure.push({build:'break',location: l[k], attributes: a[k]});
                    }
                }
            }else{
                for(let i=0;i<r;i++){
                    this.structure.push({build:'break',location: l[k], attributes: a[k]});
                }
            }
        }
    }
    /**
     * Creates a space
     * @param {String} l Element name
     * @param {{}} [a={}] Breaks attributes
     * @param {Number} [r=1] [Optional] - How many times to repeat.
     */
    addSpace(l,a={},r=1){
        if(arguments.length==2){
            if(Array.isArray(l)){
                for(let k=0;k<l.length;k++){
                    for(let i=0;i<a;i++){
                        this.structure.push({build:'space',location: l[k], attributes: undefined});
                    }
                }
            }else{
                for(let i=0;i<a;i++){
                    this.structure.push({build:'space',location: l[k], attributes: undefined});
                }
            }
        }else{
            if(Array.isArray(l)){
                for(let k=0;k<l.length;k++){
                    for(let i=0;i<r;i++){
                        this.structure.push({build:'space',location: l[k], attributes: a[k]});
                    }
                }
            }else{
                for(let i=0;i<r;i++){
                    this.structure.push({build:'space',location: l[k], attributes: a[k]});
                }
            }
        }
    }
    /**
     * Loads the form
     */
    load(){
        let isMade = [];
        this.structure.forEach(c=>{
            let f;
            switch(c.build.toLocaleLowerCase()){
                case 'input':
                    f = document.createElement('input');
                    f.name = c.name;
                    f.type = c.input;
                    if(c.input==='image') f.src = c.value;
                    else{
                        if(typeof c.value==='string'||typeof c.value==='number')
                            f.value = c.value;
                        else
                            f.checked = c.value;
                    }
                break;
                case 'label':
                    f = document.createElement('label');
                    f.innerHTML = this.#BBcode(c.value);
                    if(c.location)
                        f.setAttribute('for',c.location.replace(/^.*?=|\]|#|\./g,''));
                break;
                case 'break':
                    f = document.createElement('br');
                break;
                case 'space':
                    f = document.createElement('span');
                    f.innerHTML = '&nbsp;';
                break;
                case 'button':
                    f = document.createElement('button');
                    f.type = c.input;
                    f.innerHTML = this.#BBcode(c.value);
                    f.name = c.name;
                break;
                case 'select':
                    f = document.createElement('select');
                    c.options.forEach((opt)=>{
                    
                        if(opt.group){
                            if(isMade.indexOf(opt.group)<0){
                                const optgrp = document.createElement('optgroup');
                                optgrp.label = opt.group;
                                
                                const optCon = new Option(opt.option,opt.value,opt.selected,opt.selected);
                                optgrp.appendChild(optCon);
                                f.appendChild(optgrp);
                                isMade.push(opt.group);
                            }else{
                                const optgrp = f.querySelector(`optgroup[label="${opt.group}"]`);
                                const optCon = new Option(opt.option,opt.value,opt.selected,opt.selected);
                                optgrp.appendChild(optCon);
                            }
                            
                        }else{
                            const optCon = new Option(opt.option,opt.value,opt.selected,opt.selected);
                            f.appendChild(optCon);
                        }
                        
                    });
                break;
                case 'fieldset':
                    f = document.createElement('fieldset');
                    f.id = c.id;
                break;
                case 'legend':
                    f = document.createElement('legend');
                    f.innerHTML = this.#BBcode(c.value);
                    if(!c.fieldset.match(/fieldset#.+/)) throw new SyntaxError("Invalid fieldset");
                    if(this.form.querySelector(`${c.fieldset} legend`)) throw new Error("Legend already found!");
                break;
                case 'datalist':
                    f = document.createElement('datalist');
                    f.id = c.id;
                    isMade = [];
                    c.options.forEach((opt)=>{
                        if(opt.group)
                            throw new SyntaxError("You cannot have option group for datalist");
                        else{
                            const optCon = new Option(opt.option,opt.value,false,false);
                            f.appendChild(optCon);
                        }
                        
                    });
                break;
                case 'output':
                    f = document.createElement('output');
                    f.name = c.name;
                    f.setAttribute('for',c.for);
                break;
            }
            
            if(c['attributes']){
                Object.keys(c['attributes']).forEach(a=>{
                    f.setAttribute(a,c['attributes'][a]);
                });
            }
            if(c.hasOwnProperty('location')&&c.location){
                const x = this.form.querySelector(`${c.location.replace(/\[(.*)=(.*)\]/,'[$1="$2"]')}`);
                if(x)
                    x.insertAdjacentElement('beforebegin',f);
                else
                    this.form.appendChild(f);
            }else if(c.hasOwnProperty('fieldset')&&c.fieldset&&c.fieldset.match(/fieldset#.+/)){
                const x = this.form.querySelector(c.fieldset);
                if(x)
                    x.appendChild(f);
                else
                    this.form.appendChild(f);
            }else
                this.form.appendChild(f);
        });
    }
    /**
     * Returns the form structure
     * @returns {[{}]} Structure format
     */
    getStructure(){
        return this.structure;
    }
}