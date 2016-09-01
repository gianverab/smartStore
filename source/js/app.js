(function(){
	var app = angular.module('store', [])

	.controller('StoreCtrl', function(){
		this.products = watches;
	});

	var watches = [
		{
			name: 'MOTA Smartwatch G2 Pro',
			price: '69.90',
			description: 'Discover a true hands-free experience thanks to the innovative and ultra modern MOTA Smartwatch G2 Pro! Once paired with your iPhone or Android device this smartwatch allows you to check and answer incoming phone calls, send emails, make appointment, listen to music, search the web, check weather forecats, EVEN if you are 20 feets away from your phone.',
			purchase: true,
			soldOut: false
		},
		{
			name: 'MyKronoz ZeWatch3-Smartwatch',
			price: '59.90',
			description: 'If you want to be healthier by monitoring your daily activities, ZeWatch3 is made for you. However, you can do much more than counting your calories with ZeWatch3. As a matter of fact, ZeWatch3 by MyKronoz will also track your sleep and do the job while you rest. Of course, as a watch, ZeWatch3 will display the time. But it can also remind you your important meetings and other things that you consider as important. ZeWatch3 connects to your phone via Bluetooth and its battery lasts up to 4 days. This is the ultimate wearable to stay healthy and productive.',
			purchase: true,
			soldOut: false
		},
		{
			name: 'iFit Vue - Activity Tracker',
			price: '49.90',
			description: 'The iFit Vue is your best life companion. Simple to use, smart and elegant. With the touch of a finger, the touchscreen display will deliver every stats and information you need! It will celebrate all your phisical achievements to keep you motivated. The MoveReady technology detects all your physical patterns: Sleeping, Running or Bodybuilding, it automatically adapts to what you are doing. No need to adjust your wristband.',
			purchase: true,
			soldOut: false
		}
	]
})();