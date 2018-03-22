<div class="c-calculation" >



<b-card no-body>
  <b-tabs card>
    <b-tab title="Kalkulacja" active>


		<b-container class="bv-example-row">
		    <b-row>
		    	<!-- first col -->
		        <b-col>
		        	
		        		<c-calculation-product-selector></c-calculation-product-selector>
						<c-calculation-attr-input-form ref="calculation-attr-input-form"></c-calculation-attr-input-form>


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
      <f-total-production-processes ref="total-production-processes" :calculation_id="$store.getters.current_calculation_id"></f-total-production-processes>

    </b-tab>

    <b-tab title="Kalkulacje">
      <f-archives-calculations ref="archives-calculations" :calculation_id="$store.getters.current_calculation_id" ></f-archives-calculations>
    </b-tab>


  </b-tabs>
</b-card>



</div>