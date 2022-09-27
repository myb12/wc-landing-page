import { configureStore } from '@reduxjs/toolkit'
import burgerMenuSlicer from './burgerMenu/burgerMenu'
import categorySlicer from './category/category'

export default configureStore({
    reducer: {
        categoryMenuVisible: categorySlicer,
        burgerMenuVisible: burgerMenuSlicer,

    }
})