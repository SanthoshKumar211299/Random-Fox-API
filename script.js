function get_random_fox_image(){
    url="https://randomfox.ca/floof/";
    fetch(url).then(function(response){
        return response.json();
    })
      .then(function(data){
        display_image(data.image)
      }) 
      .catch(function(error){
        console.log("Error: " + error);
      })
    }
    function display_image(image_url){
        document.getElementById("image").src=image_url;
    }
       
       
       
       
       
       
        /* return response.json();
    })
    .then(function(data){
        display_image(data.message);
    })
    .catch(function(error){
     console.log("Error:" +error)
    });
}
function display_image(image_url){
    document.getElementById("image").src=image_url;
}*/