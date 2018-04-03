<div class="f-total-production-processes">
	
	 <b-table striped hover :items="items"></b-table>

	<t-markups-manager ref="markups-manager" :calculation_id="$store.getters.current_calculation_id"  :tech_markups="$store.getters.tech_markups" 
	:recalculate="$store.getters.recalculate"></t-markups-manager>

	 <b-table striped hover :items="totals"></b-table>

<!--
Go trough production processes and instantiatie a component for each of
<b-container class="bv-example-row" v-if="calculation_id.length > 0">
	<b-row>		
		<b-col v-for="process in get_processes()" :key="process.calculation_id">
			<e-total-production-process :process="process"></e-total-production-process>			
		</b-col>		
	</b-row>
</b-container>
-->
</div>

