<div class="c-calculation-product-selector" v-if="typeof $store.getters.ui.inputForm === 'function'">

	<!-- Attributes input form -->
	<keep-alive>
		<component :is="$store.getters.ui.inputForm" ref="product-input-form"></component>		
	</keep-alive>


	<!--
	<b-button size="lg" variant="primary" v-on:click="calc" >Calc</b-button>
-->

	

</div>