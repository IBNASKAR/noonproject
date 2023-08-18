// import './style.css';

// cayegory
fetch("https://fakestoreapi.com/products/categories")
.then((response) => {return response.json()})
.then((results) =>{ results.forEach(result => {
    console.log(result)
    $(document).ready(function(){
        $(".swiper-wrapper").append(`<div class="swiper-slide ps-3"><a href="#${result}">${result}</a></div>`)
    })
});
})

// electronics
fetch("https://fakestoreapi.com/products")
.then((response) => {return response.json()})
.then((products) =>{ products.filter(function(product){
    if(product.category == "electronics"){
        //   console.log(product)
        $(document).ready(function(){
            $(".Electronics").append(`
            <div class="card" style="width: 18rem;">
                <div class="cardProductimg"><a href="#"><img src="${product.image}" class="card-img-top" alt="..."></a>
                </div>
                
                <div class="card-body">
                    <h3 class="text-center">${product.price} eg</h3>
                    <p class="card-text fs-5">${product.title}</p>
                </div>
            `)
        })
    }});
})
//Jewelery
fetch("https://fakestoreapi.com/products")
.then((response) => {return response.json()})
.then((products) =>{ products.filter(function(product){
    if(product.category == "jewelery"){
        //   console.log(product)
        $(document).ready(function(){
            $(".Jewelery").append(`
            <div class="card" style="width: 18rem;">
                <div class="cardProductimg"><a href="#"><img src="${product.image}" class="card-img-top" alt="..."></a>
                </div>
                
                <div class="card-body">
                    <h3 class="text-center">${product.price} eg</h3>
                    <p class="card-text fs-5">${product.title}</p>
                </div>
            `)
        })
    }});
})


//men's clothing
fetch("https://fakestoreapi.com/products")
.then((response) => {return response.json()})
.then((products) =>{ products.filter(function(product){
    if(product.category == "men's clothing"){
        //   console.log(product)
        $(document).ready(function(){
            $(".mens").append(`
            <div class="card" style="width: 18rem;">
                <div class="cardProductimg"><a href="#"><img src="${product.image}" class="card-img-top" alt="..."></a>
                </div>
                
                <div class="card-body">
                    <h3 class="text-center">${product.price} eg</h3>
                    <p class="card-text fs-5">${product.title}</p>
                </div>
            `)
        })
    }});
})

//womens
fetch("https://fakestoreapi.com/products")
.then((response) => {return response.json()})
.then((products) =>{ products.filter(function(product){
    if(product.category == "women's clothing"){
        //   console.log(product)
        $(document).ready(function(){
            $(".womens").append(`
            <div class="card" style="width: 18rem;">
                <div class="cardProductimg"><a href="#"><img src="${product.image}" class="card-img-top" alt="..."></a>
                </div>
                
                <div class="card-body">
                    <h3 class="text-center">${product.price} eg</h3>
                    <p class="card-text fs-5">${product.title}</p>

                </div>
            `)
        })
    }});
})