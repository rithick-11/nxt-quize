import './index.css'

const Warapper = ({children}) => (
  <div className="bg-conatiner">
    <div className="wrapper-card">
      <div className="wapper-children">{children}</div>
    </div>
  </div>
)

export default Warapper
