<div class="c-input-form-book c-input-form-default">
	
	
	

<!--BASICS-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Basics')}}</h3>
	
	<div class="gcalc_fgroup__span gcalc_fgroup__span">		
		<b-input-attr-form-field :name="'quantity'" :ref="'quantity'"		:label="$root.__tr('Quantity')" infobox="basics"></b-input-attr-form-field>	
		<b-input-attr-form-field :name="'orientation'"	:label="$root.__tr('Orientation')" 	 infobox="basics"></b-input-attr-form-field>
	</div>
	<b-input-attr-form-field :name="'format'"		:label="$root.__tr('Format')"  infobox="basics"></b-input-attr-form-field>	

</div>
<b-fgroup-infobox name="basics" :not="$store.getters.notifications"></b-fgroup-infobox>


<!--INFO-->	
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Book info')}}</h3>

	<div class="gcalc_fgroup__span gcalc_fgroup__span--two_one">
		<b-input-attr-form-field :name="'title'"	:label="$root.__tr('Book title')"  infobox="book_info"></b-input-attr-form-field>
		<b-input-attr-form-field :name="'book_number'"	:label="$root.__tr('Book number')"  infobox="book_info"></b-input-attr-form-field>
		
	</div>
		<b-input-attr-form-field :name="'comments'"	:label="$root.__tr('Add. comments')"  infobox="book_info"></b-input-attr-form-field>
</div>
<b-fgroup-infobox name="book_info" :not="$store.getters.notifications"></b-fgroup-infobox>



<!--COVER-->
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Cover')}}</h3>

	<b-input-attr-form-field :name="'cover_type'"	:label="$root.__tr('Cover type')"  infobox="cover"></b-input-attr-form-field>
			

		<!--HARD COVER-->
		<b-input-attr-form-field :name="'cover_board_thickness'"	:label="$root.__tr('Board thickness')" v-if="pa_cover_type === 'hard'"  infobox="basics"></b-input-attr-form-field>
			
			<!--Cloth covering-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Cloth covering')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_cloth_covering_paper'"	:label="$root.__tr('Paper')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_cloth_covering_print'"	:label="$root.__tr('Print')"  infobox="cover"></b-input-attr-form-field>
				</div>
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_cloth_covering_finish'"	:label="$root.__tr('Finish')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_cloth_covering_spot_uv'"	:label="$root.__tr('Spot UV')"  infobox="cover"></b-input-attr-form-field>
				</div>

			</div><!--/Cloth covering-->


			<!--Endpaper-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Endpaper')}}</p>			
				
				<div class="gcalc_fgroup__span">					
					<b-input-attr-form-field :name="'cover_endpaper_paper'"	:label="$root.__tr('Paper')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_endpaper_print'"	:label="$root.__tr('Print')"  infobox="cover"></b-input-attr-form-field>
				</div>
				
				

			</div><!--/Endpaper-->


			<!--Dust jacket-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Dust jacket')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_dust_jacket_paper'"	:label="$root.__tr('Paper')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_dust_jacket_print'"	:label="$root.__tr('Print')"  infobox="cover"></b-input-attr-form-field>
				</div>
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_dust_jacket_finish'"	:label="$root.__tr('Finish')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_dust_jacket_spot_uv'"	:label="$root.__tr('Spot UV')"  infobox="cover"></b-input-attr-form-field>
				</div>

			</div><!--/Dust jacket-->


			<!--Ribbon-->
			<div class="gcalc_fgroup" v-if="pa_cover_type === 'hard'">
				<p class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Ribbon')}}</p>			
				
				<div class="gcalc_fgroup__span">
					
					<b-input-attr-form-field :name="'cover_ribbon'"	:label="$root.__tr('Ribbon color')"  infobox="cover"></b-input-attr-form-field>
					<b-input-attr-form-field :name="'cover_ribbon_width'"	:label="$root.__tr('Width')"  infobox="cover"></b-input-attr-form-field>
					
				</div>
				
				

			</div><!--/Ribbon-->
			<!--/HARD COVER-->



		<!--/OTHER COVER TYPES-->
		<div v-if="pa_cover_type !== 'hard'">
			<div class="gcalc_fgroup__span">
				<b-input-attr-form-field :name="'cover_paper'"	:label="$root.__tr('Paper')"  infobox="cover"></b-input-attr-form-field>
				<b-input-attr-form-field :name="'cover_print'"	:label="$root.__tr('Print')"  infobox="cover"></b-input-attr-form-field>
			</div>

			<div class="gcalc_fgroup__span">
				<b-input-attr-form-field :name="'cover_finish'"	:label="$root.__tr('Finish')"  infobox="cover"></b-input-attr-form-field>
				<b-input-attr-form-field :name="'cover_spot_uv'"	:label="$root.__tr('Spot UV')"  infobox="cover"></b-input-attr-form-field>
			</div>

		</div>

		<!-- perfect_binding, section_sewn, spiral_binding -->

			<div if="pa_cover_type === 'perfect_binding' || pa_cover_type === 'section_sewn' || pa_cover_type === 'spiral_binding'  ">
				
				<!--Ribbon-->
				<div class="gcalc_fgroup" v-if="pa_cover_type === 'perfect_binding' || pa_cover_type === 'section_sewn' || pa_cover_type === 'spiral_binding'">
					<p class="gcalc_fgroup__label gcalc_fgroup__label--inner">{{$root.__tr('Flaps')}}</p>			
					
					<div class="gcalc_fgroup__span">
						
						<b-input-attr-form-field :name="'cover_flaps'"	:label="$root.__tr('Cover flaps')"  infobox="cover"></b-input-attr-form-field>
						
						<b-input-attr-form-field :name="'cover_left_flap_width'" :ref="'cover_left_flap_width'"	:label="$root.__tr('Left flap')" 	:sufix="$root.__tr('mm')" infobox="cover"></b-input-attr-form-field>
						<b-input-attr-form-field :name="'cover_right_flap_width'" :ref="'cover_right_flap_width'"	:label="$root.__tr('Right flap')" 	:sufix="$root.__tr('mm')" infobox="cover"></b-input-attr-form-field>
						

					</div>
					
					

				</div><!--/Ribbon-->


			</div>
