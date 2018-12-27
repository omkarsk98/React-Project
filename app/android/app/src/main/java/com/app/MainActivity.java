package com.app;

import com.facebook.react.ReactActivity;
import com.ccmxy.wifimanager.WifiPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "app";
    }
  //   @Override
  // protected void onCreate(Bundle savedInstanceState) {
  //   super.onCreate(savedInstanceState);
  //   mReactRootView = new ReactRootView(this);

  //   mReactInstanceManager = ReactInstanceManager.builder()
  //     .setApplication(getApplication())
  //     .setBundleAssetName("index.android.bundle")
  //     .setJSMainModuleName("index.android")
  //     .addPackage(new MainReactPackage())
  //     .addPackage(new WifiPackage()) // <------ add this line
  //     .setUseDeveloperSupport(BuildConfig.DEBUG)
  //     .setInitialLifecycleState(LifecycleState.RESUMED)
  //     .build();
  // }
}
