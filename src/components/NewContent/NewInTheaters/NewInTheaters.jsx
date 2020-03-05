import React from 'react'

const limitTitle = (title, limit = 150) => {
    const newtitle = [];

     if(title.length > limit){
         title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
               newtitle.push(cur);
            }
            return acc + cur.length;
         }, 0);
		return `${newtitle.join(' ')} ...`;
     }
     return title;
}

const NewInTheaters = (props) => (
    <div class="col-6 col-sm-12 col-lg-6">
    <div class="card card--list">
            <div class="row">
                <div class="col-12 col-sm-4">
                    <div class="card__cover">
                        <img src={`https://image.tmdb.org/t/p/w185/${props.poster_path}`} alt={`${props.title}`} />
                    </div>
                </div>

                    <div class="col-12 col-sm-8">
                        <div class="card__content">
                            <h3 class="card__title"><a href={`${props.id}`}>{props.title}</a></h3>
                                <span class="card__category">
                                {props.genre_ids}
                                </span>

                    <div class="card__wrap">
                            <span class="card__rate"><i class="fas fa-star"></i>{props.vote_average}</span>
                            <ul class="card__list">
                                        <li>HD</li>
                            </ul>
                    </div>

                    <div class="card__description">
                        <p>${limitTitle(props.overview)}</p>
                            </div>
                    </div>
            </div>
    </div>
</div>
</div>
)

export default NewInTheaters;