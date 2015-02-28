#Date Utils

A set of utilities using dates. Can be used as a node module or in the browser.

##Usage

###Node.js


```
dateUtils = require('date_utils');
```
###Browser

Global "dateUtils" is exposed.

##Functions

###getDayString

```

dateUtils.getDayString("mon"); //returns "Monday"

dateUtils.getDayString(0); //returns "Monday"

```

###getMonthString

```

dateUtils.getMonthString("jan"); //returns "January"

dateUtils.getMonthString(0); //returns "January"

```

#Testing

```
make test
```