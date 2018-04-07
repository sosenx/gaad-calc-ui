<?php 
	namespace gcalcui;
	$form_uri = \gcalcui\actions::get_uri();
?>

			
 



<b-container fluid class="login-screen">
	<b-row v-if="error && !bussy">
    	<b-col cols="12"  >
    		<b-alert show variant="danger">{{ $root.__tr( 'Bad credentials, Try again!' ) }}</b-alert>
    	</b-col>
    </b-row>


	<b-row>
    	<b-col cols="12"  >

			<div class="login-form" action="<?php echo $form_uri; ?>">
				<div v-if="!bussy">
					<div class="line">
						
					  <icon name="user"></icon>
					  <b-form-input
					  			v-on:change="reset_errors"
								v-on:keyup="reset_errors"
					  			v-model="l"
					  			class="login__input"
					  			type="text" />
				  </div>

				  <div class="line">
					 <icon name="key"></icon>
					  <b-form-input
					  			v-on:change="reset_errors"
					  			 v-on:keyup="reset_errors"	
					  			v-model="p"
					  			class="login__input login__input--password"
					  			type="password"/>
						</div>
				  
				  <b-button 	v-show="checkForm()" class="login__button" type="submit" @click="submit( $event )" >{{ $root.__tr( 'Login' ) }}</b-button>
				</div>

				<div v-else class="bussy-screen">
					
					<icon name="cog" spin scale="2" ></icon>
				</div>	
			</div>

        </b-col>
      </b-row>
</b-container>



</div>