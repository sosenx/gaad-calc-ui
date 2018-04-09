<div :class="{ 'b-total-basic' : true, 'b-total-basic--showing-calculation' : ( T !== null && (typeof T === 'object' && typeof T.length === 'number') ) }">
	


	<b-alert 
		v-if="recalculate_mode && T !== null"
		class="b-total-basic__recalculate-alert"
		show 
		variant="primary">{{ $root.__tr( 'Products attributes had been changed. Click to recalculate.' ) }}</b-alert>



	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr('Calculation basic summary')}}</h3>		
		<b-table v-if="T !== null && (typeof T === 'object' && typeof T.length === 'number') ? T : false" stacked  :items="T"></b-table>

		<div v-if="T === null" >
			<b-alert dismissible 
             :show="true"
             v-on:dismissed="showDismissibleAlert=false"
             >{{ $root.__tr( 'To recieve calculation data use form and click calculate' ) }}</b-alert>
		</div>

	</div>

</div>