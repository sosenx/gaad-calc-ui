<div class="b-total-basic">
{{ $store.getters.current_calculation_id }}
		<h1>c-total-basic</h1>


		{{ typeof calculation !== "undefined" && calculation !== null ? calculation.output.t.total_cost_ : 'no current calculation' }}
</div>