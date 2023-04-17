import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store';
import Layout from '../../components/Layout/Layout'

function Home() {
    const tab = useSelector((state: RootState) => state.tab)
    return (
        <Layout>
            {
                ((): React.ReactNode => {
                    switch (tab.tab) {
                        case "drive":
                            return <h1>drive</h1>
                        case "shared":
                            return <h1>share</h1>
                    }
                })()
            }
        </Layout>
    )
}

export default Home