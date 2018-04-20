<div class="z-acalculation-composer">
	
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr('Save calculation')}}</h3>

		<div class="gcalc_fgroup__span gcalc_fgroup__span--two_one">
			


 			<label for="c-slug">{{ $root.__tr('Easy to remember label') }}</label>
			<b-form-input 
					v-on:change="is_valid"
					id="c-slug"
					v-model="arch_data['c-slug']"
                  	type="text"></b-form-input>

           <label for="contractor-nip">{{ $root.__tr('Contractor NIP') }}</label>
			<b-form-input 
					v-on:change="is_valid"
					id="contractor-nip"
					v-model="arch_data['contractor-nip']"
                  	type="text"
                  	:placeholder="$root.__tr('Enter contractor NIP number')"></b-form-input>      

           <label for="contractor-email">{{ $root.__tr('Contractor e-mail adress') }}</label>
			<b-form-input 
					v-on:change="is_valid"
					id="contractor-email"
					v-model="arch_data['contractor-email']"
                  	type="email"
                  	:placeholder="$root.__tr('Enter contractor e-mail adress')"></b-form-input>       


           <label for="archive-notes">{{ $root.__tr('Archive related comments for quick search') }}</label>
				<b-form-textarea
					v-on:change="is_valid"
					id="archive-notes"
					v-model.trim="arch_data['archive-notes']"
                  	type="email"
                  	rows="3"
                  	:placeholder="$root.__tr('Place order related keywords here')"></b-form-textarea>       	
	<!--	

 <label for="shipment-date">{{ $root.__tr('Shipment date (requested, not guaranteed)') }}</label>
			<b-form-input 
					v-on:change="is_valid"
					id="shipment-date"
					v-model="arch_data['shipment-date']"
                  	type="date"></b-form-input>

<label for="shipment-country">{{ $root.__tr('Shipment date (requested, not guaranteed)') }}</label>
<b-form-select 
			id="shipment-country"
			v-model="arch_data['shipment-country']">
      <option value="poland-pl" active>{{ $root.__tr('Poland PL') }}</option>
      <option value="germany-de">{{ $root.__tr('Germany DE') }}</option>
      <option value="belgium-de">{{ $root.__tr('Belgium BE') }}</option>
      <option value="france-fr">{{ $root.__tr('France FR') }}</option>
      
      
    </b-form-select>
    
    <b-button id="acomposer-calculate" size="md" variant="primary" v-on:click="request_acalculation" :disabled="!is_validated" >

		<span v-if="bussy">
			<icon name="spinner" spin ></icon>
			<span class="label">{{ $root.__tr( 'Saving' ) }}</span>
		</span>
		<span v-else>
			<icon name="floppy-o"></icon>
			<span class="label">{{ $root.__tr( 'Save' ) }}</span>
		</span>

	</b-button>
			-->
		</div>
	</div>




</div>