import './header.scss';
import {InputBase} from "@mui/material";
import search from './search.svg';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setStoreArticles, setStoreKeyword, updateFoundArticles, updateStoreArticles} from "../../redux/actionCreators";
import {IArticle} from "../../interfaces/articleInterface";
import {findArticlesByTitle, findArticlesBySummary} from "../../services/articleService";

const HeaderComponent = () => {

    const articlesStore: IArticle[] = useSelector((state: any) => {
        return state.articles
    })
    const keyword: string = useSelector((state: any) => state.keyword)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    const handleInput = ((e: any) => {
        dispatch(setStoreKeyword(e.target.value))
        findArticlesByTitle(e.target.value).then(data => dispatch(setStoreArticles(data)))
        findArticlesBySummary(e.target.value)
            .then(data => {
                let foundByTitle: IArticle[] = []
                const foundBySummary = data.filter((article: IArticle) => {
                    let titleIncludes: boolean = false;
                    article.title.split(' ').forEach((word: string) => {
                        if (keyword.toLowerCase().includes(word.toLowerCase()) || word.toLowerCase().includes(keyword.toLowerCase())) {
                            titleIncludes = true
                        }
                    });

                    if (!articlesStore.find((a: IArticle) => a.id === article.id) && titleIncludes) {
                        foundByTitle.push(article)
                        return false
                    } else if (articlesStore.find((a: IArticle) => a.id === article.id) || titleIncludes) {
                        return false
                    }

                    return true
                })
                dispatch(updateStoreArticles(foundByTitle))
                dispatch(updateFoundArticles(foundBySummary))
            })
    })

    return <div className='header'>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Ubuntu" rel="stylesheet"/>

        <div className='input-container'>
            <label>Filter by keywords</label>
            <div className='search'>
                <img src={search} alt='search icon'/>
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