<!-- / perfect_binding, section_sewn, spiral_binding -->


</div><!--/COVER-->
<b-fgroup-infobox name="cover" :not="$store.getters.notifications"></b-fgroup-infobox>


<!--BLOCK PAGES-->
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label ">{{$root.__tr('Book blocks')}}</h3>
		<div class="gcalc_fgroup__span">
			<b-input-attr-form-field :name="'color_pages'" :ref="'color_pages'"	:label="$root.__tr('Color pages number')" :sufix="$root.__tr('pages')"  infobox="book_blocks"></b-input-attr-form-field>	
			<b-input-attr-form-field :name="'bw_pages'" :ref="'bw_pages'"		:label="$root.__tr('B&W pages number')" :sufix="$root.__tr('pages')" infobox="book_blocks"></b-input-attr-form-field>	
			<b-input-attr-form-field :name="'color_stack'"	:label="$root.__tr('Color pages in single block')"  infobox="book_blocks"></b-input-attr-form-field>
		</div>

		
						
			<b-input-attr-form-field v-if="pa_color_stack === 'false'" :name="'color_pages_numbers'"	:label="$root.__tr('Color pages numbers')"  infobox="book_blocks"></b-input-attr-form-field>	
				
	</div><!--/BLOCK PAGES-->
	<b-fgroup-infobox name="book_blocks" :not="$store.getters.notifications"></b-fgroup-infobox>

<!--BLOCK COLOR-->
<div class="gcalc_fgroup" v-if="pa_color_pages > 2">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Color block')}}</h3>
	<div class="gcalc_fgroup__span">
		<b-input-attr-form-field :name="'color_paper'"	:label="$root.__tr('Paper')"  infobox="book_block_color"></b-input-attr-form-field>
		<b-input-attr-form-field :name="'color_print'"	:label="$root.__tr('Print')"  infobox="book_block_color"></b-input-attr-form-field>
	</div>
</div>
<b-fgroup-infobox name="book_block_color" :not="$store.getters.notifications"></b-fgroup-infobox>


<!--BLOCK BW-->
<div class="gcalc_fgroup" v-if="pa_bw_pages > 2">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('B&W block')}}</h3>
	<div class="gcalc_fgroup__span">
		<b-input-attr-form-field :name="'bw_paper'"		:label="$root.__tr('Paper')"  infobox="book_block_bw"></b-input-attr-form-field>
		<b-input-attr-form-field :name="'bw_print'"		:label="$root.__tr('Print')"  infobox="book_block_bw"></b-input-attr-form-field>
	</div>
</div>
<b-fgroup-infobox name="book_block_bw" :not="$store.getters.notifications"></b-fgroup-infobox>


<!--HOLES-->	
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Drilling holes')}}</h3>

	<div class="gcalc_fgroup__span gcalc_fgroup__span--trio">
		<b-input-attr-form-field :name="'drilling_holes'"	:label="$root.__tr('Number of holes')"  infobox="other"></b-input-attr-form-field>	
		<b-input-attr-form-field :name="'holes_dia'"	:label="$root.__tr('Diameter')"  infobox="other"></b-input-attr-form-field>	
		<b-input-attr-form-field :name="'holes_pos'"	:label="$root.__tr('Position')"  infobox="other"></b-input-attr-form-field>	
	</div>


</div>


<!--PACKING-->	
<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Packing')}}</h3>

	<div class="gcalc_fgroup__span gcalc_fgroup__span">
		<b-input-attr-form-field :name="'groupwrap'"	:label="$root.__tr('Foil wrap pieces')"  infobox="other"></b-input-attr-form-field>
		<b-input-attr-form-field :name="'pieces_per_carton'"	:label="$root.__tr('Pieces per carton')"  infobox="other"></b-input-attr-form-field>	
	</div>


</div>

<b-fgroup-infobox name="other" :not="$store.getters.notifications"></b-fgroup-infobox>




</div>