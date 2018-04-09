<div class="c-calculation-selector">
	
	<label for="product-selector-select" >{{ $root.__tr( 'Wybierz kalkulację do archiwizacji' ) }}</label>	
	<b-form-select
		id="product-selector-select" 
		:options="options"
		v-model="calculation_id"
	 />



</div>