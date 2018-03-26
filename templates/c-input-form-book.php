<div class="c-input-form-book c-input-form-default">
	
	

<!--BASICS-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Basics')}}</h3>

	<b-input-attr-form-field :name="'quantity'"		:label="$root.__tr('Quantity')" ></b-input-attr-form-field>	
	<b-input-attr-form-field :name="'format'"		:label="$root.__tr('Format')" ></b-input-attr-form-field>	

	<!--SUB BLOCK PAGES-->
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Book blocks')}}</h3>
		<div class="gcalc_fgroup__span">
			<b-input-attr-form-field :name="'color_pages'"	:label="$root.__tr('Color pages number')" :sufix="$root.__tr('pages')" ></b-input-attr-form-field>	
			<b-input-attr-form-field :name="'bw_pages'"		:label="$root.__tr('B&W pages number')" :sufix="$root.__tr('pages')"></b-input-attr-form-field>	
		</div>

		<div class="gcalc_fgroup__span">
			<b-input-attr-form-field :name="'color_stack'"	:label="$root.__tr('Color pages in single block')" ></b-input-attr-form-field>
		</div>


		
	</div>
</div>




<!--COVER-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Cover')}}</h3>

	<b-input-attr-form-field :name="'cover_type'"	:label="$root.__tr('Cover type')" ></b-input-attr-form-field>
			

		<!--HARD COVER-->
		<b-input-attr-form-field :name="'cover_board_thickness'"	:label="$root.__tr('Board thickness')" v-if="pa_cover_type === 'hard'" ></b-input-attr-form-field>
		
			<!--Cloth covering-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label">{{$root.__tr('Cloth covering')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_cloth_covering_paper'"	:label="$root.__tr('Paper')" ></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_cloth_covering_print'"	:label="$root.__tr('Print')" ></b-input-attr-form-field>
				</div>
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_cloth_covering_finish'"	:label="$root.__tr('Finish')" ></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_cloth_covering_spot_uv'"	:label="$root.__tr('Spot uv')" ></b-input-attr-form-field>
				</div>

			</div><!--/Cloth covering-->


			<!--Dust jacket-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label">{{$root.__tr('Dust jacket')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_dust_jacket_paper'"	:label="$root.__tr('Paper')" ></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_dust_jacket_print'"	:label="$root.__tr('Print')" ></b-input-attr-form-field>
				</div>
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_dust_jacket_finish'"	:label="$root.__tr('Finish')" ></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_dust_jacket_spot_uv'"	:label="$root.__tr('Spot uv')" ></b-input-attr-form-field>
				</div>

			</div><!--/Dust jacket-->


			<!--Others-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label">{{$root.__tr('Others')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_ribbon'"	:label="$root.__tr('Ribbon')" ></b-input-attr-form-field>
					
				</div>
				
				

			</div><!--/Others-->




			<!--/HARD COVER-->


		<!--/OTHER COVER TYPES-->
		<div v-else>
			
			<b-input-attr-form-field :name="'cover_paper'"	:label="$root.__tr('Cover paper')" ></b-input-attr-form-field>
			<b-input-attr-form-field :name="'cover_print'"	:label="$root.__tr('Cover print')" ></b-input-attr-form-field>
			<b-input-attr-form-field :name="'cover_finish'"	:label="$root.__tr('Cover finish')" ></b-input-attr-form-field>
			<b-input-attr-form-field :name="'cover_spot_uv'"	:label="$root.__tr('Cover spot uv')" ></b-input-attr-form-field>

		</div>


</div>


<!--BLOCK COLOR-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Color block')}}</h3>

	<b-input-attr-form-field :name="'color_paper'"	:label="$root.__tr('Color paper')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'color_print'"	:label="$root.__tr('Color print')" ></b-input-attr-form-field>
</div>


<!--BLOCK BW-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('B&W block')}}</h3>
	<b-input-attr-form-field :name="'bw_paper'"		:label="$root.__tr('B&W paper')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'bw_print'"		:label="$root.__tr('B&W print')" ></b-input-attr-form-field>
</div>


<!--ADDONS-->	
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Other options')}}</h3>
</div>






</div>