<div class="b-fgroup-infobox">
	

<h1>b-fgroup-infobox: {{name}}</h1>



<ul >
	<li v-for="error in db.error"><a-infobox-item type="error" :msg="error.msg"></a-infobox-item></li>
	<li v-for="error in db.warning"><a-infobox-item type="warning" :msg="error.msg"></a-infobox-item></li>
	<li v-for="error in db.info"><a-infobox-item type="info" :msg="error.msg"></a-infobox-item></li>
</ul>



</div>