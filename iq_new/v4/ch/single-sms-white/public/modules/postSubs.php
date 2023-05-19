<?php

$partnerKey = 'MNL7iMYt6t';

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
$subs = json_decode($input[0], TRUE);

$cipher = "aes-256-cbc";

$sub1 = isEmptyTrackerSub(urlencode($subs['sub1'])); //добавилось для трекеров
$sub2 = urlencode($subs['sub2']);
$sub3 = urlencode($subs['sub3']);
$sub4 = urlencode($subs['sub4']);
$sub5 = urlencode($subs['sub5']);

$url = "https://viptraffic.net/go?id=14589&hash=Or5gMS2e6z&sub1=$sub1&sub2=$sub2&sub3=$sub3&sub4=$sub4&sub5=$sub5";
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($curl);

curl_close($curl);

$location = json_decode($result);
$secret = $key . $partnerKey;

echo json_encode(array('click_id' => $location->click_id));

/*
 *
 * функция для поиска и подстановки данных трекеров из cookie
 *
*/
//добавилось для трекеров
function isEmptyTrackerSub($sub)
{
    $newSub = '';
    if (!empty($sub)) {
        $newSub = $sub;
    } else if (!empty($_COOKIE['_subid'])) {
        $newSub = $_COOKIE['_subid'];
    }

    return $newSub;
}
//добавилось для трекеров