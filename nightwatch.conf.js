// we use a nightwatch.conf.js file so we can include comments and helper functions

const LIBPATH = 'lib/';

module.exports = {
  "src_folders": [
    "tests"
  ],
  "page_objects_path": "./pageobjects",
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
     "server_path": LIBPATH + "selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
       "webdriver.chrome.driver" : LIBPATH + "chromedriver.exe"
    }
  },

  "test_workers" : {"enabled" : true, "workers" : "auto"}, // perform tests in parallel where possible

  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
     "desiredCapabilities" : {
                "browserName": "chrome",
                "javascriptEnabled" : true,
                "chromeOptions" : {
                "args" : ["--no-sandbox"]
                
            },
                "acceptSslCerts" : true

            }
    }
  }
}

