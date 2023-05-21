for (let i = 6; i < 16; i++) {
    $.ajax({
    method:'GET',
    url:'https://api.disneyapi.dev/character/'+i,
    success:function(res){
        console.log(res);
     $('.cardsss').append(
        ` <div class="card" style="width: 18rem;">
            <img src="${res.data.imageUrl}" class="card-img-top" alt="...">  
            <div class="card-body">
                <h5 class="card-title">${res.data.name}</h5>
                <p class="card-text"></p>
                <a href='details.html?id=${res.id}' target='_blank' class="btn btn-primary">Details</a>
            </div>
        </div>`
     )
    },
    error:function(err){
        console.log(err);
    }
    })
        
    }

