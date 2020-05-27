import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getCharacters} from "../store/actions/actions"

const RenderCharacters = props => {

  useEffect(() => {
    props.getCharacters()
    console.log(props.characters)
  }, []);

  return(
  <h1>Character List</h1>
  
)}

const mapStateToProps = state => {
  return{
    characters: state.characters,
    isFetching: state.isFetching,
    errors: state.errors,
  }
}

export default connect(mapStateToProps, {getCharacters})(RenderCharacters)