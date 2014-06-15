<?php

//Fetch JSON data by URL

$url = 'https://api.mintpal.com/v1/market/trades/MYR/BTC';

//0 is BUY
//1 is SELL

$json = file_get_contents($url);
$data = json_decode($json, true);

//var_dump($data);

if (!empty($data)) {
	foreach($data as $key => $value) {
		if (is_array($value)) {
			foreach($value as $elem => $string) {
				foreach($string as $keyer => $regard) {
					if ($regard == 0) {
							$buyarray[] = $string;
					} else if ($regard == 1) {
							$sellarray[] = $string;
					}
				}
			}
		} else {
			//Nothing bitch
		}
	}
}

//var_dump($buyarray, $sellarray);

json_encode($data);

$summary = array('Buy' => $buyarray, 'Sell' => $sellarray);
$encoded_summary = json_encode($summary, JSON_HEX_QUOT | JSON_HEX_TAG);

echo $encoded_summary;

?>