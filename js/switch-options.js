let advan1 = `<div class="choose_box">
<i><img src="images/quality-check-icon.png" alt="#"/></i>
<h3></h3>
<br />
<br />
<br />
<p>High-resolution designs allow for a variety of usages, ranging from websites, flyers, brochures, to business cards.</p>
<br />
<br />
<br />
</div>`;

let advan2 = `<div class="choose_box">
<i><img src="images/creative_icon.png" alt="#"/></i>
<h3></h3>
<br />
<br />
<br />
<p>Cathering specifically to your business. Memorable logos help clients remember you.</p>
<br />
<br />
<br />
<br />
</div>`;

let advan3 = `<div class="choose_box">
<i><img src="images/speed_round_icon.png" alt="#"/></i>
<h3></h3>
<br />
<br />
<br />
<p>Get your custom design in a week with minimum hassle.</p>
<br />
<br />
<br />
<br />
</div>`;

let advan4 = `<div class="choose_box">
<i><img src="images/simplicity.png" alt="#"/></i>
<h3></h3>
<br />
<br />
<br />
<p>Strips away unnecessary embellishments and colors to create a mark that is just as impactful as an intricate design</p>
<br />
<br />
<br />
</div>`;

document.getElementById('advan-points').innerHTML = advan1;

document.getElementById('advan1').addEventListener('click', function(){
    document.getElementById('advan-points').innerHTML = advan1;
});

document.getElementById('advan2').addEventListener('click', function(){
    document.getElementById('advan-points').innerHTML = advan2;
});

document.getElementById('advan3').addEventListener('click', function(){
    document.getElementById('advan-points').innerHTML = advan3;
});

document.getElementById('advan4').addEventListener('click', function(){
    document.getElementById('advan-points').innerHTML = advan4;
});