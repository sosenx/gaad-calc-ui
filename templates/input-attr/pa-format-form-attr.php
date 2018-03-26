<div class="pa-format-form-attr">
	
<label v-if="field.label">{{ field.label }}</label>



<b-form-select 	
				
		v-if="field.type == 'select' "
		v-model="$parent.$parent['pa_'+name]" 
		:options="$root.parse_options( n, options, $parent )" 
		v-on:change="changeSelected( $event)"
		 />


		<div class="gcalc_fgroup" v-if="custom_value">
			<h3 class="gcalc_fgroup__label">{{$root.__tr('Custom format')}}</h3>

			<label>{{ $root.__tr('Width') }}</label>    	
			<b-form-input 				
				v-model="ch"
                type="number"
                :placeholder="$root.__tr('Enter custom width in milimeters')"
                />

		 	<label>{{ $root.__tr('Height') }}</label>
		 	<b-form-input				
				v-model="cw"
                type="number"
                :placeholder="$root.__tr('Enter custom height in milimeters')"
                />
		</div>


</div>	

