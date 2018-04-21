<div class="g-archives-view">
	


	<b-container fluid>
		<b-row>
							    	
			<b-col>
				<f-archives-actions-aplet></f-archives-actions-aplet>
				<f-archives-filters></f-archives-filters>
			</b-col>

			<b-col>
				<f-archives-pagination></f-archives-pagination>
			</b-col>

		</b-row>


		<b-row>
							    	
			<b-col>
				<b-table :items="items_" :fields="fields">
					   
					   


	<template slot="show_details" slot-scope="row">
      <!-- we use @click.stop here to prevent emitting of a 'row-clicked' event  -->
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
      <!-- In some circumstances you may need to use @click.native.stop instead -->
      <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
      <b-form-checkbox @click.native.stop @change="row.toggleDetails" v-model="row.detailsShowing">
        Details via check
      </b-form-checkbox>
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
          <b-col>{{ row.item.age }}</b-col>
        </b-row>
        Form
           

        <b-row class="mb-2">
          <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
          <b-col>{{ row.item.isActive }}</b-col>
        </b-row>
        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
      </b-card>
    </template>






										


				</b-table>
				
			</b-col>

		</b-row>

	</b-container>





	
</div>
