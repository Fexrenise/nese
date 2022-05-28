const { createApp } = Vue

  createApp({
  

    data(){
        return {
            count1 : 100,
            count2 : 100,
            canavar : "Canavar",
            user : "User",
            show : false,
            randomX : Math.floor(Math.random()*100),
            randomY : Math.floor(Math.random()*100),
            btn : 2,
            btn2 : 2

        }
    },
    methods : {
       hucum(){
            this.count1 = this.count1 - this.randomX
            this.count2 = this.count2 - this.randomY
            if(this.count1 < 0){
                alert('User uddu')
            }
            if(this.count2 < 0){
                alert('Canavar uddu')
            }

           console.log(this.count1);      
           console.log(this.count2);   
        },
       siddet(){
           if(this.count1>0 && this.btn>0){
               this.count1 = this.count1 - 15;
               this.btn--
           }
           console.log(this.count1)
           
       },
       xal(){
           if(this.count2<100 && this.count2>0 && this.btn2>0){
            this.count2 = this.count1 + 15;
            this.btn--
           }
           console.log(this.count2)
       },
       cix(){
           alert('Oyunu uduzdunuz')
           this.count1 = 100
           this.count2 = 100
           
       }

        

    }
  }).mount('#game');