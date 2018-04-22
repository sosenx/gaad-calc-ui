<div class="e-archives-actions">
		
	<div class="gcalc_fgroup">
		<h3 class="gcalc_fgroup__label">{{ $root.__tr( 'Operacje' ) }}:</h3>
	

	</div>




	<ul v-if=" typeof success_data.pdf !== 'undefined'">
			
			<li>
				<a :href="success_data.pdf.account.url" :download="get_basename( success_data.pdf.account.url )" >
					<icon name="file-pdf-o"></icon>
					<span class="label">{{ $root.__tr( 'Download calculation raport (Account)' ) }}</span>
				</a>	
			</li>	


			<li>
				<a :href="success_data.pdf.contractor.url" :download="get_basename( success_data.pdf.contractor.url )" >
					<icon name="file-pdf-o"></icon>
					<span class="label">{{ $root.__tr( 'Download calculation raport (Contractor)' ) }}</span>
				</a>	
			</li>

			<li>
				<a>
					<icon name="envelope-o"></icon>
					<span class="label">{{ $root.__tr( 'Send calculation raport to contractor' ) }}</span>
				</a>	
			</li>	

	</ul>

</div>