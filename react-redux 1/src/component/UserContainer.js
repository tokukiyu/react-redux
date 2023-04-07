import React from 'react'
import { Connect } from 'react-redux'
import { fetchUsers } from './async'

function UserContainer() {
  return (
    <div>UserContainer</div>
  )
}

const mapStateToProps =state=>{
    return {
        userData:state.user
    }
}
const mapDispatchToProps =dispatch=>{
    return {
        fetchUsers:()=>dispatch(fetchUsers( ))
    }
}

export default (mapDispatchToProps, mapStateToProps)(UserContainer)