<div class="k-pdf-created-notifications">
	


<div v-for="( i, key ) in raport" v-if="raport !== false">
	
	<b-alert show variant="success" >

		<span>{{ i.label }}</span>

		<h4>{{ $root.__tr( 'Options' ) }}:</h4>	

		<ul>
			<li v-for="(action, key) in i.actions" v-if="i.actions">
				<a :href="i.url" v-on:click="action.fn( $event )" >
					<icon :name="action.icon"></icon>
					<span class="label">{{ action.label }}</span>
				</a>
			</li>	

			<li>
				<a :href="i.url" :download="get_basename( i.url )" >
					<icon name="file-pdf-o"></icon>
					<span class="label">{{ $root.__tr( 'Download' ) }}</span>
				</a>	
			</li>		
		</ul>


	</b-alert>
</div>

</div>