<?php

$nyacak = array("Nama" => "Priskila",
                "Keterangan Lahir" => array("tgl" => "02",
                                     "bulan" => "November",
                                     "tahun" => "1997"),
                "Umur"  => "19 Tahun",
                "Agama" => "Islam",
                "Alamat" => "Jalan Borobudur Gang 4C No 2, Blimbing",
                "Cita-Cita" => "Nampaknya masih belum terlihat",
                );


header('Content-type: application/json;charset=utf-8');
echo utf8_encode(json_encode($nyacak));

?>