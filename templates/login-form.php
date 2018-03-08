<?php 
	namespace gcalcui;
	$form_uri = \gcalcui\actions::get_uri();
?>

<div class="login-form" action="<?php echo $form_uri; ?>">
	
	  <input 	v-model="l"
	  			class="login__input" type="text" />
	  
	  <input 	v-model="p"
	  			class="login__input login__input--password" type="password"/>
	  
	  
	  
	  <button 	v-show="checkForm()" 
	  			class="login__button" type="submit" @click="submit( $event )" >Submit</button>
	</form>

	
</div>