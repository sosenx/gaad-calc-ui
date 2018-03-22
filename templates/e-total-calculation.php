<div class="e-total-calculation">
	
	
	<b-alert show>
{{ calculation_id }}
		
		
		<b-button 
			:variant="is_current() ? 'primary' : 'secoundary'"
			v-on:click="set_as_current( $event )">I am a Button</b-button>

	</b-alert>

</div>