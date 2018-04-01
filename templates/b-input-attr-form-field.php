<!-- Default input attribute handler. 
	It has two functionalities. 

	First it checks if dedicated attribute component exists and usaes it if true. 
	Secound, if special component doesn't exists is generate bootrap vue form field component of current field type. -->

<div class="b-input-attr-form-field" :class="{ 'b-input-attr-form-field--disabled' : disabled, 'b-input-attr-form-field--error' : error, 'b-input-attr-form-field--warning' : warning }">
	


<component :is="ui_component"  :name="name" v-if="ui_component"></component>

<div v-if="!ui_component" class="b-input-attr-form-field__attr-input" >





	<label v-if="field.label && field.type !== 'checkbox'">{{ field.label }}</label>

	<!-- Simple input field of given type-->
	<b-form-input 
				v-if="field.type == 'number' "
				v-model="$parent['pa_'+name]" 
                :type="field.type"
                :placeholder="field.placeholder"                
                />


	<b-form-select 	
				v-if="field.type == 'select' "
				v-model="$parent['pa_'+name]" 
				:options="parse_options($root.parse_options( n, options, $parent ))" 
				 />


	<b-form-checkbox v-if="field.type == 'checkbox' "
						class="b-form-checkbox"
                     	v-model="$parent['pa_'+name]"
                     	value="true"
                     	unchecked-value="false">
    {{ field.label }}
    </b-form-checkbox>



    <b-form-textarea v-if="field.type == 'textarea' "
                     v-model="$parent['pa_'+name]"
                     :placeholder="field.placeholder"
                     :rows="1"
                     :max-rows="10">
    </b-form-textarea>


	<span  v-if="sufix" class="b-input-attr-form-field__attr-input__sufix">{{ sufix }}</span>
</div>



</div>