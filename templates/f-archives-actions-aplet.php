<div class="f-archives-actions-aplet" v-if="show_ui">
	
	<b-container fluid>
		<b-row>
							    	
		    <b-col>
		    	<h1>{{ $root.__tr( "Archive calculation details" ) }}</h1>
		    </b-col>
		    
		    <b-col cols="1" >
		    	<icon name="times-circle"></icon>
		    	<p v-on:click="close_panel">{{ $root.__tr( "Close panel" ) }}</p>
		    </b-col>
		    
		</b-row>

		<b-row>
							    	
		    <b-col>
		    	<e-archives-actions :calculation_id="load_cid" :calculation_row="calculation_row"></e-archives-actions>
		    	<br>
		    </b-col>
		</b-row>


		<b-row>
							    	
		    <b-col>
	    		<div class="gcalc_fgroup">
					<h3 class="gcalc_fgroup__label">{{ $root.__tr( 'Calculations details' ) }}:</h3>
				</div>
				<c-total-archives-basic ref="total-archives-basic" :calculation_row="calculation_row"></c-total-archives-basic>
			</b-col>

			<b-col>
				    
		    	<t-calc-text-details :load_cid="load_cid"></t-calc-text-details>
			</b-col>

		</b-row>
	</b-container>

</div>