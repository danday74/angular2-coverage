# Third party libs

To use third party libs you must follow these steps.

(1) To install and save **lodash** run ..
 
```
npm i -S lodash
```

(2) To install and save **lodash** TypeScript definitions run ..

```
typings install dt~lodash --global --save
```

(3) Update **systemjs.config.js** to let SystemJS know where to find **lodash**

```
var map = {
    // ...
    'lodash': 'node_modules/lodash/lodash.js'
};
```

(4) Update **karma.conf.js** to make **lodash** available to your karma test runner browser

```
{pattern: 'node_modules/lodash/**/*.js', included: false, watched: false}
```

(5) Then in your TypeScript .ts file ...

```
import * as _ from 'lodash';
```
