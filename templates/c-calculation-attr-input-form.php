<div class="c-calculation-product-selector" v-if="typeof $store.getters.ui.inputForm === 'function'">




<keep-alive>
	<component :is="$store.getters.ui.inputForm"></component>		
</keep-alive>
	

</div>