<div class="g-calculation-save-panel">
	
<b-container fluid>
	    <b-row>
	    	<!-- first col -->
	        <b-col>
	        	
					
					<b-container fluid>
						    <b-row>
						    	<!-- left -->
						        <b-col>
									<c-calculation-selector></c-calculation-selector>
						        </b-col>

						        <!-- right -->
						        <b-col class="acalculation-composer-col">
						        	<c-total-basic ref="total-basic" :calculation_id="calculation_id"></c-total-basic>

<z-acalculation-composer></z-acalculation-composer>
						        </b-col>
						    </b-row>

						   
					</b-container>

<!--<c-acalculation-attr-input-form ref="acalculation-input-form"></c-acalculation-attr-input-form>-->


	        </b-col>

	        <!-- Sec col -->
	        <b-col lg="4" md="5">
	        	

	        	<t-calc-text-details></t-calc-text-details>
	        </b-col>		        

	    </b-row>
	</b-container>
	
</div>


