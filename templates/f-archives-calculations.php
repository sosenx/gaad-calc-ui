<div class="f-archives-calculations" >



<!--
Go trough made calculations and instantiatie a component for each of
-->
	<div v-if="calculations" v-for="calculation in calculations">		
		<e-total-calculation :calculation="calculation"></e-total-calculation>
	</div>

</div>