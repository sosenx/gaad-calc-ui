<div class="c-calculation-attr-input-form">
	
	

	<select name="calc-product-type" v-model="productType">		
		<option v-for="(value, key, index) in products" :value="key">{{ key }}</option>
	</select>
		

</div>