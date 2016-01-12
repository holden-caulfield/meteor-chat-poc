App.info({
  id: 'com.scvsoft.jp.chatpoc',
  version: '1.0.0',
  name: 'chatpoc',
  description: 'A simple proof of concept chat built in Meteor.',
  author: 'JP Saraceno',
  email: 'jp@scvsoft.com',
  website: 'http://www.scvsoft.com'
});

App.icons({
  'android_ldpi': 'resources/android/drawable-ldpi/icon.png',
  'android_mdpi': 'resources/android/drawable-mdpi/icon.png',
  'android_hdpi': 'resources/android/drawable-hdpi/icon.png',
  'android_xhdpi': 'resources/android/drawable-xhdpi/icon.png',
  'iphone': 'resources/ios/icons/Icon.png',
  'iphone_2x': 'resources/ios/icons/Icon@2x.png',
  'iphone_3x': 'resources/ios/icons/Icon-180@3x.png',
  'ipad': 'resources/ios/icons/Icon-76.png',
  'ipad_2x': 'resources/ios/icons/Icon-152.png'
});

App.launchScreens({
  'android_ldpi_portrait': 'resources/android/drawable-ldpi/screen.png',
  'android_ldpi_landscape': 'resources/android/drawable-land-ldpi/screen.png',
  'android_mdpi_portrait': 'resources/android/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/android/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/android/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/android/drawable-land-hdpi/screen.png',
  'android_xhdpi_portrait': 'resources/android/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/android/drawable-land-xhdpi/screen.png',
  'iphone': 'resources/ios/splash/Default~iphone.png',
  'iphone_2x': 'resources/ios/splash/Default@2x~iphone_640x960.png',

  'iphone5': 'resources/ios/splash/Default-568h@2x~iphone_640x1136.png',
  'iphone6': 'resources/ios/splash/Default-750@2x~iphone6-landscape_1334x750.png',
  'iphone6p_portrait': 'resources/ios/splash/Default-1242@3x~iphone6s-portrait_1242x2208.png',
  'iphone6p_landscape': 'resources/ios/splash/Default-1242@3x~iphone6s-landscape_2208x1242.png',

  'ipad_portrait': 'resources/ios/splash/Default-Portrait~ipad_768x1024.png',
  'ipad_portrait_2x': 'resources/ios/splash/Default-Portrait@2x~ipad_1536x2048.png',
  'ipad_landscape': 'resources/ios/splash/Default-Landscape~ipad_1024x768.png',
  'ipad_landscape_2x': 'resources/ios/splash/Default-Landscape@2x~ipad_2048x1536.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
