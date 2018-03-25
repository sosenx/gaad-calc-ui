<!-- Default input attribute handler. 
	It has two functionalities. 

	First it checks if dedicated attribute component exists and usaes it if true. 
	Secound, if special component doesn't exists is generate bootrap vue form field component of current field type. -->

<div class="b-input-attr-form-field">
	
{{ name }}

<div v-if="ui_component" >
	<component :is="ui_component"></component>

</div>
<div v-else >
	Default
	{{ field.type }}	

</div>



</div>