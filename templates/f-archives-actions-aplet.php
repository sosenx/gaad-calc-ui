<div class="f-archives-actions-aplet" v-if="show_ui">
	
	<b-container fluid>
		<b-row>
							    	
		    <b-col>
		    	<t-calc-text-details :load_cid="load_cid"></t-calc-text-details>
			</b-col>

			<b-col>
				    <c-total-archives-basic ref="total-archives-basic" :calculation_id="load_cid"></c-total-archives-basic>
				    <e-archives-actions :calculation_id="load_cid"></e-archives-actions>
			</b-col>

		</b-row>
	</b-container>

</div>