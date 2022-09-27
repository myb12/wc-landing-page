import { useState } from 'react'
import MainSection from '../../components/mainSection/mainSection';
import TopBar from '../../components/topBar/topBar';

export default function Home() {
    const [categoryMenuVisible, setCategoryMenuVisible] = useState(true);

    const handleCategoryMenu = () => {
        setCategoryMenuVisible(!categoryMenuVisible)
    }
    return (
        <>
            <TopBar />
            <MainSection version={2} />
        </>
    )
}
