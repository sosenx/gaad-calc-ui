<div class="g-calculation-save-panel">
		
	<b-container fluid>
		<b-row>
							    	
		    <b-col>
				<c-calculation-selector ref="calculation-selector"></c-calculation-selector>
		    </b-col>

		</b-row>


<br>

		<b-row>
							    	
		    <b-col v-if="show_ui">
				<z-acalculation-composer ref="acalculation-composer"></z-acalculation-composer>
		    </b-col>

		</b-row>


<br>		<b-row>
							    	
		    <b-col class="submit-col"  v-if="show_ui">
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
		    </b-col>

		</b-row>


<br>
<br>
				



		<b-row v-if="bussy">
			<b-col class="bussy-spinner">
				<icon name="spinner" spin ></icon>
			</b-col>
		</b-row>

		<b-row>
			<b-col>		
				
				<k-pdf-sent-notifications ref="sent-notifications" :data="success_data"></k-pdf-sent-notifications>
				<k-pdf-created-notifications ref="created-notifications" :data="success_data"></k-pdf-created-notifications>

				<b-alert show variant="success" v-if="calculation_moved_info">
					
					{{ $root.__tr( 'Calculation succesfully stored in database. It is avaible in `Archives` now.' ) }}
					
				</b-alert>

				<b-alert show variant="danger" v-if="calculation_moving_error">
					
					{{ $root.__tr( 'Error during save procedure. Send calculation ID to administrator for further assistance.' ) }}
					
				</b-alert>
			</b-col>
		</b-row>
		


		<b-row v-if="show_ui">

			



			<b-col lg="4" md="5">
	        	<t-calc-text-details></t-calc-text-details>
	        </b-col>	

			<b-col>
				<c-total-basic ref="total-basic" :calculation_id="calculation_id"></c-total-basic>

			</b-col>	
		</b-row>



	</b-container>
	
</div>


