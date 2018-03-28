<div :class="{'pa-format-form-attr':true}">
	
<div class="b-input-attr-form-field__attr-input">
	<label v-if="field.label">{{ field.label }}</label>
	<b-form-select 	
			size="sm"
			v-if="field.type == 'select' "
			v-model="$parent.$parent['pa_'+name]" 
			:options="$parent.parse_options($root.parse_options( n, options, $parent ))" 
			v-on:change="changeSelected( $event)"
			 />
</div>





		<div class="gcalc_fgroup" v-if="custom_value">
			<h3 class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Custom format')}}</h3>


	

				<div class="gcalc_fgroup__sub__row">
					
					<label>{{ $root.__tr('Width') }}</label>    	
					<b-form-input 
					 	size="sm"				
						v-model="ch"
				        type="number"
				        :placeholder="$root.__tr('Enter custom width')"
				        />
				    <span class="gcalc_fgroup__sub__row__suffix">{{ $root.__tr('mm') }}</span>    
				</div>


				<div class="gcalc_fgroup__sub__row">
					<label>{{ $root.__tr('Height') }}</label>
				 	<b-form-input	
				 	 	size="sm"			
						v-model="cw"
				        type="number"
				        :placeholder="$root.__tr('Enter custom height')"
				        />
				</div>


		 	
		</div>


</div>	

