<div class="z-acalculation-composer">
	
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr('Save calculation ')}}</h3>

		<div class="gcalc_fgroup__span gcalc_fgroup__span--two_one">
			
			<label for="calculation-name"></label>
			<b-form-input 
					id="calculation-name"
					v-model="arch_data"
                  	type="text"
                  	:placeholder="$root.__tr('Calculation name')"></b-form-input>

			
		</div>
	</div>




</div>