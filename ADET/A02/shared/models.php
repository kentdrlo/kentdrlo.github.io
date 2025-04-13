<style>
    .cardModels {
        border: none;
        border-radius: 40px;
    }

    img {
        border-radius: 40px;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 25px;
        font-weight: normal;
    }

    h5 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 30px;
        font-weight: bold;
        letter-spacing: 6px;
    }
</style>

<?php
$models = [
    ["images/modelImg4.jpg", "Nike X Supreme", '"Black Zip Up Jacket"'],
    ["images/modelImg2.jpg", "Move Like Never Before", '"Unleash your next level. Powered by Nike."'],
    ["images/modelImg3.jpg", "Built for the Bold", '"Layer up. Stand out. Nike x Supreme"'],
    ["images/modelImg5.jpg", "Purple Reign", '"Where streetwear meets statement. Calm fit, loud presence."'],
];
?>

<div class="modelCardsContainer">
    <?php foreach ($models as $model) { ?>
        <div class="card my-3 cardModels">
            <img src="<?php echo $model[0] ?>" width="100%" >
            <div class="card-body">
                <h5 class="card-title"><?php echo $model[1] ?></h5>
                <p class="card-text"><?php echo $model[2] ?></p>
                <a href="#" class="btn btn-dark">SHOP NOW</a>
            </div>
        </div>
    <?php } ?>
</div>