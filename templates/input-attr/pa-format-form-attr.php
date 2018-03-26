<div class="pa-format-form-attr">
	
<h1>pa-format-form-attr</h1>



<b-form-select 	
				
		v-if="field.type == 'select' "
		v-model="$parent.$parent['pa_'+name]" 
		:options="$root.parse_options( n, options, $parent )" 
		v-on:change="changeSelected( $event)"
		 />


		 <div v-if="custom_value">
		 	
		 	<b-form-input				
				v-model="cw"
                type="number"
                placeholder="width"
                />

			<b-form-input 				
				v-model="ch"
                type="number"
                placeholder="width"
                />

		 </div>


</div>	