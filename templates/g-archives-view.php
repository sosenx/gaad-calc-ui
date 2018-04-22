<div class="g-archives-view">
	
<f-archives-actions-aplet></f-archives-actions-aplet>

	<b-container fluid>
		<b-row>
							    	
			<b-col>
				
				<f-archives-filters v-if="show_ui"></f-archives-filters>
			</b-col>

			<b-col>
				<f-archives-pagination v-if="show_ui" :items_per_page="items_per_page" :current_page="current_page" :total_rows="total_rows">
					
				</f-archives-pagination>
			</b-col>

		</b-row>


		<b-row>
							    	
			<b-col>

				<b-table  v-if="show_ui"
				v-on:row-dblclicked="row_dblclicked"
				striped hover :items="items_" :fields="fields">
				</b-table>
					  


				
			</b-col>

		</b-row>

	</b-container>




	
</div>
