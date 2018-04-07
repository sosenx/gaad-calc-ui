<div class="b-total-basic">
	
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr('Kalkulacja')}}</h3>		
		<b-table v-if="T !== null && (typeof T === 'object' && typeof T.length === 'number') ? T : false" stacked  :items="T"></b-table>

		<div v-if="T === null" >
			<b-alert dismissible 
             :show="true"
             v-on:dismissed="showDismissibleAlert=false"
             >{{ $root.__tr( 'To recieve calculation data use form and click calculate' ) }}</b-alert>
		</div>

	</div>

</div>