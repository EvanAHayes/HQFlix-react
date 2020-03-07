import React from 'react';
import styles from './NewInTheatersDisplay.module.css'

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
    <div className="col-6 col-sm-12 col-lg-6">
    <div className={`${styles.card} ${styles.cardList}`}>
            <div className="row">
                <div className="col-12 col-sm-4">
                    <div className="card__cover">
                        <img src={`https://image.tmdb.org/t/p/w185/${props.image}`} alt={`${props.title}`} />
                    </div>
                </div>

                    <div className="col-12 col-sm-8">
                        <div className="card__content">
                            <h3 className="card__title"><a href={`${props.id}`}>{props.title}</a></h3>
                                <span className="card__category">
                                {props.genre_ids}
                                </span>

                    <div className="card__wrap">
                            <span className="card__rate"><i className="fas fa-star"></i>{props.vote_average}</span>
                            <ul className="card__list">
                                        <li>HD</li>
                            </ul>
                    </div>

                    <div className="card__description">
                        <p>{limitTitle(props.overview)}</p>
                            </div>
                    </div>
            </div>
    </div>
</div>
</div>
)

export default NewInTheaters;