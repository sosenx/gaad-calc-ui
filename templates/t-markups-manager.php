<div class="t-markups-manager">

{{calculation_id}}
<hr>
<!-- v-if="mode === 'table'" -->
	<b-table  striped hover :items="get_items()" v-on:row-dblclicked="change_diff"></b-table>
	<r-markups-manager-changer v-if="mode === 'changer'" ref="changer" :input="changer_input"></r-markups-manager-changer>
	<!--<b-table stacked striped hover :items="totals"></b-table>-->

	{{totals}}
</div>