const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.yahoo.co.jp/',
      show: true,
      windowSize: '1280*1024'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptTest',
  translation: 'ja-JP',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}