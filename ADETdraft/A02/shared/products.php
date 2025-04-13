<style>
    .cardProducts {
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
$products = [
    ["images/itemImg2.jpg", "Cap", '"Stylish and breathable for all-day wear"'],
    ["images/itemImg3.jpg", "Water Bottle", '"Stay hydrated with Nike sleek bottle"'],
    ["images/itemImg4.jpg", "Sports Bag", '"Spacious and durable for everyday training"'],
    ["images/itemImg5.jpg", "Wristband", '"Sweat-absorbing and comfortable on the go"'],
    ["images/itemImg6.jpg", "Socks", '"Soft, cushioned, and made for performance"'],
    ["images/itemImg7.jpg", "Visor Cap", '"Protects from sun while keeping you cool"']
];
?>

<div class="modelCardsContainer">
    <?php foreach ($products as $product): ?>
        <div class="card my-3 cardProducts">
            <img src="<?php echo $product[0] ?>" width="100%">
            <div class="card-body">
                <h5 class="card-title"><?php echo $product[1] ?></h5>
                <p class="card-text"><?php echo $product[2] ?></p>
                <a href="#" class="btn btn-dark">SHOP NOW</a>
            </div>
        </div>
    <?php endforeach; ?>
</div>