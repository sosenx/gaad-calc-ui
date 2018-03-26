<!-- Default input attribute handler. 
	It has two functionalities. 

	First it checks if dedicated attribute component exists and usaes it if true. 
	Secound, if special component doesn't exists is generate bootrap vue form field component of current field type. -->

<div class="b-input-attr-form-field">
	


<component :is="ui_component"  :name="name" v-if="ui_component"></component>

<div v-if="!ui_component" class="b-input-attr-form-field__attr-input" >





	<label v-if="field.label && field.type !== 'checkbox'">{{ field.label }}</label>

	<!-- Simple input field of given type -->
	<b-form-input 
				size="sm"
				v-if="field.type == 'number' "
				v-model="$root.parse_options(n, $parent['pa_'+name], $parent)"
                :type="field.type"
                :placeholder="field.placeholder"
                :formatter="number_formatter"
                />



	<b-form-select 	
				size="sm"
				v-if="field.type == 'select' "
				v-model="$parent['pa_'+name]" 
				:options="$root.parse_options( n, options, $parent )" 
				 />


	<b-form-checkbox v-if="field.type == 'checkbox' "
					class="b-form-checkbox"

                     v-model="$parent['pa_'+name]"
                     value="true"
                     unchecked-value="false">
    {{ field.label }}
    </b-form-checkbox>


	<span  v-if="sufix" class="b-input-attr-form-field__attr-input__sufix">{{ sufix }}</span>
</div>



</div>