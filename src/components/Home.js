import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home_container">
                <img src="https://static.vecteezy.com/system/resources/previews/017/216/151/non_2x/colorful-graffiti-wall-art-background-street-art-hip-hop-urban-illustration-background-seamless-amazing-graffiti-art-background-vector.jpg" alt="" className="home_image" />
            
                <div className="home_row">
                    <Product 
                        id='1'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition LAIA made in Germany"
                        price={20.44}
                        rating={5}
                        image="https://www.montana-cans.com/media/image/c7/9c/93/MONTANA-BLACK-ARTIST-EDITION-LAILA-400ML-WEB.jpg"
                    />
                    <Product 
                        id='2'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition CLOAKWORK made in Germany"
                        price={21.52}
                        rating={5}
                        image="https://www.montana-cans.com/media/image/fa/da/3c/MONTANA-BLACK-ARTIST-EDITION-CLOAKWORK-400ML.jpg"
                    />
                </div>

                <div className="home_row">
                <Product 
                        id='3'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition BRUCE made in Germany"
                        price={22.99}
                        rating={4}
                        image="https://www.montana-cans.com/media/image/64/21/f9/MONTANA-BLACK-ARTIST-EDITION-BRUCE-400ML-02.jpg"
                    />
                    <Product 
                        id='4'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition MINA made in Germany"
                        price={23.99}
                        rating={5}
                        image="https://www.montana-cans.com/media/image/28/3b/40/MONTANA-BLACK-ARTIST-EDITION-MINA-400ML-02.jpg"
                    />
                    <Product 
                        id='5'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition by DEMS made in Germany"
                        price={24.99}
                        rating={4}
                        image="https://graffshop.pl/userdata/public/gfx/14529/5080LTD.jpg"
                    />
                </div>

                <div className="home_row">
                <Product 
                        id='6'
                        title="Montana Highest Quality Spray Paint Can BLACK Artist Edition NAWACID made in Germany"
                        price={25.99}
                        rating={5}
                        image="https://www.montana-cans.com/media/image/d4/25/48/MO-BLACK_400ML_ARTIST_Nawas.jpg"
                    />
                </div>

            </div>

        </div>
    </div>
  )
}

export default Home