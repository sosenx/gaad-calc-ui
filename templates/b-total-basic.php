<div class="b-total-basic">
	

		{{ typeof calculation !== "undefined" && calculation !== null ? $store.getters.current_calculation_id : 'no current calculation' }}
<hr>
		
		<b-table v-if="typeof T === 'object' && typeof T.length === 'number' ? T : false" stacked  :items="T"></b-table>



</div>