<div class="t-markups-manager">

{{calculation_id}}
<div class="tech-data">{{get_items()}}</div>
<hr>
<!-- v-if="mode === 'table'" -->
	<b-table  striped hover :items="TP" v-on:row-dblclicked="change_diff"></b-table>
	<r-markups-manager-changer v-if="mode === 'changer'" ref="changer" :input="changer_input"></r-markups-manager-changer>

	<div class="tech-data">{{ parseTP() }}</div>


	<b-table stacked striped hover :items="T"></b-table><!---->
</div>