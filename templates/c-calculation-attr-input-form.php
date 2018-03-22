<div class="c-calculation-product-selector" v-if="typeof $store.getters.ui.inputForm === 'function'">


<b-card no-body>
  <b-tabs card>
    <b-tab title="Kalkulacja" active>


		<b-container class="bv-example-row">
		    <b-row>
		    	<!-- first col -->
		        <b-col>
		        	<!-- Attributes input form -->
			      	<keep-alive>
						<component :is="$store.getters.ui.inputForm"></component>		
					</keep-alive>


						<b-button size="lg" variant="primary" v-on:click="calc" >Calc</b-button>

		        </b-col>

		        <!-- Sec col -->
		        <b-col>
		        	<!--
					Basic short calculation summary
		        	-->
		        	<c-total-basic :calculation_id="$store.getters.current_calculation_id"></c-total-basic>
		        </b-col>		        

		    </b-row>
		</b-container>

    </b-tab>

    <b-tab title="Szczegóły">
      c-total-basic
    </b-tab>


  </b-tabs>
</b-card>


	

</div>