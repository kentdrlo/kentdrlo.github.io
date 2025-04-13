<?php

$page = "shoes";

if (isset($_GET['page'])) {
    $page = $_GET['page'];
    switch ($page) {
        case "shoes":
            $page = "shoes";
            break;
        case "models":
            $page = "models";
            break;
        case "products":
            $page = "products";
            break;
        default:
            header("Location: index.php");
            break;
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nike Products</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous" />
    <link rel="icon" type="image/png" href="images/nike.png">

    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <style>

    </style>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="">
                <img class="logo" src="images/nike.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active home" aria-current="page" href="index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link style" href="?page=shoes">Shoes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link product" href="?page=models">Model</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contact" href="?page=products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contact" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col nikeCollection">
                NIKE COLLECTION
            </div>
        </div>
        <div class="row">
            <div class="col justDoIt">
                JUST DO IT.
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12" style="margin-bottom: 17px;">
                <div class="card shadow rounded-5 p-3" style="height: 95vh; max-height: 100vh; overflow-y: scroll;">
                    <div class="titleCollection mb-3 mt-1">
                        SELECTIONS
                    </div>
                    <a href="?page=shoes" class=" my-2">
                        <img src="images/shoeImg1.jpg" class="shoes" width="100%">
                    </a>
                    <a href="?page=models" class=" my-2">
                        <img src="images/modelImg1.jpg" class="models" width="100%">
                    </a>
                    <a href="?page=products" class="my-2">
                        <img src="images/itemImg1.jpg" class="items" width="100%">
                    </a>

                </div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div class="card shadow rounded-5 p-4 mb-3"
                    style="height: 95vh; max-height: 100vh; overflow-y: scroll;">
                    <div class="titleNike" style="margin-top: -10px">
                        nike. swoosh.<div class="orig"> orig. </div>
                    </div>

                    <?php include("shared/" . $page . ".php"); ?>
                </div>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
        crossorigin="anonymous"></script>
</body>

</html>