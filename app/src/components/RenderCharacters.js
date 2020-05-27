import React, {useEffect} from "react"
import {connect} from "react-redux"
import {getCharacters} from "../store/actions/actions"

const RenderCharacters = props => {

  useEffect(() => {
    props.getCharacters()
    console.log(props.characters)
  }, []);

  return(
  <div>
  <h1>Character List</h1>
  {props.isFetching && <h1>... Loading</h1>}
  {props.errors && <h1>{props.errors}</h1>}
  {props.characters.map(char => {
    return(<section key={char.char_id}>
      <h3>{char.name}</h3>
      <h4>{char.nickname}</h4>
      <img src={char.img} />
      </section>
    )
  })}
  </div>
)}

const mapStateToProps = state => {
  console.log('state', state)
  return{
    characters: state.characters,
    isFetching: state.isFetching,
    errors: state.errors,
  }
}

export default connect(mapStateToProps, {getCharacters})(RenderCharacters)