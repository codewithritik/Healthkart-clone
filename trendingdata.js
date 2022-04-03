function trendingdata(){

let data_aditya = [

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcHkG-WypTCUDapYf-j_yQF2PtJzR13GRXA&usqp=CAU",
title:"TrueBasics Liver Detox with Sil;ybin Milk Thistle Extract",
price:"1444" },

{image:"https://img4.hkrtcdn.com/12049/prd_1204883-GNC-Milk-Thistle-250-mg-90-capsules_c_m.jpg",
title:"GNC Milk Thistle 250mg",
price:"974" },

{image:"https://img7.hkrtcdn.com/2236/prd_223516_c_m.jpg",
title:"Himalayan Organices Milk Thistle 800mg",
price:"749" },

{image:"https://img5.hkrtcdn.com/16741/prd_1674044_c_s.jpg",
title:"TrueBasics sleep Easy with Melatonin Suntheanine",
price:"565" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcHkG-WypTCUDapYf-j_yQF2PtJzR13GRXA&usqp=CAU",
title:"TrueBasics Eye Shield with Lute-gen Plus Beta Caro-gen",
price:"589" },

{image:"https://m.media-amazon.com/images/I/416gmbmAU6S.jpg",
title:"HealthKart Milk Thistle",
price:"499" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvRtlgysEKign36hX01A0tO6NNg-8LFDHxvnQkC7RCjum_wBjvoyZbTk9IHJIH7CzAjg&usqp=CAU",
title:"Muscle Blaze Milk Thistle",
price:"329" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TP8zhVnAg-LQmign-NoNQNJPyLgCLuoF6hLJMYMXuyfqFc2R9qcKe48RhtBCtWiNjk4&usqp=CAU",
title:"HealthKart HK Vitals Melatonin",
price:"199" },

{image:"https://img4.hkrtcdn.com/10148/prd_1014783-Natures-Velvet-Milk-Thistle-Extract-60-softgels_o.jpg",
title:"MuscleBlaze L-Arginine - 90Capsules",
price:"699" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2ZN8NKTSiCg7I-OVYlHoYKKeyKE-KaNvXLXkKP57waCyGct2y4pFqki7pN2U4FCJcLw&usqp=CAU",
title:"Now L-Arginine(500mg)",
price:"1298" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10hVG7BvlA42nrFOSYXnVQKT4eNEb7ZrdZp10xVXQz6qYXEDB8rd5jpSuXlah8Md1Wvo&usqp=CAU",
title:"Now Liver Refresh - 90capsules",
price:"250" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtYIxRsOUuDpPhy7RkW90HEN5MZpH41ZP92tOpGT1oYwT_5ItIEw1l-Nn0iSfumtVct8&usqp=CAU",
title:"GNC L-Arginine(1000mg)",
price:"180" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmrl6Ke5Xo2mcLwF3gRIt0348xMCa8Of8n4GaI9aAISE2bWIfs8OPW45vORx-Zulz_Xs&usqp=CAU",
title:"Big Muscles L-Arginine PMP Sex on The Beach",
price:"379" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaKX0wVyFqgSHQ8SB4CxOEL-PWW22WwHCG_oSPrebiXS5PsvvVeBsCTHeMJLa-8BtHUM&usqp=CAU",
title:"INLIFE L-Arginine 1000mg - 60 veggie capsules(s)",
price:"299" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafnfxqoReAlPC3zj9iJglvwWB3ugbmzTwliaRVpUPJW2YXu30s0kOdZRmx6ai7jgVAJ4&usqp=CAU",
title:"Health Oxide Liquid Formula",
price:"450" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW34Srkaby_kcmG4B7k9de9i8_x8bqIXh3z2JtAHyeuo0ZRmirZBlRv56jOvYFReOLd1A&usqp=CAU",
title:"Health XP Essential Series L Arginine L Citrulline",
price:"399" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcHkG-WypTCUDapYf-j_yQF2PtJzR13GRXA&usqp=CAU",
title:"TrueBasics Liver Detox with Sil;ybin Milk Thistle Extract",
price:"1444" },

{image:"https://img4.hkrtcdn.com/12049/prd_1204883-GNC-Milk-Thistle-250-mg-90-capsules_c_m.jpg",
title:"GNC Milk Thistle 250mg",
price:"974" },

{image:"https://img7.hkrtcdn.com/2236/prd_223516_c_m.jpg",
title:"Himalayan Organices Milk Thistle 800mg",
price:"749" },

{image:"https://img5.hkrtcdn.com/16741/prd_1674044_c_s.jpg",
title:"TrueBasics sleep Easy with Melatonin Suntheanine",
price:"565" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcHkG-WypTCUDapYf-j_yQF2PtJzR13GRXA&usqp=CAU",
title:"TrueBasics Eye Shield with Lute-gen Plus Beta Caro-gen",
price:"589" },

{image:"https://m.media-amazon.com/images/I/416gmbmAU6S.jpg",
title:"HealthKart Milk Thistle",
price:"499" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkvRtlgysEKign36hX01A0tO6NNg-8LFDHxvnQkC7RCjum_wBjvoyZbTk9IHJIH7CzAjg&usqp=CAU",
title:"Muscle Blaze Milk Thistle",
price:"329" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TP8zhVnAg-LQmign-NoNQNJPyLgCLuoF6hLJMYMXuyfqFc2R9qcKe48RhtBCtWiNjk4&usqp=CAU",
title:"HealthKart HK Vitals Melatonin",
price:"199" },

{image:"https://img10.hkrtcdn.com/12294/pck_1229389_o.jpg",
title:"MuscleBlaze L-Arginine - 90Capsules",
price:"699" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2ZN8NKTSiCg7I-OVYlHoYKKeyKE-KaNvXLXkKP57waCyGct2y4pFqki7pN2U4FCJcLw&usqp=CAU",
title:"Now L-Arginine(500mg)",
price:"1298" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10hVG7BvlA42nrFOSYXnVQKT4eNEb7ZrdZp10xVXQz6qYXEDB8rd5jpSuXlah8Md1Wvo&usqp=CAU",
title:"Now Liver Refresh - 90capsules",
price:"250" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtYIxRsOUuDpPhy7RkW90HEN5MZpH41ZP92tOpGT1oYwT_5ItIEw1l-Nn0iSfumtVct8&usqp=CAU",
title:"GNC L-Arginine(1000mg)",
price:"180" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmrl6Ke5Xo2mcLwF3gRIt0348xMCa8Of8n4GaI9aAISE2bWIfs8OPW45vORx-Zulz_Xs&usqp=CAU",
title:"Big Muscles L-Arginine PMP Sex on The Beach",
price:"379" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaKX0wVyFqgSHQ8SB4CxOEL-PWW22WwHCG_oSPrebiXS5PsvvVeBsCTHeMJLa-8BtHUM&usqp=CAU",
title:"INLIFE L-Arginine 1000mg - 60 veggie capsules(s)",
price:"299" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafnfxqoReAlPC3zj9iJglvwWB3ugbmzTwliaRVpUPJW2YXu30s0kOdZRmx6ai7jgVAJ4&usqp=CAU",
title:"Health Oxide Liquid Formula",
price:"450" },

{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW34Srkaby_kcmG4B7k9de9i8_x8bqIXh3z2JtAHyeuo0ZRmirZBlRv56jOvYFReOLd1A&usqp=CAU",
title:"Health XP Essential Series L Arginine L Citrulline",
price:"399" }
]
 return data_aditya;
}

