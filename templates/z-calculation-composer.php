<div class="z-calculation-composer">

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