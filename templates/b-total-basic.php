<div class="b-total-basic">
	

		{{ typeof calculation !== "undefined" && calculation !== null ? $store.getters.current_calculation_id : 'no current calculation' }}
<hr>
		
		<b-table v-if="typeof totals === 'object' && typeof totals.length === 'number' ? totals : false" stacked  :items="totals"></b-table>
</div>