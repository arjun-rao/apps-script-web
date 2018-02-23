# Building a URL Shortener with Apps Script
---

Documentation: [Web Apps](https://developers.google.com/apps-script/guides/web)

Demo: [link](https://goo.gl/Nbd3ae)

# Step 1
---

Create a file called `javascript.html` and paste in the following boiler plate:
```
<script src="https://code.jquery.com/jquery-1.8.3.min.js"></script>

<script>
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {
    	event.preventDefault();
    });

});
</script>
```

# Step 2
---
Create a `template.html` file with the following content:
```
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
```

# Step 3
---

We will be using the URL Shortening Service to help us make short URLs. The following code snippet shows you how to use it:
```
 var shortURL = UrlShortener.Url.insert({
    longUrl: "http://google.com/"
  });
```

To use the URL Shortening service we need to first enable it from `Resources > Advanced Google Services` and the API under `Resources > Cloud Platform Project > APIs and Services`

# Step 4
---

Go ahead and complete the implementation of your web app by completing the following:

* Add a form to `Template.html` that takes a long URL as input.
* Using the following jQuery Snippet, you can process form events:
  ```
  $('form').submit(function(event) {
  		//Do something
  });
  ```
* Process the form request by running a function on Apps Script using the `script.run` function like so:
  ```
   google.script.run.withSuccessHandler(onSuccess).myFunction();

   function onSuccess(data){
   	  // Do something with returned data from Apps Script
   }
  ```

# Step 5
---

Deploy your app as a web app! s