<div class="t-markups-manager">

{{calculation_id}}
<hr>

	<b-table v-if="mode === 'table'" striped hover :items="get_items()" v-on:row-dblclicked="change_diff"></b-table>
	<r-markups-manager-changer v-if="mode === 'changer'" ref="changer" :input="changer_input"></r-markups-manager-changer>
	<b-table striped hover :items="totals"></b-table>
</div>