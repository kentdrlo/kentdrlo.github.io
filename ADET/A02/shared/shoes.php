<style>
    .cardShoes {
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
$shoes = [
    ["images/shoeImg5.jpg", "Nike Zoom Vomero 5", '"Photon Dust Black"'],
    ["images/shoeImg2.jpg", "Nike Air Jordan 1 Low", '"Vintage Grey"'],
    ["images/shoeImg4.jpg", "Nike V2K Run", '"Pure Platinum Wolf Grey"'],
    ["images/shoeImg6.jpg", "Nike Air Zoom Alphafly", '"Prototype"'],
    ["images/shoeImg3.jpg", "Nike Initiatior", '"White Metallic"']
];
?>

<div class="shoeCardsContainer">
    <?php foreach ($shoes as $shoe) { ?>
        <div class="card my-2 cardShoes">
            <img src="<?php echo $shoe[0] ?>" width="100%">
            <div class="card-body">
                <h5 class="card-title"><?php echo $shoe[1] ?></h5>
                <p class="card-text"><?php echo $shoe[2] ?></p>
                <a href="#" class="btn btn-dark">SHOP NOW</a>
            </div>
        </div>
    <?php } ?>
</div>