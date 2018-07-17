<?php
$resultArray=array();
$data = isset($_REQUEST['searchData'])?$_REQUEST['searchData']:"";
$str = file_get_contents('collegedata.json');
$json = json_decode($str, true);
foreach ($json as $field => $value) {
    if (strpos(strtolower($value['name']), strtolower($data)) !== false) {
        array_push($resultArray,$value);
    }
}
echo json_encode($resultArray, JSON_PRETTY_PRINT);;
?>