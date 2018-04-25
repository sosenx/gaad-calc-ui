<div class="z-acalculation-composer">
	
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr( 'Contractor/calculation records data' ) }}</h3>


			<b-container fluid>
				<b-row>
									    	
				    <b-col>
						<label for="c-slug">{{ $root.__tr('Easy to remember label') }}</label>
						<b-form-input 
								v-on:change="is_valid"
								id="c-slug"
								v-model="arch_data['c-slug']"
			                  	type="text"></b-form-input>	
				    </b-col>

					<b-col>
						<label for="contractor-nip">{{ $root.__tr('Contractor NIP') }}</label>
					<b-form-input 
							v-on:change="is_valid"
							id="contractor-nip"
							v-model="arch_data['contractor-nip']"
		                  	type="text"
		                  	:placeholder="$root.__tr('Enter contractor NIP number')"></b-form-input>  
				    </b-col>

				</b-row>

				<b-row>
									    	
				    <b-col>
						 <label for="contractor-email">{{ $root.__tr('Contractor e-mail adress') }}</label>
					<b-form-input 
							v-on:change="is_valid"
							id="contractor-email"
							v-model="arch_data['contractor-email']"
		                  	type="email"
		                  	:placeholder="$root.__tr('Enter contractor e-mail adress')"></b-form-input>       
				    </b-col>

					<b-col>
						 <label for="archive-notes">{{ $root.__tr('Archive related comments for quick search') }}</label>
						<b-form-input
							v-on:change="is_valid"
							id="archive-notes"
							v-model.trim="arch_data['archive-notes']"                  	
		                  	:placeholder="$root.__tr('Place order related keywords here')"></b-form-input>       	
				    </b-col>

				</b-row>
			</b-container>


		
	</div>




</div>