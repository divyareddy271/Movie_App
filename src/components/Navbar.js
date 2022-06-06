import styles from "../styles/Navbar.module.css";
import React from "react";
import { data } from "./data";
import { addMovieToList,handleMovieSearch} from "../Actions";

class Navbar extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            searchText : "",
        }
    }
    handleChange = (e)  => {
        this.setState({
            searchText : e.target.value,

        })
      
    }
    handleaddToMovies = (movie) => {
        
        this.setState ( {
            searchText : " ", 
        })
        this.props.dispatch(addMovieToList(movie));

    }
   handleSearch = ()  => {
      const {searchText} = this.state;
      this.props.dispatch(handleMovieSearch(searchText));
    }
    
    render() {
       
        const {search, showSearchResults} = this.props.search;
        return (
            <div className={styles.navbar}>
                <div className={styles.searchcontainer}>
                    <input onChange={this.handleChange} />
                    <button id={styles.searchBtn} onClick = {this.handleSearch} >search</button>
                    { showSearchResults && (
                        <div className="search-results">
                            <div className="searchimg" >
                                <img src={search.Poster}></img>
                            </div>
                            <div className="searchdetails" >
                                <div className="searchtitle">
                                    {search.Title}
                                </div>
                                <div className="">
                                <button onClick={ () => this.handleaddToMovies(search)}>Add to movies</button>
                                </div>  
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}
export default Navbar;
