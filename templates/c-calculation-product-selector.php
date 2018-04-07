<div class="c-calculation-product-selector" >
	
	<label for="product-selector-select" >{{ $root.__tr( 'Wybierz produkt do kalkulacji' ) }}</label>	
	<b-form-select
		id="product-selector-select" 
		:options="options"
		v-model="productType"
		 />

</div>