<div class="c-calculation-product-selector" v-if="typeof $store.getters.ui.inputForm === 'function'">


<br>
<b-alert show variant ="warning">Dokładne sprawdzanie poprawności wprowadzonych danych jest aktualnie wyłaczone. Pracujemy nad poprawa płynności jego działania.<br>Prosimy o większa uwage podaczas wypełniania pól.</b-alert>
<br>


	<!-- Attributes input form -->
	<keep-alive>
		<component :is="$store.getters.ui.inputForm" ref="product-input-form"></component>		
	</keep-alive>


	<!--
	<b-button size="lg" variant="primary" v-on:click="calc" >Calc</b-button>
-->

	

</div>