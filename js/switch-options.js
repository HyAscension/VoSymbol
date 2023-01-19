let advan1 = `<div class="choose_box">
<i><img src="images/quality-check-icon.png" alt="#"/></i>
<h3></h3>
<p>High-resolution designs allow for a variety of usages, ranging from websites, flyers, brochures, to business cards.</p>
</div>`;

let advan2 = `<div class="choose_box">
<i><img src="images/creative_icon.png" alt="#"/></i>
<h3></h3>
<p>Cathering specifically to your business. Memorable logos help clients remember you.</p>
</div>`;

let advan3 = `<div class="choose_box">
<i><img src="images/speed_round_icon.png" alt="#"/></i>
<h3></h3>
<p>Get your custom design in a week with minimum hassle.</p>
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