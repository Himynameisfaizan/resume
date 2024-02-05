async function getPtoduct() {
row = await fetch("https://fakestoreapi.com/products/");
    data = await row.json();
    raw = data;
    console.log(raw);
    product = "";
    for(i=0; i<raw.length;){
        console.log(i);
        var prd = `<div class="category-img" style="width:250px; margin-left:15px; float:left;>
        <a href="#"><img src="`+raw[i].image+`"
                alt=""></a>
        <div class="img-head">
            <h4>`+raw[i].category+`</h4> 
            <h5>`+raw[i].title+`</h5>
            <span class="span-head">Rs.</span>
            <span class="span-rate">`+raw[i].price+`</span>
            <span class="span-head1">Rs.</span>
            <span class="span-rate1">4562</span>
            <span class="span-discount">(82%
                OFF)</span>
        </div>
        <button class="btn-btn">ADD TO BAG</button>
    </div>`;
    product = product+prd;

    i++
    }

    document.getElementById("category-img").innerHTML=product;

}

getPtoduct();