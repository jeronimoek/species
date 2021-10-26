import { GithubOutlined } from "@ant-design/icons"
import './SourceCode.scss'

const SourceCode = () => {
  return(
    <div className="SourceCode">
      <a target="_blank" rel="noreferrer" href="https://github.com/jeronimoek/species">
        <GithubOutlined style={{fontSize:70}}/>
      </a>
    </div>
  )
}

export default SourceCode