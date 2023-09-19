import "./InputSection.css"


const InputSection = props => {
    const {data,checked,deleteItem} = props 
    const {id,website,username,password,randomColor} = data

    const removeItemFromList = () => {
        deleteItem(id)
    }

    const firstLetter = username.slice(0,1).toUpperCase()
    const isHide = checked ? (<p className="para2">{password}</p>) : (<img src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png" alt="star" className="stars"/>)

    const getClassColor = `initial-section ${randomColor}`
    return (
        <li className="list-item-container">
      <div className={getClassColor}>{firstLetter}</div>
      <div className="text-cont">
        <p className="heading">{website}</p>
        <p className="para">{username}</p>
        <div className="text-image">{isHide}</div>
      </div>
      <div className="button-cont">
        <button
          type="button"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={removeItemFromList}
          />
        </button>
      </div>
    </li>
    )
}
export default InputSection