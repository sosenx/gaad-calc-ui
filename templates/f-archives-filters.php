<div class="f-archives-filters">
	

	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{ $root.__tr('Filters') }}</h3>


		<b-container fluid>
			<b-row>
								    	
			   <b-col class="filter-cols">
					<label for="contractor-email">{{ $root.__tr('Contractor e-mail adress') }}</label>
					<b-form-input class="filter-input"
							id="contractor-email"
							v-model="filter['email']"
		                  	type="email"
		                  	:placeholder="$root.__tr('Enter contractor e-mail adress')"></b-form-input>       
				</b-col>
				
				<b-col class="filter-cols">				
					<label for="contractor-nip">{{ $root.__tr('Contractor NIP') }}</label>
					<b-form-input class="filter-input"
						id="contractor-nip"
						v-model="filter['contractor-nip']"
	                  	type="text"
	                  	:placeholder="$root.__tr('Enter contractor NIP number')"></b-form-input>  
			    </b-col>

			</b-row>
		</b-container>

	</div>
</div>