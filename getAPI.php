<?php

//Fetch JSON data by URL

$url = 'https://api.mintpal.com/v1/market/stats/MYR/BTC';

$json = file_get_contents($url);
$data = json_decode($json, true);

//var_dump($data);

if (!empty($data)) {
	foreach($data as $key => $value) {
		foreach($value as $elem => $string) {
			switch ($elem) {
				case 'coin':
					$coin = $string;
				case 'code':
					$code = $string;
				case 'exchange':
					$exchange = $string;
				case 'last_price':
					$last_price = $string;
				case 'yesterday_price':
					$yesterday_price = $string;
				case 'change':
					$change = $string;
				case '24hhigh':
					$high = $string;
				case '24hlow':
					$low = $string;
				case '24hvol':
					$volume = $string;
				case 'top_bid':
					$topbid = $string;
				case 'top_ask':
					$topask = $string;
			}
		}
	}
}
	
json_encode($data);

$summary = array('Coin' => $coin, 'Code' => $code, 'Base' => $exchange, 'Last' => $last_price, 'Yesterday' => $yesterday_price, 'Change' => $change, 'High' => $high, 'Low' => $low, 'Volume' => $volume, 'Topbid' => $topbid, 'Topask' => $topask);
$encoded_summary = json_encode($summary, JSON_HEX_QUOT | JSON_HEX_TAG);

echo $encoded_summary;

?>