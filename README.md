# teknologiweb_2022
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panji Satria Taqwa Putra Purnama</title>
</head>
<style>
  .body {
    overflow-x: hidden;
  }
</style>
<style>
      #loading{
        width: 50px;
        height: 50px;
        border: solid 5px rgb(184, 87, 87);
        border-top-color: blue;
        border-radius: 100%;
        background-color: rgb(62, 14, 110);

        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        animation: rotate 90ms linear infinite;
      }

      @keyframes rotate{
        from{transform:rotate(0deg)}
        to{transform: rotate(950deg)}
      }
</style>
        <body>
<!--Header-->
<div class="cover" style="background-image: url(pexels-sagui-andrea-618833.jpg);">
    <div class="masking"></div>
    <small class="credit"><a href=""></a></small>
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-6 text-white">
          <center>
            <br><h1>Panji Satria Taqwa Putra Purnama</h1><br></center>
        <body>
          <!-- link -->
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Smooch&display=swap" rel="stylesheet">
       <style type="text/css">
          h2{
            font-family: 'Smooch', cursive;
            size: 18px;
            color: aliceblue;
          }
       </style>
       <Center>
          <h2>Nanti Kita Cerita<br>
            Tentang Hari Ini<br>
           </h2><br>
          <p>Cover: Photo by Sagui Andrea from Pexels</p>
          </Center>
       </body>
       </div>
    <!-- CSS -->
        <link rel="stylesheet" href="style.css">
    <!-- end -->
      <center>
        <div class="Jumbotron">
          <img src="WhatsApp Image 2022-03-28 at 21.02.23.jpeg" width="279px">
      </div>
      </center>
      </div>
      </div>   
      </div>
  <Center>
    <br><br><br>
    <h3>Tentang Saya</h3>
    Halo, saya  berasal dari Jombang, Jawa Timur, Indonesia.<br>
    Saya berkuliah di Universitas Ahmad Dahlan,Prodi
    Sistem Informasi untuk mengenal saya lebih dekat <br>
    <p>silahkan lihat profil instagram saya:</p>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
        </li>
          <img src="4.png" width="27px">
          <a href="https://instagram.com/pnjstr.id?utm_medium=copy_link" class="link-primary">pnjstr.id</a>
      </ul>
    </nav>
  </Center>
<!--end header-->
<!-- JQuery -->
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- end -->
  <!--Vue Js-->
   <script src="https://unpkg.com/vue@3"></script>
 <script src="main.js"></script> <!--kode ini harus berada dibawah library vue-->
<!--end-->
<!--animate-->
  <script>
  var loading = document.getElementById('loading');

  window.addEventListener('load', function(){
    loading.style.display="none";
  })
</script>
<!--end-->
</body>
</html>
