import React from 'react';


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

const favoritesListDisplay = (props) =>(    

     <div className="col-sm-6 col-lg-3 col-md-4 col-xs-12">
         

        </div>
)

export default favoritesListDisplay;