let url = `http://localhost:5000/product`
feactchdata(url)
async function feactchdata(){
try{
    let res = await fetch(url)
    let data = await res.json()
    let userdata = data
    
    console.log(userdata)
    appendflase_data(userdata)
}
catch(err){
    return err
}
}


function appendflase_data(datarr){
  let main = document.querySelector(".showappdata")
    datarr.map((element) => {
            let div = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.image
            let title = document.createElement("h4")
            title.innerText = element.title


            let x = genRand(4.5, 5, 1)
            let rating = document.createElement("span")
            rating.innerText = x
            rating.className = "ratingspan"
            let star = stars()
           
            let stari = document.createElement("i")
            stari.innerHTML = star

            let y = genRand(5000, 4000, 0)
            let review = document.createElement("span")
            review.className = "reviewspan"
            review.innerText = " "+"("+y+")"
           
          
            let stardiv = document.createElement("div")
            stardiv.append(stari,rating,review)
            stardiv.id = "stardiv"
            let pricediv = document.createElement("div")

                let price = document.createElement("span")
                price.innerHTML = "₹"+element.price
                price.className ="price"

            
                let quick = quickfuntion()
                let quickbtn = document.createElement("div")
                quickbtn.innerHTML = quick

                pricediv.append(price,quickbtn)
                

            
            quickbtn.className = "quickbtn"

            
            pricediv.className = "pricediv"




            div.append(image, title, stardiv ,pricediv)
            div.className = "dataofproduct"
            div.onclick = () => {
                localStorage.setItem("productdata", JSON.stringify(element))
                console.log("ritik")
                alert('Your item is added sucessfully')
                // window.location.href = "./cart.html"
            }

            main.append(div)
        })
}
function genRand(min, max, decimalPlaces) {
    return (Math.random() * (max - min) + min).toFixed(decimalPlaces) * 1;
}

