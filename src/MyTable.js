import React from 'react'

const MyTable = (props) => {
  return (
    <>
        <tr>
            <td>{props.rno}</td>
            <td>{props.nm}</td>
            <td>{props.ct}</td>
            <td>{props.fees}</td>
        </tr>
    </>
  )
}

export default MyTable