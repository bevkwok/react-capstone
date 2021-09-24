import React from 'react'

interface Props {
    rating: number
    numReviews: number
}

const Rating: React.FC<Props> = ({ rating, numReviews }) => {
    const fullStar: string = "fa fa-star"
    const halfStar: string = "fa fa-star-half-alt"
    const emptyStar: string = "fa fa-star-o"
    return (
        <div className="rating">
            <span>
                <i className={ 
                    rating >= 1 
                    ? fullStar 
                    : rating >=0.5 
                    ? halfStar 
                    : emptyStar 
                    }
                ></i>
            </span>
            <span>
                <i className={ 
                    rating >= 2 
                    ? fullStar 
                    : rating >=1.5 
                    ? halfStar 
                    : emptyStar 
                    }
                ></i>
            </span><span>
                <i className={ 
                    rating >= 3 
                    ? fullStar 
                    : rating >=2.5 
                    ? halfStar 
                    : emptyStar 
                    }
                ></i>
            </span><span>
                <i className={ 
                    rating >= 4 
                    ? fullStar 
                    : rating >=3.5 
                    ? halfStar 
                    : emptyStar 
                    }
                ></i>
            </span><span>
            <i className={ 
                    rating >= 5 
                    ? fullStar 
                    : rating >=4.5 
                    ? halfStar 
                    : emptyStar 
                    }
                ></i>
            </span>
            <span>{' '+ numReviews + ' reviews'}</span>
        </div>
    )
}

export default Rating