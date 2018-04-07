<div class="x-markups-input-form">



<div class="gcalc_fgroup">
	<h3 class="gcalc_fgroup__label">{{$root.__tr('Markups settings')}}</h3>

<ul>
	<li v-for="( markup_part, key ) in markups_changes" v-if="markup_part.enabled">
		<label :for="key">{{ $root.__tr( typeof markup_part.label === 'string' ? markup_part.label : key ) }}</label>
		<b-form-input 
			:id			="'markup-input-' + key"				
			v-on:change	="markups_changed" 
			v-model		="markups_[key]"
		    :type		="markup_part.field_type"
		></b-form-input>
		<label :for="key" class="unit">%</label>
	</li>
</ul>	

       </div>


</div>