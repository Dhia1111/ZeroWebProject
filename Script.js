

 async function GetTestimonal(url){


     try {

         var Testimonales = fetch(url);

            if (Testimonales != null) {

             var UsersJason = (Testimonales).json();

                UsersJason.forEach(function (User) {


                    var TestimonalBox = document.createElement('div')


                    switch (User.Ranking) {


                        case 1:

                            break;

                        case 2:
                            break;

                        case 3:
                            break;

                        case 4:
                            break;

                        case 5:
                            break;


                    }

                });
               
         }

       
         else {
             console.error("Data retrive filed");
         }
         
         


     }
     

     
    catch{


     }


   
}
