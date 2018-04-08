<div id="s-calc-text-details-book" class="s-calc-text-details-book">



<div class="gcalc_fgroup" v-if="T !== null" v-for="(gr, key) in T">
	<h4 class="gcalc_fgroup__label">{{$root.__tr( gr.title )}}</h4>
	
	<b-table 
		v-if="T[key] !== null && ( typeof T[key].v === 'object' && typeof T[key].v.length === 'number' ) ? T[key].v : false" 
		stacked 
		:items="T[key].v"
	></b-table>	

</div>

	
{{calculation_details}}


</div>