<div class="g-archives-view">
	


<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{ $root.__tr('Saved calculations') }}</h3>


		 <b-alert show variant="info">
		 	{{ $root.__tr('Saved calculations') }}
		 	<br>
		 	{{ $root.__tr('All calculations saved from clipboard are avaible for view here.') }}
		 	<br>
		 	{{ $root.__tr('Double click on record to show details panel. Actions avaible for this record are also placed there. ') }}
		 </b-alert>


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

				<b-table  v-if="show_ui" class="archives"
				v-on:row-dblclicked="row_dblclicked"
				striped hover :items="items_" :fields="fields">
				</b-table>
					  


				
			</b-col>

		</b-row>

	</b-container>

</div>


	
</div>
