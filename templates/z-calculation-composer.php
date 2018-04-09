<div class="z-calculation-composer">

<div class="name-holder">
	<b-form-input
		class="calculation-name" 
		v-model="calculation_save_name"
		type="text"
		:placeholder="$root.__tr( 'Calculation name' )"
	  ></b-form-input>

	<b-button 
			id="composer-save" 
			size="md" 
			variant="secoundary" 
			v-on:click="save_calculation" 
			:disabled="$store.getters.current_calculation === null && calculation_save_name.length > 5" 
			>
		<icon name="floppy-o"></icon>
		<!--<span class="label">{{ $root.__tr( 'Save calculation' ) }}</span>-->
	</b-button>

</div>
		<b-button id="composer-calculate" size="md" variant="primary" v-on:click="request_calculation" :disabled="!valid" >

		<span v-if="bussy">
			<icon name="spinner" spin ></icon>
			<span class="label">{{ $root.__tr( 'Calculating' ) }}</span>
		</span>
		<span v-else>
			<icon name="calculator"></icon>
			<span class="label">{{ $root.__tr( 'Calculate' ) }}</span>
		</span>

	</b-button>

	<b-tooltip target="composer-calculate" placement="bottom">{{ tooltip_title }}</b-tooltip>


</div>