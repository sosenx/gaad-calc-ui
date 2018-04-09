<div class="g-calculation-save-panel">
	
<b-container fluid>
	    <b-row>
	    	<!-- first col -->
	        <b-col>
	        	
					
					<b-container fluid>
						    <b-row>
						    	<!-- left -->
						        <b-col>
									<c-calculation-selector ref="calculation-selector"></c-calculation-selector>
									<br>
									<br>
									<z-acalculation-composer ref="acalculation-composer"></z-acalculation-composer>
						        </b-col>
 

 					
						        <!-- right -->
						        <b-col class="acalculation-composer-col">
						        	<c-total-basic ref="total-basic" :calculation_id="calculation_id"></c-total-basic>
									
									<b-alert show variant="primary">
							        	<b-button id="acomposer-calculate" size="md" variant="primary" v-on:click="request_acalculation" >

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


									<b-alert show variant="success" v-if="calculation_moved_info">
										<br>
										<br>
										{{ $root.__tr( 'Calculation stored in database. Reloading panel...' ) }}
										<br>
									</b-alert>
									<b-alert show variant="danger" v-if="calculation_moving_error">
										<br>
										<br>
										{{ $root.__tr( 'Error during save procedure. Canceling...' ) }}
										<br>
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


