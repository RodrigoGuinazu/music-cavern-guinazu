import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
    return (
        <div align="center" className="categories">
            <h2 align="left" className="latest-h2">Categorias</h2>
            <CategoryCard category="Guitarras" image="https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg"/>
            <CategoryCard category="Bajos" image="https://d1aeri3ty3izns.cloudfront.net/media/33/330997/600/preview_2.jpg"/>
            <CategoryCard category="Amplificadores" image="https://cdn.shopify.com/s/files/1/0486/1870/0962/products/mg151.jpg?v=1614086049"/>
            <CategoryCard category="Pedales" image="https://i.pinimg.com/736x/3e/61/dc/3e61dc144d024d301791c3b8750472f6.jpg"/>
            <CategoryCard category="Grabacion" image="https://centralaudiosac.com/wp-content/uploads/2019/08/scarlett_2i2-1-600x600.png"/>
            <CategoryCard category="Teclados" image="https://www-vintageking.com.imgeng.in/media/catalog/product/cache/c8660c81d7196df55c33284290821786/y/a/yamaha-dgx-660-black-angle.jpg"/>
            <CategoryCard category="Baterias" image="https://mg.co.id/wp-content/uploads/2020/03/447000602_-_pearl-600x600.jpg"/>
            <CategoryCard category="Accesorios" image="https://aymaraperu.com.pe/wp-content/uploads/2020/07/57959-16921-ernie-ball-p02627-600x600.jpg"/>
        </div>
    )
}
