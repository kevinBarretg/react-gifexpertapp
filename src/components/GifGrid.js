import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifts } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>

            {/* {loading ? 'Cargando....' : 'Data cargada'} */}

            {loading && <p className='animate__animated animate__flash'>loading</p>}

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
