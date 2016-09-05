(function(){
	var app = angular.module('store', [])

	.controller('StoreCtrl', function(){
		this.products = watches;
	})
	.controller('PanelCtrl', function() {
		this.tab = 1;

		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	});

	var watches = [
		{
			name: 'MOTA Smartwatch G2 Pro',
			price: '69.90',
			description: 'Discover a true hands-free experience thanks to the innovative and ultra modern MOTA Smartwatch G2 Pro! Once paired with your iPhone or Android device this smartwatch allows you to check and answer incoming phone calls, send emails, make appointment, listen to music, search the web, check weather forecats, EVEN if you are 20 feets away from your phone.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2.9" x 2.5" x 1"',
					weight: '0.08oz',
					color: 'Black, Silver',
					waterproof: 'No',
					battery: 'Up to 3 days'
				}
			],
			images: [
				{
					full: '/assets/motaG2-black_full.jpg',
					thumb: '/assets/motaG2-black_thumb.jpg'
				},
				{
					full: '/assets/motaG2-silver_full.jpg',
					thumb: '/assets/motaG2-silver_thumb.jpg'
				}
			]
		},
		{
			name: 'MyKronoz ZeWatch3',
			price: '59.90',
			description: 'If you want to be healthier by monitoring your daily activities, ZeWatch3 is made for you. However, you can do much more than counting your calories with ZeWatch3. As a matter of fact, ZeWatch3 by MyKronoz will also track your sleep and do the job while you rest. Of course, as a watch, ZeWatch3 will display the time. But it can also remind you your important meetings and other things that you consider as important. ZeWatch3 connects to your phone via Bluetooth and its battery lasts up to 4 days. This is the ultimate wearable to stay healthy and productive.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2.3" x 1.18" x 0.35"',
					weight: '1.446oz',
					color: 'Black, Gold, Silver',
					waterproof: 'No',
					battery: 'Up to 4 days'
				}
			],
			images: [
				{
					full: '/assets/zewatch3-black_full.jpg',
					thumb: '/assets/zewatch3-black_thumb.jpg'
				},
				{
					full: '/assets/zewatch3-gold_full.jpg',
					thumb: '/assets/zewatch3-gold_thumb.jpg'
				},
				{
					full: '/assets/zewatch3-silver_full.jpg',
					thumb: '/assets/zewatch3-silver_thumb.jpg'
				}
			]
		},
		{
			name: 'iFit Vue - Activity Tracker',
			price: '49.90',
			description: 'The iFit Vue is your best life companion. Simple to use, smart and elegant. With the touch of a finger, the touchscreen display will deliver every stats and information you need! It will celebrate all your phisical achievements to keep you motivated. The MoveReady technology detects all your physical patterns: Sleeping, Running or Bodybuilding, it automatically adapts to what you are doing. No need to adjust your wristband.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2" x 1.10" x 0.30"',
					weight: '1.026oz',
					color: 'Blue, Purple, Sangria',
					waterproof: 'No',
					battery: 'Up to 7 days'
				}
			],
			images: [
				{
					full: '/assets/IfitVue-blue_full.jpg',
					thumb: '/assets/IfitVue-blue_thumb.jpg'
				},
				{
					full: '/assets/IfitVue-sangria_full.jpg',
					thumb: '/assets/IfitVue-sangria_thumb.jpg'
				},
				{
					full: '/assets/IfitVue-purple_full.jpg',
					thumb: '/assets/IfitVue-purple_thumb.jpg'
				}
			]
		},
		{
			name: 'Withings Activité Pop',
			price: '74.90',
			description: 'Withings Activité Pop Smart Watch is an activity tracker with a classic look and an analog watchface. The subtle, classic looking watch is actually capable of measuring the number of steps taken by its wearer, monitoring and analyzing user sleep cycles, recording data throughout swim, running and workout sessions, and compiling this information in an easy-to-use app. This beautiful watch and activity tracker will also keep track of the number of calories its wearer burns and promote and support an healthy lifestyle!',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '3.1" x 3.3" x 7.0"',
					weight: '0.4 lbs',
					color: 'Shark Grey, Bright Azure, Wild Sand',
					waterproof: 'Yes',
					battery: 'Up to 6 days'
				}
			],
			images: [
				{
					full: '/assets/activitePop-black_full.jpg',
					thumb: '/assets/activitePop-black_thumb.jpg'
				},
				{
					full: '/assets/activitePop-blue_full.jpg',
					thumb: '/assets/activitePop-blue_thumb.jpg'
				},
				{
					full: '/assets/activitePop-white_full.jpg',
					thumb: '/assets/activitePop-white_thumb.jpg'
				}
			]
		},
		{
			name: 'Catalyst Waterproof Apple Watch',
			price: '90.90',
			description: 'The Catalyst Waterproof Apple Watch Case 42mm is the most protective case you can find in the world. Thanks to its clear design, you can still see the front of your Apple Watch. This case is waterproof and shockproof.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2.1" x 1.7" x 0.5"',
					weight: '0.075 Lbs',
					color: 'Green, Ranger, Stealth',
					waterproof: 'Yes',
					battery: 'Up to 18 hours'
				}
			],
			images: [
				{
					full: '/assets/catalyst-ranger_full.jpg',
					thumb: '/assets/catalyst-ranger_thumb.jpg'
				},
				{
					full: '/assets/catalyst-green_full.jpg',
					thumb: '/assets/catalyst-green_thumb.jpg'
				},
				{
					full: '/assets/catalyst-stealth_full.jpg',
					thumb: '/assets/catalyst-stealth_thumb.jpg'
				}
			]
		},
		{
			name: 'TomTom Runner GPS Watch',
			price: '69.90',
			description: 'The TomTom Runner GPS Watch is the accessory you need to stay motivated and reach your running goals. You are tired of getting lost during your runnings? The TomTom Runner GPS Watch allows you to have a perfect control on your direction. You can now focus only on your activity and your performance and no on where you are located and how to go home.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2" x 6" x 1.2"',
					weight: '5.2 oz',
					color: 'Silver, Black, Pink',
					waterproof: 'Yes',
					battery: 'Up to 10 hours'
				}
			],
			images: [
				{
					full: '/assets/tomtomRunner-silver_full.jpg',
					thumb: '/assets/tomtomRunner-silver_thumb.jpg'
				},
				{
					full: '/assets/tomtomRunner-pink_full.jpg',
					thumb: '/assets/tomtomRunner-pink_thumb.jpg'
				}
			]
		},
		{
			name: 'Striiv Fusion Activity',
			price: '54.90',
			description: 'Discover Striiv: new amazing device. In addition to 24/7 activity tracking and sleep quality tracking, the Striiv Fusion Smartwatch contains upgradeable apps and provides call/text alerts and notifications for various games and apps including Facebook, Skype, WeChat and many others. Striiv Fusion is also three smartwatches in one given it comes with three interchangeable bands in Graphite, Blue Denham and Red Ember for you to vary your look while enjoying the same, practical smartwatch.',
			purchase: true,
			soldOut: false,
			specs: [
				{
					size: '2" x 8" x 2"',
					weight: '6.4 oz',
					color: 'Black, Blue, Red',
					waterproof: 'No',
					battery: 'Up to 5 days'
				}
			],
			images: [
				{
					full: '/assets/striivFusion-colors_full.jpg',
					thumb: '/assets/striivFusion-colors_thumb.jpg'
				},
				{
					full: '/assets/striivFusion-display_full.jpg',
					thumb: '/assets/striivFusion-display_thumb.jpg'
				}
			]
		}
	]
})();