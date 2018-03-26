<div class="c-input-form-book">
	
	
<b-input-attr-form-field :name="'quantity'"		:label="$root.__tr('Quantity')" ></b-input-attr-form-field>	
<b-input-attr-form-field :name="'format'"		:label="$root.__tr('Format')" ></b-input-attr-form-field>	


<hr>
{{pa_cover_type}}
	<b-input-attr-form-field :name="'cover_type'"	:label="$root.__tr('Cover type')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'cover_paper'"	:label="$root.__tr('Cover paper')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'cover_print'"	:label="$root.__tr('Cover print')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'cover_finish'"	:label="$root.__tr('Cover finish')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'cover_spot_uv'"	:label="$root.__tr('Cover spot uv')" ></b-input-attr-form-field>


<hr>

	<b-input-attr-form-field :name="'color_pages'"	:label="$root.__tr('Color pages number')" ></b-input-attr-form-field>	
	<b-input-attr-form-field :name="'color_paper'"	:label="$root.__tr('Color paper')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'color_print'"	:label="$root.__tr('Color print')" ></b-input-attr-form-field>

<hr>

	<b-input-attr-form-field :name="'bw_pages'"		:label="$root.__tr('B&W pages number')" ></b-input-attr-form-field>	
	<b-input-attr-form-field :name="'bw_paper'"		:label="$root.__tr('B&W paper')" ></b-input-attr-form-field>
	<b-input-attr-form-field :name="'bw_print'"		:label="$root.__tr('B&W print')" ></b-input-attr-form-field>



</div>