<!-- Default input attribute handler. 
	It has two functionalities. 

	First it checks if dedicated attribute component exists and usaes it if true. 
	Secound, if special component doesn't exists is generate bootrap vue form field component of current field type. -->

<div class="b-input-attr-form-field">
	


<div v-if="ui_component" >
	<component :is="ui_component"></component>

</div>
<div v-else >

	<label v-if="field.label">{{ field.label }}</label>


	<!-- Simple input field of given type -->
	<b-form-input 
				v-if="field.type == 'number' "
				v-model="$root.parse_options(name, $parent['pa_'+name])"
                :type="field.type"
                :placeholder="field.placeholder"
                :formatter="number_formatter"
                />



	<b-form-select 	
				v-if="field.type == 'select' "
				v-model="$parent['pa_'+name]" 
				:options="$root.parse_options( name, options )"
				 />

</div>



</div>