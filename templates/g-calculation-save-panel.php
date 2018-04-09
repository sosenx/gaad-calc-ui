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
									<br>
									<br>
									<z-acalculation-composer></z-acalculation-composer>
						        </b-col>


 								<b-alert show variant="primary">

							        <!-- right -->
							        <b-col class="acalculation-composer-col">
							        	<c-total-basic ref="total-basic" :calculation_id="calculation_id"></c-total-basic>

							        	<b-button id="acomposer-calculate" size="md" variant="primary" v-on:click="request_acalculation" :disabled="!is_validated" >

										<span v-if="bussy">
											<icon name="spinner" spin ></icon>
											<span class="label">{{ $root.__tr( 'Saving' ) }}</span>
										</span>
										<span v-else>
											<icon name="floppy-o"></icon>
											<span class="label">{{ $root.__tr( 'Save' ) }}</span>
										</span>

									</b-button>
								</b-alert>



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


