<div class="t-markups-manager">

{{calculation_id}}
	<b-table v-if="mode === 'table'" striped hover :items="items_diff === null ? items : items_diff" v-on:row-dblclicked="change_diff"></b-table>
	<r-markups-manager-changer v-if="mode === 'changer'" ref="changer" :input="changer_input"></r-markups-manager-changer>
</div>