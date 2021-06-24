

$(function() {



    $('.btn').on('click', function(){

        let food  = $('#food-val').val();
        food = "?q=" + food;

         console.log(food)


        var request = $.ajax({
            
            "async": true,
            "crossDomain": true,
            "url": "https://edamam-recipe-search.p.rapidapi.com/search" + food,
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "cc62e16963msh66559015e6f02aap10d02cjsn9ba955a6cf0c",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
        }
            // "url": "http://www.recipepuppy.com/api/" + food,
            // "method": "GET",
        });
        
        request.done(function( data ) {
            let num =  Math.floor(Math.random() * 11);
            let food_img = data.hits[num].recipe.image;
            let food_title = data.hits[num].recipe.label;
            let food_lines = data.hits[num].recipe.ingredientLines;
            let meal_lines = $('.meal_lines');


            food_lines.forEach((food_line) => {
                let li = document.createElement('li');
                li.textContent = food_line;
                meal_lines.append(li);
            });
            

            $('.img-box img').attr('src', food_img)
            $('.meal-title').text(food_title)
            
            console.log(data)
            console.log(food_img)
            console.log(food_title)
            console.log(food_lines)
            
        });
    
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })

    $('.btn').on('click', function(){

        let food  = $('#food-val').val();
        food = "?q=" + food;

         console.log(food)


        var request = $.ajax({
            
            "async": true,
            "crossDomain": true,
            "url": "https://edamam-recipe-search.p.rapidapi.com/search" + food,
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "cc62e16963msh66559015e6f02aap10d02cjsn9ba955a6cf0c",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
        }
            // "url": "http://www.recipepuppy.com/api/" + food,
            // "method": "GET",
        });
        
        request.done(function( data ) {
            let num =  Math.floor(Math.random() * 11);
            let food_img = data.hits[num].recipe.image;
            let food_title = data.hits[num].recipe.label;
            let food_lines = data.hits[num].recipe.ingredientLines;
            let meal_lines = $('.meal_lines1');


            food_lines.forEach((food_line) => {
                let li = document.createElement('li');
                li.textContent = food_line;
                meal_lines.append(li);
            });
            

           
            $('.img-box1 img').attr('src', food_img)
            $('.meal-title1').text(food_title)

            console.log(data)
            console.log(food_img)
            console.log(food_title)
            console.log(food_lines)
        });
    
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })

    $('.btn').on('click', function(){

        let food  = $('#food-val').val();
        food = "?q=" + food;

         console.log(food)


        var request = $.ajax({
            
            "async": true,
            "crossDomain": true,
            "url": "https://edamam-recipe-search.p.rapidapi.com/search" + food,
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "cc62e16963msh66559015e6f02aap10d02cjsn9ba955a6cf0c",
            "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
        }
            // "url": "http://www.recipepuppy.com/api/" + food,
            // "method": "GET",
        });
        
        request.done(function( data ) {
            let num =  Math.floor(Math.random() * 11);
            let food_img = data.hits[num].recipe.image;
            let food_title = data.hits[num].recipe.label;
            let food_lines = data.hits[num].recipe.ingredientLines;
            let meal_lines = $('.meal_lines2');


            food_lines.forEach((food_line) => {
                let li = document.createElement('li');
                li.textContent = food_line;
                meal_lines.append(li);
            });
            

           
            $('.img-box2 img').attr('src', food_img)
            $('.meal-title2').text(food_title)
            
            console.log(data)
            console.log(food_img)
            console.log(food_title)
            console.log(food_lines)
        });
    
        
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
    })

})