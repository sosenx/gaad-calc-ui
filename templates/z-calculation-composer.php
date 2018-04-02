<div class="z-calculation-composer">
	

<b-button size="lg" variant="primary" v-on:click="request_calculation" :disabled="!valid" >

	<span v-if="bussy">
		<icon name="spinner" spin ></icon>
		<span class="label">{{ $root.__tr( 'Calculating' ) }}</span>
	</span>
	<span v-else>
		<icon name="calculator"></icon>
		<span class="label">{{ $root.__tr( 'Calculate' ) }}</span>
	</span>

</b-button>



{{ errors_raport }}
<hr>
{{ request_attributes }}

</div>