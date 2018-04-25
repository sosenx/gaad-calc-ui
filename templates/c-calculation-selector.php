<div class="c-calculation-selector" v-if="$parent.show_ui && options.length !== 0">
	

		<b-alert show variant="info">
			{{$root.__tr('Clipboard')}}
				<p>{{ $root.__tr('All calculations you make in current session are stored in a clipboard. Its a mid step to choose calculation best fit for client needs. ') }}
					<br>
				{{ $root.__tr( 'Most efficient way to use this tool is to make few calculation for single one clients title and save best fitted to archive. Repeat with all titles you need to make offer for.' ) }}
				<br>
				{{ $root.__tr('After saving system generates PDF/email raports. One for each: system admin, account manager, contractor. Automatic emails are sent also.') }}
				<br>
				<br>
				<strong>{{$root.__tr( 'Warning!' ) }}</strong><br>
					{{ $root.__tr('Contractor email need to be sent manually by account manager. Use option availble after save is done.') }}<br>
					{{ $root.__tr('Automatic contractor email sending can be set, but it is not recomended.') }}
				</p>

		</b-alert>

		<br>
		<label for="product-selector-select" >{{ $root.__tr( 'Select calculation' ) }}</label>	
		<b-form-select
			id="product-selector-select" 
			:options="options"
			v-model="calculation_id"
		 />

	

</div>
<div v-else-if="options.length === 0">
	

	<b-alert show variant="warning">{{ $root.__tr( 'Clipboard is empty. Make some calculations.' ) }}</b-alert>

</div>