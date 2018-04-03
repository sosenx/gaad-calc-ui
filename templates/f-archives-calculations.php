<div class="f-archives-calculations" >


		<b-button 
			v-on:click="del_all( $event )">del all</b-button>

<!--
Go trough made calculations and instantiatie a component for each of
-->
	<div v-if="calculations" v-for="calculation in calculations">		
		<e-total-calculation :calculation="calculation"></e-total-calculation>
	</div>

</div>