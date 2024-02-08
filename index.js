

     var  QUOTE = [
     
        {p1  :  `Resentment is like drinking poison and waiting for your enemies to die.` ,
         p2  :  `--Nelson Mandela`
        },


        {p1   :  `Do not take life too seriously. You will not get out alive.` ,  
         p2   :`--Elbert Hubbard`
        },


        {p1   :   `You miss 100% of the shots you don't take.`   , 
         p2   :`--Wayne Gretzy`
        },


        {p1    :   `The best revenge is massive success.` , 
          p2   :  `--Frank Sinatra`
        },


        {p1    :  `"It's not what happens to you, but how you react to it that matters." ` , 
          p2   :  `--Epictetus`
        },


  
       ]
   


function clickButton()
 {

    i = Math.floor( (Math.random () * QUOTE.length) ) ;

    document.getElementById("pargraph1").innerHTML = QUOTE[i].p1 ;

    document.getElementById("pargraph2").innerHTML = QUOTE[i].p2 ;


  }
 

































