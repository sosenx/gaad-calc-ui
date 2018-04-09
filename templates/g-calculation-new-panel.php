<div class="g-calculation-new-panel">
	 
 
	<b-container fluid>
	    <b-row>
	    	<!-- first col -->
	        <b-col>
	        	
					
					<b-container fluid>
						    <b-row>
						    	<!-- left -->
						        <b-col md="4">
						        	<c-calculation-product-selector></c-calculation-product-selector>
						        </b-col>

						        <!-- right -->
						        <b-col class="calculation-composer-col">
						        	<z-calculation-composer></z-calculation-composer>
						        </b-col>
						    </b-row>

						   
					</b-container>

					<c-calculation-attr-input-form ref="input-form"></c-calculation-attr-input-form>


	        </b-col>

	        <!-- Sec col -->
	        <b-col lg="4" md="5">
	        	<!--
				Basic short calculation summary
	        	-->
	        	<c-total-basic ref="total-basic" :calculation_id="$store.getters.current_calculation_id"></c-total-basic>
	      
	        	<x-markups-input-form></x-markups-input-form>

	        	<t-calc-text-details></t-calc-text-details>
	        </b-col>		        

	    </b-row>
	</b-container>
</div>		