function stars(){
   return ` 
       <i class="bi bi-star-fill"></i>
       <i class="bi bi-star-fill"></i>
       <i class="bi bi-star-fill"></i>
       <i class="bi bi-star-fill"></i>
       <i class="bi bi-star-half"></i>
   `;
}

function quickfuntion(){
    return `<button><i class="bi bi-lightning-charge-fill"></i>Quick Buy</button>`;

}



document.getElementById('sortByVariants').addEventListener('change', function() {
    let data = trendingdata()
    var option = this.value

    if(option =="ASES"){
        data.sort((a,b)=>{
            return Number(a.price) - Number(b.price);
            
        })
       
        }
    else if(option == "Popularity"){
        window.location.herf = "./trending.html"
    }
    else{
        //sortList(data,"DSE")
        data.sort((a,b)=>{
            return Number(b.price) - Number(a.price);
            
        })
    }
    sortdata(data)
    
});

// sort function
function sortdata(datarr){
    let main = document.querySelector(".showappdata")
     main.innerHTML = null
        datarr.forEach(function (element) {
                let div = document.createElement("div")
                let image = document.createElement("img")
                image.src = element.image
                let title = document.createElement("h4")
                title.innerText = element.title
    
    
                let x = genRand(4.5, 5, 1)
                let rating = document.createElement("span")
                rating.innerText = x
                rating.className = "ratingspan"
                let star = stars()
    
                let stari = document.createElement("i")
                stari.innerHTML = star
    
                let y = genRand(5000, 4000, 0)
                let review = document.createElement("span")
                review.className = "reviewspan"
                review.innerText = " " + "(" + y + ")"
    
    
                let stardiv = document.createElement("div")
                stardiv.append(stari, rating, review)
                stardiv.id = "stardiv"
                let pricediv = document.createElement("div")
    
                let price = document.createElement("span")
                price.innerHTML = "₹" + element.price
                price.className = "price"
    
    
                let quick = quickfuntion()
                let quickbtn = document.createElement("div")
                quickbtn.innerHTML = quick
    
                pricediv.append(price, quickbtn)
    
    
    
                quickbtn.className = "quickbtn"
    
    
                pricediv.className = "pricediv"
    
    
    
    
                div.append(image, title, stardiv, pricediv)
                div.className = "dataofproduct"
                div.onclick = () => {
                    localStorage.setItem("productdata", JSON.stringify(element))
                    console.log("ritik")
    //                window.location.href = "./productpage.html"
                }
    
    
                main.append(div)
            })
    }



export {trendingdata,appendflase_data}