        //first JS example
        var today = new Date(); //create an object of type Date
        var hourNow = today.getHours();
        console.log("the hour is: " + hourNow);
        var greeting = '';

        if(hourNow > 18){
            greeting = 'Good evening!';
        }  else if(hourNow > 12){
            greeting = 'Good Afternoon!';
        }  else if(hourNow > 0){
              greeting = 'Good Morning!';
        }  else{
              greeting = 'Welcome!';
        }

        document.write('<h1>' + greeting + '</h1>');