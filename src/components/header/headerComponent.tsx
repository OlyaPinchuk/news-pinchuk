import './header.css'
import {TextField, Paper, IconButton, InputBase} from "@mui/material";
import search from './search.svg'
import SearchIcon from '@mui/icons-material/Search';
import {Search} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setStoreArticles, setStoreKeyword, updateFoundArticles, updateStoreArticles} from "../../redux/actionCreators";


const HeaderComponent = () => {

    const articlesStore: any = useSelector((state: any) => {
        return state.articles
    })

    const keyword: any = useSelector((state: any) => state.keyword)
    const dispatch = useDispatch()


    useEffect(() => {
    }, [])

    const handleInput = (e: any) => {
        dispatch(setStoreKeyword(e.target.value))

        fetch(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setStoreArticles(data))
            })

        fetch(`https://api.spaceflightnewsapi.net/v3/articles?summary_contains=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                let foundByTitle: any[] = []
                const foundBySummary = data.filter((article: any) => {
                    let titleIncludes = false
                    article.title.split(' ').forEach((word: any) => {
                        if (keyword.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(keyword.toLowerCase())) {
                            titleIncludes = true
                        }
                    })
                    if (!articlesStore.find((a: any) => a.id === article.id) && titleIncludes) {
                        foundByTitle.push(article)
                        return false
                    } else if (articlesStore.find((a: any) => a.id === article.id) || titleIncludes) {
                        return false
                    }

                    return true
                })
                dispatch(updateStoreArticles(foundByTitle))
                dispatch(updateFoundArticles(foundBySummary))

            })

    }


    return <div className='header'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet"/>

        <div className='input-container'>
            <label>Filter by keywords</label>
            <div className='search'>
                <img src={search}/>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search for articles"
                    inputProps={{'aria-label': 'search for articles'}}
                    onChange={handleInput}
                />
            </div>
        </div>
        <div className='results-container'>Results:</div>
    </div>
}

export default HeaderComponent;