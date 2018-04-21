<div class="g-archives-view">
	


	<b-container fluid>
		<b-row>
							    	
			<b-col>
				<f-archives-actions-aplet></f-archives-actions-aplet>
				<f-archives-filters></f-archives-filters>
			</b-col>

			<b-col>
				<f-archives-pagination></f-archives-pagination>
			</b-col>

		</b-row>


		<b-row>
							    	
			<b-col>
				<b-table 
				v-on:row-dblclicked="row_dblclicked"
				striped hover :items="items_" :fields="fields">
				</b-table>
					  


				
			</b-col>

		</b-row>

	</b-container>





	
</div>
