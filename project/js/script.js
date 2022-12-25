document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const imgSponsor = document.querySelectorAll('.promo__adv img'),
          alignBg = document.querySelector('.promo__bg'),
          align = document.querySelector('.promo__genre'),
          filmList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          inForm = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type = "checkbox"]');
    
      
         
    function deleted (wet) {
       wet.forEach(item =>{
            item.remove();
        }); 
    }
    deleted(imgSponsor)
    
    const nameChange = () =>{
        align.textContent = 'Драма';
        alignBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    nameChange()
    
    movieDB.movies.sort()

    function createMovieList (films, parent) {
         
        parent.innerHTML = "";
    
        films.forEach((film, i) =>{
            parent.innerHTML += `
                <li class="promo__interactive-item">${i +1} ${film}
                    <div class="delete"></div>
                </li>
            `;
         });
         document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click',() => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
            })
         })
    }
    createMovieList(movieDB.movies, filmList)

    addForm.addEventListener('submit', (event) => {
        event.preventDefault()

        let result = inForm.value
        const cheac = checkbox.checked;
    if(result){
        if( result.length > 21){
            result = `${result.substring(0, 22)}...`;
    
        }
        if(cheac){
            console.log("Добавляем любимый фильм");
        }
        movieDB.movies.push(result);
        movieDB.movies.sort();

        createMovieList(movieDB.movies, filmList)
        addForm.reset()
        
    }
   
    })
})
 






