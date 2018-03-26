<div class="c-input-form-book">
	
	

<!--BASICS-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Basics')}}</h3>

	<b-input-attr-form-field :name="'quantity'"		:label="$root.__tr('Quantity')" ></b-input-attr-form-field>	
	<b-input-attr-form-field :name="'format'"		:label="$root.__tr('Format')" ></b-input-attr-form-field>	

	
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{$root.__tr('Book blocks')}}</h3>

		<b-input-attr-form-field :name="'color_pages'"	:label="$root.__tr('Color pages number')" ></b-input-attr-form-field>	
		<b-input-attr-form-field :name="'bw_pages'"		:label="$root.__tr('B&W pages number')" ></b-input-attr-form-field>	

	</div>
</div>




<!--COVER-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Cover')}}</h3>

	<b-input-attr-form-field :name="'cover_type'"	:label="$root.__tr('Cover type')" ></b-input-attr-form-field>
		<!--HARD COVER-->
		<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
			<p class="gcalc_fgroup__label">{{$root.__tr('Hard Cover')}}</p>			
			
			<b-input-attr-form-field :name="'cover_board_thickness'"	:label="$root.__tr('Board thickness')" ></b-input-attr-form-field>
			

		</div><!--/HARD COVER-->
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