



let activity = document.getElementById("activity");
let words = document.getElementById("words");

activity.addEventListener("click", function(){
  let value = activity.innerHTML
  fetch(`http://www.boredapi.com/api/activity?${value}=1`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      let resWords = response.activity;
      words.innerHTML =resWords;

      let type= response.type
      console.log(type)
      fetch(`https://api.giphy.com/v1/gifs/search?q=${type}&api_key=Ez0BzNrQf1Vw5XUUyH4aOHT1ebLnVqy7&limit=5`)
        .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
        .then(response => {
          console.log(response)
          let leap = response.data[0].embed_url;
          // let url = leap.url;
          let iframe = document.getElementById("getData");
          iframe.src= leap ;

        });
      })

      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
      })
    });
