<div class="f-total-production-processes">
	
	<p>f-total-production-processes component</p>

<!--
Go trough production processes and instantiatie a component for each of
-->
	<div v-if="calculation && processes" v-for="process in processes">		
		<e-total-production-process :process="process"></e-total-production-process>
	</div>


</div>